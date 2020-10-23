import { DispatchPriority } from "./DispatchPriority.ts";
import { EventArgs } from "./EventArgs.ts";

export class EventHandler<T extends EventArgs> {
    public constructor(public fn: (args: T) => Promise<void>, public priority: DispatchPriority = DispatchPriority.Normal) {}
}