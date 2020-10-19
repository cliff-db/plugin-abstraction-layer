import { LogLevel } from "./LogLevel";

export class LogMessage {
    public constructor(public level: LogLevel, public message: string) {
        // empty constructor (just for initialization)
    }
}