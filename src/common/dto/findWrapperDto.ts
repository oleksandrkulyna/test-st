import {ApiResponseProperty} from '@nestjs/swagger';
import {SmartTagDto} from '../../smart-tags/dto/smart-tag.dto';

export type FindWrapperDocumentType = SmartTagDto;

export class FindWrapperDto {
    @ApiResponseProperty()
    result: FindWrapperDocumentType[];
    @ApiResponseProperty()
    count: number;

    static fromEntities(entities: Array<FindWrapperDocumentType>, totalCount: number): FindWrapperDto {
        return {
            result: entities,
            count: totalCount
        } as FindWrapperDto;
    }
}