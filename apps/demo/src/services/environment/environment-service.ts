import type { IEnvironmentService } from './environment-service.interface';

export class EnvironmentService implements IEnvironmentService {
  _serviceBrand: undefined;

  _isDev: boolean;

  _isDebug: boolean;

  constructor() {
    this._isDev = process.env.NODE_ENV === 'development';
    this._isDebug =
      new URLSearchParams(window.location.search).get('__debug') === '1';
  }

  isDev() {
    return this._isDev;
  }

  isDebug() {
    return this._isDebug;
  }
}
