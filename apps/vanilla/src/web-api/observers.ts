type ResizeFn = () => void;
type MutateFn = () => void;
type UnsubscribeFn = () => void;

export class Layput {
  private resizeListeners: ResizeFn[] = [];
  private mutateListeners: MutateFn[] = [];

  constructor() {}

  public subscribeOnResize(fn: ResizeFn): UnsubscribeFn {
    this.resizeListeners.push(fn);
    return () => {
      this.resizeListeners = this.resizeListeners.filter((cb) => cb !== fn);
    };
  }

  public subscribeOnMutate(fn: MutateFn): UnsubscribeFn {
    this.mutateListeners.push(fn);
    return () => {
      this.mutateListeners = this.mutateListeners.filter((cb) => cb !== fn);
    };
  }
}
