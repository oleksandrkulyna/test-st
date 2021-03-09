import {BasicQueryDto} from '../../common/dto/basicQueryDto';
import {ApiProperty} from "@nestjs/swagger";
import {IsOptional} from "class-validator";

export class SmartTagsQueryDto extends BasicQueryDto {
    @ApiProperty({required: false, type: String, default: ''})
    @IsOptional()
    name = '';
}