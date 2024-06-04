import {
  ServiceCollection,
  IInstantiationService,
  InstantiationService,
  SyncDescriptor,
} from 'bedrock';

import { IAService, AService } from './services/a';
import { IBService, BService } from './services/b';

export class Main {
  main(): void {
    try {
      this.startup();
    } catch (error: any) {
      console.log(error.message);
    }
  }

  private async startup(): Promise<void> {
    const [instantiationService, aService] = this.createServices();

    // TODO
  }

  private createServices(): [IInstantiationService, IAService] {
    const services = new ServiceCollection();

    const aService = new AService();
    services.set(IAService, aService);

    services.set(IBService, new SyncDescriptor(BService));

    return [new InstantiationService(services, true), aService];
  }

  private async initServices(): Promise<void> {}
}
