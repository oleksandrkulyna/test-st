import { Test, TestingModule } from '@nestjs/testing';
import { SmartTagsController } from './smart-tags.controller';

describe('SmartTagsController', () => {
  let controller: SmartTagsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmartTagsController],
    }).compile();

    controller = module.get<SmartTagsController>(SmartTagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
