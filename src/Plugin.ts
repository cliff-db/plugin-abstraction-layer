import { PluginMeta } from "./PluginMeta";

export abstract class Plugin {
    public constructor(protected meta: PluginMeta) {
        // empty constructor (just initialization)
    }

    abstract async enable(): Promise<void>;
    abstract async shutdown(): Promise<void>;
}