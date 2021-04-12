import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  moduleDirectories: [
    "src",
    "node_modules",
    "src/tests/utils", // a utility folder
    __dirname, // the root directory
  ],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};
export default config;
