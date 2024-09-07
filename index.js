import fs from "node:fs";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { introduceScenario } from "./src/scenario.js";

let currentScenario = "scenario";

// Get the scenarios from the file
const scenarios = JSON.parse(fs.readFileSync("scenario.json", "utf-8"));
// Create a readline interface
const rl = readline.createInterface({ input, output });

// Get the start scenario
await introduceScenario(rl, scenarios, currentScenario);

rl.close();
