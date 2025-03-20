/// <reference types="vitest/config" />

import * as path from 'path';
import {defineConfig, loadEnv} from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import mockDevServerPlugin from 'vite-plugin-mock-dev-server';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig(({mode}) => {
  const {VITE_API_URL, VITE_PUBLIC_PATH} = loadEnv(mode, process.cwd());

  return {
    base: VITE_PUBLIC_PATH,
    build: {
      sourcemap: isProduction,
    },
    plugins: [
      react(),
      // svgr options: https://react-svgr.com/docs/options/
      svgr({svgrOptions: {icon: true}}),
      mockDevServerPlugin(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@shared': path.resolve(__dirname, './src/shared'),
        '@entities': path.resolve(__dirname, './src/entities'),
        '@widgets': path.resolve(__dirname, './src/widgets'),
        '@features': path.resolve(__dirname, './src/features'),
      },
    },
    server: {
      open: true,
      port: 4000,
      proxy: {
        '^/(mrm-tasks|mrm-reports)/api': {
          target: VITE_API_URL,
          changeOrigin: true,
          secure: true,
        },
      },
    },
    test: {},
  };
});
