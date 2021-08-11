import { Test, TestingModule } from '@nestjs/testing';
import { EmitterController } from './emitter.controller';

describe('EmitterController', () => {
  let controller: EmitterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmitterController],
    }).compile();

    controller = module.get<EmitterController>(EmitterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
