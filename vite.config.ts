import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Cast process to any to avoid type errors if Node.js types are missing
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    define: {
      // This ensures process.env.API_KEY works in the browser for the Gemini SDK
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
      // Prevents "process is not defined" errors
      'process.env': {}
    },
  };
});