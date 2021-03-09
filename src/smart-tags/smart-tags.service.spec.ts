import { Test, TestingModule } from '@nestjs/testing';
import { SmartTagsService } from './smart-tags.service';

describe('SmartTagsService', () => {
  let service: SmartTagsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmartTagsService],
    }).compile();

    service = module.get<SmartTagsService>(SmartTagsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
