import { Disposable } from 'bedrock';
import { IAService } from '../a/a.interface';
import { IBService } from './b.interface';

export class BService extends Disposable implements IBService {
  declare readonly _serviceBrand: undefined;

  constructor(@IAService private _aService: IAService) {
    super();
  }

  sayHelloWorld(): void {
    this._aService.sayHello();
    console.log('World');
  }
}
