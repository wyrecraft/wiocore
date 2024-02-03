import { defineConfig } from 'astro/config';
import { CONFIG } from "./src/config";
import sitemap from "@astrojs/sitemap";
import partytown from '@astrojs/partytown';

export default defineConfig({
	site: CONFIG.url,
	integrations: [
		sitemap({
			filter: (page) =>
				page !== `${CONFIG.url}/thanks/` &&
        		page !== `${CONFIG.url}/confirmed/` &&
				page !== `${CONFIG.url}/contact/thanks/`,
		}),
		partytown({
			config: {
				forward: ["dataLayer.push"],
			},
		}),
	],
});