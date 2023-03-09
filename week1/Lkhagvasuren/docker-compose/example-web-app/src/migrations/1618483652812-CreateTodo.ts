import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTodo1618483652812 implements MigrationInterface {
    name = 'CreateTodo1618483652812'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `todo` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `todo`");
    }

}
