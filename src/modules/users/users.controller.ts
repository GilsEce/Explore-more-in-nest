import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/middleware/guards/auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Get('/mac')
    @UseGuards(AuthGuard)
    getUserMac():object{
        return this.usersService.getMacAdd();
    }
}
