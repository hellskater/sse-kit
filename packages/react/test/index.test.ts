import { expect, it } from "vitest";
import { add } from "../src";

it("should add two numbers", () => {
  expect(add(1, 2)).toBe(3);
});
