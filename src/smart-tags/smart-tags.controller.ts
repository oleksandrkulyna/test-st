import {Controller, Get, HttpStatus, Query} from '@nestjs/common';
import {SmartTagsService} from "./smart-tags.service";
import {SmartTagsQueryDto} from "./dto/smart-tags.query.dto";
import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {FindWrapperDto} from "../common/dto/findWrapperDto";

@Controller('smart-tags')
export class SmartTagsController {
    constructor(private readonly smartTagsService: SmartTagsService) {
    }

    @Get()
    @ApiOperation({summary: 'Register new user'})
    @ApiResponse({status: HttpStatus.OK, type: FindWrapperDto})
    async getSmartTags(
        @Query() queryDto: SmartTagsQueryDto
    ): Promise<FindWrapperDto> {
        return this.smartTagsService.list(queryDto);
    }
}
