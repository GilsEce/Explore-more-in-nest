import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { MoviesController } from './movies.controller';
import { ActionsService } from './services/actions/actions.service';
import { DramaService } from './services/drama/drama.service';

@Module({
  imports:[UsersModule],
  controllers: [MoviesController],
  providers: [ActionsService, DramaService]
})
export class MoviesModule {}
