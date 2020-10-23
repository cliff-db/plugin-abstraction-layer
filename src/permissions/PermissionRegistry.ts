import { Plugin } from "../Plugin.ts";

export abstract class PermissionRegistry {
    public constructor(protected plugin: Plugin) {
        // empty constructor (just initialization)
    }

    abstract async hasPermission(identifier: string): Promise<boolean>;
}