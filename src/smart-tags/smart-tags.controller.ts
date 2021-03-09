import {Controller, Get, Param, ParseIntPipe, Query} from '@nestjs/common';
import {SmartTagsService} from "./smart-tags.service";
import {SmartTagsQueryDto} from "./dto/smart-tags.query.dto";

@Controller('smart-tags')
export class SmartTagsController {
    constructor(private readonly smartTagsService: SmartTagsService) {
    }

    @Get()
    async getSmartTags(
        @Query() queryDto: SmartTagsQueryDto
    ) {
        return this.smartTagsService.list(queryDto);
    }
}
