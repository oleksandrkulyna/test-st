import { Module } from '@nestjs/common';
import { SmartTagsController } from './smart-tags.controller';
import { SmartTagsService } from './smart-tags.service';

@Module({
  controllers: [SmartTagsController],
  providers: [SmartTagsService]
})
export class SmartTagsModule {}
