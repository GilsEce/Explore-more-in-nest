import { Injectable } from '@nestjs/common';

@Injectable()
export class DramaService {
    sayHi():string{
        return 'Hi Drama';
    }
}
