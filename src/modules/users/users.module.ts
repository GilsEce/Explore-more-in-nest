import { MiddlewareConsumer, NestMiddleware, NestModule } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { LoggerMiddleware } from 'src/middleware/logger.middleware';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService]
})
export class UsersModule  implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMiddleware)
    .forRoutes('users');
  }
}
