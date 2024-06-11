import type {
  IWorkbenchService,
  IWorkbenchOptions,
} from './workbench-service.interface';

export class WorkbenchService implements IWorkbenchService {
  _serviceBrand: undefined;

  constructor(_options: IWorkbenchOptions) {
    console.log('Hello World');
  }

  bootstrap() {
    //
  }
}
