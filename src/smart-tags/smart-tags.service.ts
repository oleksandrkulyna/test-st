import {Injectable} from '@nestjs/common';
import {Neo4jService} from "nest-neo4j/dist";
import {SmartTagsQueryDto} from "./dto/smart-tags.query.dto";
import {FindWrapperDto} from "../common/dto/findWrapperDto";
import {SmartTagDto} from "./dto/smart-tag.dto";
import {SmartTagEntity} from "./smart-tag.entity";

@Injectable()
export class SmartTagsService {
    constructor(private readonly neo4jService: Neo4jService) {
    }

    async list(queryDto: SmartTagsQueryDto): Promise<FindWrapperDto> {
        const res = await this.neo4jService.read(`
            MATCH (t:Technology {name: $name})-[r:RELATED]-(ot: Technology)

            RETURN ot

            ORDER BY toInteger(r.weight) DESC
            SKIP toInteger($skip)
            LIMIT toInteger($limit);
        `, {
            name: queryDto.name,
            orderType: queryDto.orderType,
            skip: queryDto.offset,
            limit: queryDto.limit,
        });

        return FindWrapperDto.fromEntities(res.records.map(record => SmartTagDto.fromEntity(new SmartTagEntity(record.get('ot')))), 0);
    }

    async getConnected(name: string): Promise<string[]> {
        const res = await this.neo4jService.read(`
            MATCH (t:Technology {name: $name})-[:RELATED]->(ot:Technology)
            RETURN ot AS tags;
        `, {name})

        const check = res;

        return res.records[0].get('genres')
    }
}
