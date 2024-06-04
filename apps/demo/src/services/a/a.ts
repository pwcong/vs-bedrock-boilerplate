import { Disposable } from 'bedrock';
import { IAService } from './a.interface';

export class AService extends Disposable implements IAService {
  declare readonly _serviceBrand: undefined;

  sayHello(): void {
    console.log('Hello');
  }
}
