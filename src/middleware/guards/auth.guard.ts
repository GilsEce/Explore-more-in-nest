import { Observable } from 'rxjs';

import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    if(this.checkCredentials()){
      return true;
    }else{
      throw new HttpException({
        status: HttpStatus.UNAUTHORIZED,
        error: 'Access Denied',
      }, HttpStatus.UNAUTHORIZED);
    }
  }

  checkCredentials():boolean{
    return true;
  }
}