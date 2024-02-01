import { defineConfig } from 'astro/config';
import { CONFIG } from "./src/config";

export default defineConfig({
	site: CONFIG.url,
});