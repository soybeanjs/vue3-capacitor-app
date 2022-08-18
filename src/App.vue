<template>
  <div>
    <Navbar title="Vue3 Capacitor" :safe-area-inset-top="true">
      <template #left>
        <Icon name="left" />
      </template>
    </Navbar>
    <h3 class="text-center text-32px text-red">Vue Capacitor</h3>
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
      <TabbarItem tab-title="首页" icon="home"></TabbarItem>
      <TabbarItem tab-title="分类" icon="category"></TabbarItem>
      <TabbarItem tab-title="发现" icon="find"></TabbarItem>
      <TabbarItem tab-title="购物车" icon="cart"></TabbarItem>
      <TabbarItem tab-title="我的" icon="my"></TabbarItem>
    </Tabbar>
  </div>
</template>

<script setup lang="ts">
import { Navbar, Icon, Tabbar, TabbarItem } from '@nutui/nutui';
</script>

<style scoped></style>
