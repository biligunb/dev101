import { BadRequestException, Injectable } from '@nestjs/common';
import RefreshToken from './entities/refresh-token.entity';
import { UsersService } from 'src/users/users.service';
import { sign, verify } from 'jsonwebtoken';
import { User } from 'src/users/entities/user.entity';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    private refreshTokens: RefreshToken[] = [];
    
    constructor(private readonly userService: UsersService){}

    async refresh(refreshStr:string): Promise<string | undefined> {
        const refreshToken = await this.retrieveRefreshToken(refreshStr);
        if(!refreshStr){
            return undefined;
        }

        const user = await this.userService.findOne(refreshToken.userId)

        if (!user) {
            return undefined
        }

        const accessToken = {
            userId: refreshToken.userId,
        };

        return sign(accessToken, process.env.ACCESS_SECRET,{expiresIn: process.env.EXPIRE_TIME});
    }

    private retrieveRefreshToken(
        refreshStr: string,
    ): Promise<RefreshToken | undefined > {
        try {
            const decoded = verify(refreshStr , process.env.REFRESH_SECRET);
            if (typeof decoded === 'string'){
                return undefined;
            }
            return Promise.resolve(
                this.refreshTokens.find((token:RefreshToken) => token.id === decoded.id),
            )

        } catch (e) {
            return undefined;
        }
    }

    async login(
        email:string,
        password:string,
        values:{userAgent:string; ipAddress: string},
    ): Promise<{accessToken:string; refreshToken: string}
 | undefined>{
    const user = await this.userService.findbyem(email);
    if (!user){
        throw new BadRequestException('Invalid credantials');
    }

    if (!await bcrypt.compare(password, user.password)){
        
        throw new BadRequestException('Invalid credantials');
    }

    return this.newReshreshAndAccessToken(user, values);
 }    

 private async newReshreshAndAccessToken(
    user: User,
    values: { userAgent: string; ipAddress: string },
 ): Promise<{ accessToken: string; refreshToken: string}>{
    const refreshObject = new RefreshToken({
        id: 
            this.refreshTokens.length === 0
            ? 0
            : this.refreshTokens[this.refreshTokens.length -1].id + 1,
            ...values,
            userId: user.id
    });
    this.refreshTokens.push(refreshObject);

    return {
        refreshToken: refreshObject.sign(),
        accessToken: sign(
            {
                userId: user.id,
            },
            process.env.ACCESS_SECRET,
            {
                expiresIn: '1h',
            }
        ),
    }
 }

 async logout(refreshStr):Promise<void>{
    const refreshToken = await this.retrieveRefreshToken(refreshStr);

    if(!refreshToken){
        return;
    }

    //delete refreshtoken from db
    this.refreshTokens = this.refreshTokens.filter(
        (refreshToken:RefreshToken) => refreshToken.id !== refreshToken.id,
    );
 }

}
