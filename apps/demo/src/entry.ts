import { Flow } from './flow';

export class Entry {
  private _flow!: Flow;

  constructor() {
    this.start();
  }

  start(): void {
    this._flow = new Flow();
    this._flow
      .startLifeCycle()
      .then(() => {
        // 自定义逻辑
      })
      .catch(error => {
        console.error('init error:', error);
      });
  }
}
