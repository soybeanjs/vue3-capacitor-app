import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { createStyleImportPlugin, NutuiResolve } from 'vite-plugin-style-import';
import unocss from 'unocss/vite';

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    unocss(),
    createStyleImportPlugin({
      resolves: [NutuiResolve()]
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // 配置 nutui 全局 scss 变量
        additionalData: `@import "@nutui/nutui/dist/styles/variables.scss";`
      }
    }
  },
  server: {
    host: '0.0.0.0',
    open: true
  },
  build: {
    reportCompressedSize: false,
    sourcemap: false,
    commonjsOptions: {
      ignoreTryCatch: false
    }
  }
});
