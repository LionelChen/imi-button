# 狗按钮 / KORONE-BUTTON

项目地址：<https://korone.icu>

音源来自VTuber戌神沁音

相关链接：
* 戌神沁音Twitter：<https://twitter.com/inugamikorone> 
* Youtube：<https://www.youtube.com/channel/UChAnqc_AY5_I3Px5dig3X1Q?sub_confirmation=1>  
* Bilibili：<https://space.bilibili.com/412135619>

本项目基于[狐按钮](https://github.com/oruyanke/fubuki-button)进行修改。

## 参与完善本项目

如果您不知道如何直接参与GitHub开发，可以直接将素材或意见建议发送到[korone@fubuki.moe](mailto:korone@fubuki.moe)，带上标题、内容以及您的ID（Bilibili、Twitter等均可），贡献者名单将会有您的名字。

当然您也可以发在 [Issues](https://github.com/oruyanke/korone-button/issues) ，同样也请带上标题和内容。

如果您可以进行开发，那么请Fork本项目进行修改，完成修改后在本项目中发起一个Pull Request，详细说明如下：

### 添加或修改音频

音频文件为mp3格式，码率128Kbps，储存在`static/voices/`目录下，对应的URL为`/voices/`。

所有的音频信息都存储在`assets/voices.json`中，要添加或修改音频，你同样需要修改这个文件中对应的内容。

如果需要对现有音频进行修改，建议将原音频文件删除，重新命名一个新文件，这样可以避免浏览器缓存问题。

### 参与翻译

请帮助进行日语和英语的翻译！

网页的翻译在`assets/locales/`中的以三个语音命名的json文件中，音频信息的翻译在`assets/voices.json`中对应的字段。

### 参与网页开发

本项目使用Vue + NuxtJS + Vuetify框架进行开发，要部署本地开发环境，请先安装最新版的Node与Yarn包管理器。

1. Fork 并 Clone 代码到本地
2. 进入代码目录，运行`yarn`以安装依赖项目
3. 开启本地开发服务器，运行`yarn dev`，这将会在`localhost:3000`启动，在代码修改过程中，本地开发服务器可以即时反映修改的结果。
4. 要编译可供部署的文件，请运行`yarn generate`，这将会在`dist`目录下生成可以直接部署到静态网站托管（GitHub Pages等）的文件。

## 贡献者

开发：

- GitHub [孤单离子](https://github.com/lonelyion)
- GitHub [Nyaasu](https://github.com/Nyaasu66)

音频剪辑：

- Bilibili [戌神沁音Official](https://space.bilibili.com/412135619)
- Bilibili [戌神沁音的手指面包店](https://space.bilibili.com/45070033)
- Bilibili [SymmetryChaos](https://space.bilibili.com/413787551)
- Bilibili [BF天下](https://space.bilibili.com/6433566)
- 夜月赤

翻译：

- English: [Hololive Moments on YouTube](https://www.youtube.com/channel/UCK4adPCSc8U1mhaJYbzZ-7w)
- 日本語: Symmetry.Chaos, 噬魂韩植, 草Bot

特别感谢：

- Bilibili [御宅白狐的狐笋之林](https://space.bilibili.com/314977548)

## 协议

音频部分: [Hololive 二次创作条款](https://www.hololive.tv/terms) (只有日语).

其他部分：[MIT License](https://github.com/oruyanke/fubuki-button/blob/master/LICENSE)

本项目为爱好者作品，和 Hololive 官方没有关联

## 支持

### BroswerStack

Proudly using BrowserStack.

[![](https://i.loli.net/2017/09/27/59cbc16b0f8b4.png)](https://www.browserstack.com/)

> **BrowserStack** is a cloud-based cross-browser testing tool that enables developers to test their websites across various browsers on different operating systems and mobile devices, without requiring users to install virtual machines, devices or emulators.

### Vercel

Powered by Vercel.

[![vercel.png](https://i.loli.net/2020/07/18/rPah8FVmqBXL6dj.png)](https://www.vercel.com/?utm_source=oruyanke)

> **​Vercel** is a cloud platform for static sites and Serverless Functions that fits perfectly with your workflow. It enables developers to host Jamstack websites and web services that deploy instantly, scale automatically, and requires no supervision, all with no configuration.
