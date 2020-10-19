export class CliffEvent<T> {
    
    private handlers: Array<(args: T) => Promise<void>>

    constructor() {
        this.handlers = new Array();
    }

    public async invoke(args: T): Promise<void> {
        for (const handler of this.handlers) {
            await handler(args);
        }
    }
    
    public subscribe(fn: (args: T) => Promise<void>): void {
        this.handlers.push(fn);
    }

    public desubscribe(fn: (args: T) => Promise<void>): void {
        this.handlers.filter((e) => { 
            return e != fn;
        }
        );
    }
}