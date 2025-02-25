import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        preact() // Removed the prerender config
    ],
    build: {
        outDir: "dist", // Default output directory for Netlify
        sourcemap: true, // Useful for debugging
		rollupOptions: {
			external: ['@rollup/rollup-linux-x64-gnu']
		  }
    },
});
