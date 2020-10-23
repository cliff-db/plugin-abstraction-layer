import { CliffEvent } from "./CliffEvent.ts";
import { EventArgs } from "./EventArgs.ts";
import { EventArgsCancellable } from "./EventArgsCancellable.ts";

export const ServerConfigurationChangedEvent = new CliffEvent<EventArgs>();

export const DatabaseCreatedEvent = new CliffEvent<EventArgs>();
export const DatabaseRemovedEvent = new CliffEvent<EventArgs>();

export const TableCreatedEvent = new CliffEvent<EventArgs>();
export const TableRemovedEvent = new CliffEvent<EventArgs>();

export const PluginInstallEvent = new CliffEvent<EventArgsCancellable>();
export const PluginInstallFinishedEvent = new CliffEvent<EventArgs>();

export const PluginUninstallEvent = new CliffEvent<EventArgsCancellable>();
export const PluginUninstallFinishedEvent = new CliffEvent<EventArgs>();