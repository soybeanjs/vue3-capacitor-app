import { createApp } from 'vue';
import App from './App.vue';
import { setupAssets } from './plugins';

async function setupApp() {
  // import assets: js、css
  setupAssets();

  const app = createApp(App);

  // mount app
  app.mount('#app');
}

setupApp();
