import {
  ServiceCollection,
  IInstantiationService,
  InstantiationService,
  SyncDescriptor,
} from 'bedrock';

import {
  IEnvironmentService,
  EnvironmentService,
} from './services/environment';
import { FetchService, IFetchService } from './services/fetch';

export class Flow {
  async startLifeCycle(): Promise<void> {
    const [, environmentService] = this.createServices();
    this.initServices(environmentService);
  }

  private createServices(): [IInstantiationService, IEnvironmentService] {
    const services = new ServiceCollection();

    const environmentService = new EnvironmentService();
    services.set(IEnvironmentService, environmentService);

    services.set(IFetchService, new SyncDescriptor(FetchService));

    return [new InstantiationService(services, true), environmentService];
  }

  private async initServices(
    _environmentService: IEnvironmentService,
  ): Promise<void> {
    // TODO
  }
}
