/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Disposable } from 'bedrock';
import { IAService } from './a';

export class AService extends Disposable implements IAService {
  declare readonly _serviceBrand: undefined;

  constructor() {
    super();
  }

  sayHello(): void {
    console.log('Hello');
  }
}
