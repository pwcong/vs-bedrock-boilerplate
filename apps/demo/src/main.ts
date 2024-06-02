import {
  ServiceCollection,
  IInstantiationService,
  InstantiationService,
  SyncDescriptor,
} from 'bedrock';

import { IAService } from './services/a/a';
import { AService } from './services/a/aService';
import { IBService } from './services/b/b';
import { BService } from './services/b/bService';

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

    debugger;
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
