import { Injectable } from '@nestjs/common';
import getMAC, { isMAC } from 'getmac';
import { Mac } from './interfaces/mac.interface';

@Injectable()
export class UsersService {
    getMacAdd():object {
        const macAddress:Mac = { mac_address:getMAC() };
        return macAddress;
    }
}
