import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'application1', //name of remote you want to use on host side
      filename: 'application1.js', //filename after the build
      exposes: {
        './App': './src/App.vue' //target component you want to serve as remote side. In our case is the entire application
      },
      shared: ['vue'] //we don't want to build our remote with a library the host side already have. So here we sinalize "hey, use this host side package"
    })
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }]
  },
  server: {
    port: 8081
  }
});
