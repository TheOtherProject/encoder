import * as fs from "fs";
import * as path from "path";

import { orderSchema } from "../orderSchema";

const testDataFile = path.resolve(__dirname, "./testData.json");
const testDataContent = fs.readFileSync(testDataFile, "utf-8");
const testData = JSON.parse(testDataContent);

test("@method orderSchema", async () => {
  const valid = await orderSchema.isValid(testData.order);
  await orderSchema.validate(testData.order);
  expect(valid).toBe(true);
});
