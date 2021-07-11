import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { ActionsService } from './services/actions/actions.service';
import { DramaService } from './services/drama/drama.service';

@Module({
  controllers: [MoviesController],
  providers: [ActionsService, DramaService]
})
export class MoviesModule {}
