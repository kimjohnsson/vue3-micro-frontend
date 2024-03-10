import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'platform', //app name
      remotes: {
        application1: 'http://localhost:8081/assets/application1.js' //remote path containing the port configured on remote side, the build path, and the filename also configured on the remote side
      }
    })
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }]
  },
  server: {
    port: 8080
  },
  preview: {
    port: 8080
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
});
