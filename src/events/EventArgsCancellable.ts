import { EventArgs } from "./EventArgs.ts";

export class EventArgsCancellable<T = {}> extends EventArgs {
    private _cancelled: boolean = false;
    private _cancelReason?: T;

    get cancelled(): boolean {
        return this._cancelled;
    }

    set cancelled(bool: boolean) {
        this._cancelled = bool;
    }

    get cancelReason(): T | undefined {
        return this._cancelReason;
    }
}