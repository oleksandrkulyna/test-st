import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {json} from "body-parser";
import {ValidationPipe} from "@nestjs/common";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";


async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.use(json({limit: '10mb'}));

    app.useGlobalPipes(new ValidationPipe({
        transform: true,
        //     transformOptions: {enableImplicitConversion: true}
    }));

    const options = new DocumentBuilder()
        .setTitle('ST backend')
        .setDescription('Documentation of the ST backend api')
        .setVersion('0.0.1')
        .addBearerAuth()
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);

    await app.listen(process.env.PORT || 8080);
}

bootstrap();
