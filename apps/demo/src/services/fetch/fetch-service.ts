import { Disposable } from 'bedrock';

import { IEnvironmentService } from '../environment';
import { IFetchService } from './fetch-service.interface';

export class FetchService extends Disposable implements IFetchService {
  declare readonly _serviceBrand: undefined;

  constructor(
    @IEnvironmentService private _environmentService: IEnvironmentService,
  ) {
    super();
  }

  request(): void {
    if (this._environmentService._isDebug) {
      console.log('Hello World');
    } else {
      console.log('Hi Pwcong');
    }
  }
}
