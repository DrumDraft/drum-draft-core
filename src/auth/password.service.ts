import { Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';

@Injectable()
export class PasswordService {
  async hashPassword(password: string): Promise<string> {
    argon2.hash(password).then((hash) => {
      console.log(hash);
    });
    return argon2.hash(password);
  }

  async comparePasswords(password: string, hash: string): Promise<boolean> {
    return argon2.verify(hash, password);
  }
}
