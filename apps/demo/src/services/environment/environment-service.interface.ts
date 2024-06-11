import { createDecorator } from 'bedrock';

export const IEnvironmentService =
  createDecorator<IEnvironmentService>('environmentService');

export interface IEnvironmentService {
  readonly _serviceBrand: undefined;
  /**
   * 是否是开发环境
   */
  readonly _isDev: boolean;
  /**
   * 是否是调试模式
   */
  readonly _isDebug: boolean;
}
