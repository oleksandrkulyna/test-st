import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {Neo4jConfig, Neo4jModule} from 'nest-neo4j/dist';
import {SmartTagsModule} from './smart-tags/smart-tags.module';

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true}),
        Neo4jModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService): Neo4jConfig => ({
                scheme: configService.get('NEO4J_SCHEME'),
                host: configService.get('NEO4J_HOST'),
                port: configService.get('NEO4J_PORT'),
                username: configService.get('NEO4J_USERNAME'),
                password: configService.get('NEO4J_PASSWORD'),
                database: configService.get('NEO4J_DATABASE'),
            })
        }),
        SmartTagsModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
