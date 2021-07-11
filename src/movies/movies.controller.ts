import { Controller, Get } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { ActionsService } from './services/actions/actions.service';
import { DramaService } from './services/drama/drama.service';

@Controller('movies')
export class MoviesController {
    constructor(
        private readonly actionService: ActionsService, 
        private readonly dramaService: DramaService,
        private readonly usersService: UsersService
    ) {}

    @Get('/action')
    actionSayHi():string{
        return this.actionService.sayHi();
    }

    @Get('/drama')
    dramaSayHi():string{
        return this.dramaService.sayHi();
    }

    @Get('/user/mac')
    userMac():object{
        return this.usersService.getMacAdd();
    }
}
