import { Controller, Get } from '@nestjs/common';

@Controller('admin')
export class AdminController {

    @Get()
    getAdmin():string{
        return 'Im from admin';
    }
}
