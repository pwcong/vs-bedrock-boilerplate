import { createDecorator } from 'bedrock';

export const IAService = createDecorator<IAService>('aServices');
export interface IAService {
  readonly _serviceBrand: undefined;

  sayHello(): void;
}
