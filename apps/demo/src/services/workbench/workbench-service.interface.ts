import { createDecorator } from 'bedrock';

export const IWorkbenchService =
  createDecorator<IWorkbenchService>('workbenchService');

export interface IWorkbenchService {
  readonly _serviceBrand: undefined;

  bootstrap: () => void;
}

export interface IWorkbenchOptions {
  root: HTMLElement | string | null;
}
