import * as fs from "fs";
import * as path from "path";

import { makeSchema } from "../makeSchema";

const testDataFile = path.resolve(__dirname, "./testData.json");
const testDataContent = fs.readFileSync(testDataFile, "utf-8");
const testData = JSON.parse(testDataContent);

test("@method makeSchema", async () => {
  const valid = await makeSchema.isValid(testData.make);
  await makeSchema.validate(testData.make);
  expect(valid).toBe(true);
});
