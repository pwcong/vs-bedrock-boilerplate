/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// This is a facade for the observable implementation. Only import from here!

import {
  ConsoleObservableLogger,
  setLogger,
} from '../observable-internal/logging';

export type {
  IObservable,
  IObserver,
  IReader,
  ISettable,
  ISettableObservable,
  ITransaction,
  IChangeContext,
  IChangeTracker,
} from '../observable-internal/base';

export {
  observableValue,
  disposableObservableValue,
  transaction,
  subtransaction,
} from '../observable-internal/base';
export {
  derived,
  derivedOpts,
  derivedHandleChanges,
  derivedWithStore,
} from '../observable-internal/derived';
export {
  autorun,
  autorunDelta,
  autorunHandleChanges,
  autorunWithStore,
  autorunOpts,
  autorunWithStoreHandleChanges,
} from '../observable-internal/autorun';
export type { IObservableSignal } from '../observable-internal/utils';
export {
  constObservable,
  debouncedObservable,
  derivedObservableWithCache,
  derivedObservableWithWritableCache,
  keepObserved,
  recomputeInitiallyAndOnChange,
  observableFromEvent,
  observableFromPromise,
  observableSignal,
  observableSignalFromEvent,
  wasEventTriggeredRecently,
} from '../observable-internal/utils';
export {
  ObservableLazy,
  ObservableLazyPromise,
  ObservablePromise,
  PromiseResult,
  waitForState,
  derivedWithCancellationToken,
} from '../observable-internal/promise';

// Remove "//" in the next line to enable logging
const enableLogging = false;
// || Boolean("true") // done "weirdly" so that a lint warning prevents you from pushing this
if (enableLogging) {
  setLogger(new ConsoleObservableLogger());
}
