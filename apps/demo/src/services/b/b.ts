import { createDecorator } from 'bedrock';

export const IBService = createDecorator<IBService>('bServices');
export interface IBService {
  readonly _serviceBrand: undefined;

  sayHelloWorld(): void;
}
