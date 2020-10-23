import { assertEquals } from "https://deno.land/std@0.74.0/testing/asserts.ts";

import { CliffEvent } from "../../src/events/CliffEvent.ts";
import { DispatchPriority } from "../../src/events/DispatchPriority.ts";
import { EventArgs } from "../../src/events/EventArgs.ts";
import { EventHandler } from "../../src/events/EventHandler.ts";

const TEST_EVENT = new CliffEvent<EventArgs>();

Deno.test("sort dispatch priority", async () => {
  const expected: number[] = [];
  const actual: number[] = [];

  // Fill expected with fake data
  for (let i = 0; i < 6; i++) {
    expected.push(Math.ceil(Math.random() * Number.MAX_SAFE_INTEGER));
  }

  // Subscribe for each DispatchPriority TEST_EVENT
  TEST_EVENT.subscribe(
    new EventHandler(async () => {
      actual.push(expected[5]);
    }, DispatchPriority.Monitor),
  );

  TEST_EVENT.subscribe(
    new EventHandler(async () => {
      actual.push(expected[1]);
    }, DispatchPriority.Low),
  );

  TEST_EVENT.subscribe(
    new EventHandler(async () => {
      actual.push(expected[0]);
    }, DispatchPriority.Lowest),
  );

  TEST_EVENT.subscribe(
    new EventHandler(async () => {
      actual.push(expected[3]);
    }, DispatchPriority.High),
  );

  TEST_EVENT.subscribe(
    new EventHandler(async () => {
      actual.push(expected[2]);
    }, DispatchPriority.Normal),
  );

  TEST_EVENT.subscribe(
    new EventHandler(async () => {
      actual.push(expected[4]);
    }, DispatchPriority.Highest),
  );

  await TEST_EVENT.invoke(new EventArgs());

  assertEquals(actual, expected);
});
