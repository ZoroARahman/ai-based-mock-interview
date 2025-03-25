import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  dbCredentials: {
    url:'postgresql://neondb_owner:npg_Xqf10byxPoDz@ep-mute-firefly-a843ovzk-pooler.eastus2.azure.neon.tech/AI-Interview?sslmode=require',
  },
});
