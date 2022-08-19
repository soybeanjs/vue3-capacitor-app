<template>
  <div class="pt-safe-area-inset-top">
    <h3 class="text-center text-32px text-red">Vue3 Capacitor</h3>
    <p class="text-4xl text-green-700 text-center py-20">
      <span>Hello</span>
      <a
        class="text-pink-600 hover:font-bold hover:border-1"
        href="https://antfu.me/posts/reimagine-atomic-css"
        target="atomic-css"
      >
        Atomic CSS
      </a>
      <span>!</span>
    </p>
    <Tabbar :bottom="true" :safe-area-inset-bottom="true">
      <TabbarItem v-for="item in tabbarConfig" :key="item.key" :tab-title="item.title" :icon="item.icon" />
    </Tabbar>
  </div>
</template>

<script setup lang="ts">
import { Tabbar, TabbarItem } from '@nutui/nutui';

type TabbarKey = 'home' | 'category' | 'find' | 'cart' | 'my';
interface TabbarConfig {
  key: TabbarKey;
  title: string;
  icon: TabbarKey;
}

const tabbarConfig: TabbarConfig[] = [
  {
    key: 'home',
    title: '首页',
    icon: 'home'
  },
  {
    key: 'category',
    title: '分类',
    icon: 'category'
  },
  {
    key: 'find',
    title: '发现',
    icon: 'find'
  },
  {
    key: 'cart',
    title: '购物车',
    icon: 'cart'
  },
  {
    key: 'my',
    title: '我的',
    icon: 'my'
  }
];
</script>

<style scoped></style>
