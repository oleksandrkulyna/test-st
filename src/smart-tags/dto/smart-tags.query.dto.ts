import {BasicQueryDto} from '../../common/dto/basicQueryDto';
import {ApiProperty} from "@nestjs/swagger";

export class SmartTagsQueryDto extends BasicQueryDto {
    @ApiProperty({required: false, type: String, default: ''})
    name: string;
}