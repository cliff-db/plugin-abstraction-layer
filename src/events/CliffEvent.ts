import { EventArgs } from "./EventArgs.ts";
import { EventHandler } from "./EventHandler.ts";

export class CliffEvent<T extends EventArgs> {
  private handlers: Array<EventHandler<T>>;
  private sorted = false;

  constructor() {
    this.handlers = new Array();
  }

  public async invoke(args: T): Promise<void> {
    if(!this.sorted) {
        this.ensurePrioritySort();
    }
    for (const handler of this.handlers) {
      await handler.fn(args);
    }
  }

  public subscribe(handler: EventHandler<T>): void {
    this.handlers.push(handler);
    this.sorted = false;
  }

  public unsubscribe(handler: EventHandler<T>): void {
    this.handlers.filter((e) => {
      return e != handler;
    });
  }

  private ensurePrioritySort(): void {
    this.handlers = this.handlers.sort((handlerA, handlerB) => {
      if (handlerA.priority > handlerB.priority) {
        return 1;
      } else if (handlerA.priority < handlerB.priority) {
        return -1;
      }
      return 0;
    });
    this.sorted = true;
  }
}
