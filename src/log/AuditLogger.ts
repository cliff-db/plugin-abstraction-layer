import { PluginMeta } from "../PluginMeta";
import { LogMessage } from "./LogMessage";

export abstract class AuditLogger {
    public constructor(protected meta: PluginMeta) {
        // empty constructor (just initialization)
    }

    abstract async push(message: LogMessage): Promise<void>;
}