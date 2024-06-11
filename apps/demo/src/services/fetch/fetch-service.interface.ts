import { createDecorator } from 'bedrock';

export const IFetchService = createDecorator<IFetchService>('fetchService');

export interface IFetchService {
  readonly _serviceBrand: undefined;

  request: () => void;
}
