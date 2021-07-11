import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { MoviesModule } from './modules/movies/movies.module';

@Module({
  imports: [UsersModule, ProductsModule, MoviesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
