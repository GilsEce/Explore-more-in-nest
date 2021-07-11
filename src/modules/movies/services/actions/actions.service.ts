import { Injectable } from '@nestjs/common';

@Injectable()
export class ActionsService {
    sayHi():string{
        return 'Hi Action';
    }
}
