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
        const cypherQuery = `
            MATCH (t:Technology${queryDto.name ? ' {name: $name}' : ''})-[r:RELATED]-(ot: Technology)

            RETURN ot

            ORDER BY toInteger(r.weight), ot.name ${queryDto.orderType}
            SKIP toInteger($skip)
            LIMIT toInteger($limit);
        `;

        const cypherCountQuery = `
            MATCH (t:Technology${queryDto.name ? ' {name: $name}' : ''})-[]-(ot: Technology)

            RETURN count(ot) as totalCount;
        `;

        const totalCountRes = await this.neo4jService.read(cypherCountQuery, queryDto);
        const res = await this.neo4jService.read(cypherQuery, queryDto);

        return FindWrapperDto.fromEntities(
            res.records.map(record => SmartTagDto.fromEntity(new SmartTagEntity(record.get('ot')))),
            totalCountRes.records[0].get('totalCount').toInt()
        );
    }
}
