import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.capacitor.vue3',
  appName: 'vue3-capacitor-app',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.31.80:5173',
    cleartext: true
  }
};

export default config;
