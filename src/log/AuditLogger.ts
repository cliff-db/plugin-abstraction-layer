import { PluginMeta } from "../PluginMeta.ts";
import { LogMessage } from "./LogMessage.ts";

export abstract class AuditLogger {
    public constructor(protected meta: PluginMeta) {
        // empty constructor (just initialization)
    }

    abstract async push(message: LogMessage): Promise<void>;
}