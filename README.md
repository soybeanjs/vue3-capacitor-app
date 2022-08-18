# Vue3 Capacitor App

## 介绍

基于 Vite3 + Vue3 + Capacitor + TS + Pinia + NutUI + Unocss 的 App 模版。可以编译成 Android 和 IOS 原生 APP

## 开始

### 安装依赖

pnpm i

### 打包构建

pnpm build

## 编译到 IOS 或者 Android

### IOS

```bash
pnpm cap add ios # 添加ios原生APP项目(保证已经打包构建出了 dist 目录)
```

```bash
cd ./ios/App # 进入IOS项目主目录
```

```bash
pod install # 安装IOS依赖
```

m1 处理器的苹果 pod install 安装失败时：

```bash
sudo arch -x86_64 gem install ffi #未安装 ffi，先执行
```

```bash
arch -x86_64 pod install # 代替 pod install
```

```bash
cd ../../ # 回到主项目根目录
```

```bash
pnpm cap open ios
```

选择 IOS 模拟器，编译

### Android

请提前配置好安卓环境，安装好 SDK

```bash
pnpm cap add android # 添加Android原生APP项目(保证已经打包构建出了 dist 目录)
```

```bash
pnpm cap open android ## 打开Android Studio后，第一次加载有点慢（点击build查看进度）
```

- 点击 Android Studio 右上角的 Sync Project with Gradle Files，成功后，选择设备(没有时添加个虚拟机或者连接真机)
- 设备配置好后，确认设备按钮左边相邻按钮是否有绿色的 App，如果没有就重启一下 Android Studio
- 点击右上角的 Run

### 本地开发模式热更新

```bash
pnpm dev # 本地直接运行
```

获取局域网 ip 地址(非 localhost)， 例如：[http://192.168.31.80:5173](http://192.168.31.80:5173)

将地址替换 capacitor.config.ts 的 server 的 url 属性

更新配置到原生 APP 项目：

```bash
pnpm cap sync
```

利用 XCode 或者 Android Studio 编译到设备上

本地更改代码，保存，自动热更新
