docker = {
    is_virtual_machine: false,
    os: "only host OS",
    life_cycle: {
        dockerFile: {
            commands: {
                FROM: "Эхлэлийн эхлэл үндсэн суурь image-г зааж өгнө. Үндсэн суурь (FROM ubuntu:18.04)",
                ENV: 'Dockerfile болон container дотор хэрэглэж болох орчны хувьсагч. Өөрт хэрэгтэй хувьсагчийг хадгалах (ENV SOME_VAR="/my_env_var")',
                RUN: "Өмнөх давхарга дээр шинэ давхарга үүсгэх команд. Хэрэгтэй package-уудыг суулгах (RUN apt-get install -y nginx)",
                COPY: "Шинэ файл оруулах (багахаан ялгаатай 2 команд). Ихэвчлэн апп source code-оруулахад хэрэглэдэг (COPY . /app)",
                ADD: "Шинэ файл оруулах (багахаан ялгаатай 2 команд). Ихэвчлэн апп source code-оруулахад хэрэглэдэг (ADD . /app)",
                ENTRYPOIN: 'Docker container асах үед ажиллах команд. Nginx асаах (ENTRYPOINT ["/usr/bin/nginx", "-g", "daemon off;"])',
                EXPOSE: "Docker container доторх портыг гадагш нь зөвшөөрөх. Nginx 80 порт руу хандах боломжтой болгох (EXPOSE 80)",
                OTHER: ["USER","WORKDIR","ARG","MAINTAINER","CMD","LABEL","VOLUME"]
            },
            isLike: "class of object",
            filename: "DockerFile"
        },
        dockerImage: {
            create: "built docker file",
            commands: {
                images: "show docker images"
            },
            isLike: "declare object"
        },
        dockerContainer: {
            isContainer: "docker working version",
            commands: {
                ps: "show list of container"
            },
            isLike: "instance object"
        }
    },
    dockerCompose: {
        isLike: "java package",
        fileName: "docker-compose.yaml",
        condition: "works multi container work together",
        commands: {
            version: "Docker Compose-н хувилбарыг зааж өгнө",
            services: "Ажиллуулах container-уудаа үүсгэнэ (define)",
            db: "үүсгэж буй service-н нэр",
            image: "Ямар Docker image ажиллуулахаа сонгоно",
            ports: "Нээх портуудын тохиргоо (гадна host дээрх : container доторх)",
            environment: "ENV хувьсагчууд",
        }
    },
    commandType: "new line",
    line: "every Line is new layer"
}