import { Test, TestingModule } from '@nestjs/testing';
import { DramaService } from './drama.service';

describe('DramaService', () => {
  let service: DramaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DramaService],
    }).compile();

    service = module.get<DramaService>(DramaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
