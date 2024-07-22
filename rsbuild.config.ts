import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
	plugins: [pluginReact()],
	html: {
		title: "Kevin Chromik Minihackathon 2024 Challenge 1",
	},
	output: {
		publicPath: ".",
	},
});
