import {ApiResponseProperty} from '@nestjs/swagger';
import {SmartTagEntity} from "../smart-tag.entity";

export class SmartTagDto {
    @ApiResponseProperty()
    id: number;
    @ApiResponseProperty()
    name: string;

    static fromEntity(entity: SmartTagEntity): SmartTagDto {
        if (!entity) {
            return null;
        }

        return {
            id: entity.getId(),
            name: entity.getName(),
        } as SmartTagDto;
    }
}