import { createApp } from 'vue';
import { Icon } from '@nutui/nutui';
import App from './App.vue';
import { setupAssets } from './plugins';

async function setupApp() {
  // import assets: js、css
  setupAssets();

  const app = createApp(App);

  app.use(Icon);

  // mount app
  app.mount('#app');
}

setupApp();
