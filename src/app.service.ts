import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return [
      { name: 'sample1', age: 12, sex: 'male' },
      { name: 'sample2', age: 12, sex: 'male' },
      { name: 'sample3', age: 12, sex: 'male' },
      { name: 'sample4', age: 12, sex: 'male' },
    ];
  }
}
