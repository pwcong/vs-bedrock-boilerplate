/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Disposable } from 'bedrock';
import { IAService } from '../a/a';
import { IBService } from './b';

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
