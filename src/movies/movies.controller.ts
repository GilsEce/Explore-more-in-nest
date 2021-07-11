import { Controller, Get } from '@nestjs/common';
import { ActionsService } from './services/actions/actions.service';
import { DramaService } from './services/drama/drama.service';

@Controller('movies')
export class MoviesController {
    constructor(
        private readonly actionService: ActionsService, 
        private readonly dramaService: DramaService
    ) {}

    @Get('/action')
    actionSayHi():string{
        return this.actionService.sayHi();
    }

    @Get('/drama')
    dramaSayHi():string{
        return this.dramaService.sayHi();
    }
}
