import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },

    experimentalInteractiveRunEvents: true,
    experimentalMemoryManagement: true,
    experimentalSourceRewriting: true,
    experimentalStudio: true,
  },
});
