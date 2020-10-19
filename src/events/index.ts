import { CliffEvent } from "./CliffEvent";
import { EventArgs } from "./EventArgs";

export const ServerConfigurationChangedEvent = new CliffEvent<EventArgs>();

export const DatabaseCreatedEvent = new CliffEvent<EventArgs>();
export const DatabaseRemovedEvent = new CliffEvent<EventArgs>();

export const TableCreatedEvent = new CliffEvent<EventArgs>();
export const TableRemovedEvent = new CliffEvent<EventArgs>();