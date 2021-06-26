<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :mobile-breakpoint="1024" class="elevation-3" fixed app>
      <!--
      <template v-slot:img>
        <v-img />
        <div
          class="nav-darwer-overlay"
          :class="$vuetify.theme.dark ? 'nav-darwer-overlay-dark' : 'nav-darwer-overlay-light'"
        />
      </template>
      -->
      <v-list style="padding-top: 0">
        <v-list-item to="/" router exact dense>
          <v-list-item-action>
            <v-icon>{{ icons.apps }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ $t('site.index') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="(item, i) in nav_items"
          :key="i"
          :href="item.to"
          target="_blank"
          rel="noreferrer"
          router
          exact
          dense
        >
          <v-list-item-action>
            <v-img :src="item.icon" style="width: 24px" />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div v-if="current_locale === 'zh'">
        <v-divider />
        <v-list>
          <v-list-item
            v-for="item in external_link"
            :key="item.to"
            dense
            :href="item.to"
            target="_blank"
            rel="noreferrer"
          >
            <v-list-item-action>
              <v-icon>{{ icons[item.icon] }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
      <v-divider />
      <v-list>
        <v-list-item dense to="/derivative_works" router exact>
          <v-list-item-action>
            <v-icon>{{ icons.derivative_works }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ $t('site.derivative_works') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item dense to="/infos" router exact>
          <v-list-item-action>
            <v-icon>{{ icons.info }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ $t('site.stream_info') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item dense to="/about" router exact>
          <v-list-item-action>
            <v-icon>{{ icons.code_tags }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ $t('site.about') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      class="primary white--text"
      :class="[this.$vuetify.theme.dark ? 'gradient-header-dark' : 'gradient-header-light']"
      app
    >
      <v-app-bar-nav-icon class="white--text" @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="$t('site.title')" />
      <v-img src="/icon.png" style="max-width: 30px" />
      <v-spacer />
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon class="white--text" @click="switch_dark()" v-on="on">
            <v-icon v-if="$vuetify.theme.dark">{{ icons.butterfly }} </v-icon>
            <v-icon v-else>{{ icons.cat }} </v-icon>
          </v-btn>
        </template>
        <span>{{ $t('site.switch_dark_mode') }}</span>
      </v-tooltip>
      <v-menu offset-y>
        <template v-slot:activator="{ on: menu }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on: tooltip }">
              <v-btn icon class="white--text" v-on="{ ...tooltip, ...menu }">
                <v-icon>{{ icons.translate }}</v-icon>
              </v-btn>
            </template>
            <span>{{ $t('site.switch_language') }}</span>
          </v-tooltip>
        </template>
        <v-list>
          <v-list-item @click="switch_lang('zh')">
            <v-list-item-title>简体中文</v-list-item-title>
          </v-list-item>
          <v-list-item @click="switch_lang('ja')">
            <v-list-item-title>日本語</v-list-item-title>
          </v-list-item>
          <v-list-item @click="switch_lang('en')">
            <v-list-item-title>English</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container class="page">
        <nuxt />
      </v-container>
      <v-footer :fixed="false" class="footer">
        <div>
          <div style="vertical-align: middle">
            <span>&copy; {{ new Date().getFullYear() }} </span>
            <span>
              <a href="https://space.bilibili.com/678033561" target="_blank" rel="noreferrer">
                {{ $t('site.footer.kong') }}
              </a>
            </span>
            <v-btn
              icon
              href="https://github.com/LionelChen/imi-button"
              target="_blank"
              style="vertical-align: middle"
              rel="noreferrer"
            >
              <v-icon>{{ icons.github }}</v-icon>
            </v-btn>
          </div>
          <div>
            <span>Powered by Tencent Serverless Framework</span>
            <a href="https://www.vercel.com/?utm_source=oruyanke&utm_campaign=oss" target="_blank" rel="noreferrer">
              <img :src="tencent_logo" alt="vercel" height="16px" />
            </a>
          </div>
          <div>
            <p>{{ $t('site.footer.content') }}</p>
          </div>
        </div>
      </v-footer>
    </v-main>
  </v-app>
</template>

<style lang="scss">
$blur-function: blur(3px);
.v-application {
  html[lang='en'] & {
    font-family: $en-body-fonts;
  }
  html[lang='ja'] & {
    font-family: $ja-body-fonts;
  }
  html[lang='zh'] & {
    font-family: $zh-body-fonts;
  }
}
.gradient-header-light {
  background-image: linear-gradient(135deg, #ff9d6c 10%, #f2dc99 100%) !important;
}
.gradient-header-dark {
  background-image: linear-gradient(135deg, #bf8c88 10%, #f2c48d 100%) !important;
}
.nav-drawer-img {
  width: auto;
  height: 100%;
  /*
  -webkit-filter: $blur-function;
  -moz-filter: $blur-function;
  -ms-filter: $blur-function;
  filter: $blur-function;
   */
}
.nav-darwer-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
}
.nav-darwer-overlay-light {
  background-color: rgba(255, 255, 255, 0.8);
}
.nav-darwer-overlay-dark {
  background-color: rgba(0, 0, 0, 0.8);
}
a {
  text-decoration: none;
}
.page {
  box-sizing: border-box;
  min-height: 100%;
  padding-bottom: 110px;
}
.footer {
  margin-top: -110px;
}
</style>

<script>
import {
  mdiApps,
  mdiCodeTags,
  mdiBrightness2,
  mdiTranslate,
  mdiGithub,
  mdiNewspaper,
  mdiAlphaBBox,
  mdiInformation,
  mdiRadio,
  mdiCat,
  mdiButterfly,
  mdiContentCut
} from '@mdi/js';
export default {
  data() {
    return {
      icons: {
        apps: mdiApps,
        code_tags: mdiCodeTags,
        brightness: mdiBrightness2,
        translate: mdiTranslate,
        github: mdiGithub,
        newspaper: mdiNewspaper,
        alpha_b_box: mdiAlphaBBox,
        info: mdiInformation,
        netease_music: mdiRadio,
        cat: mdiCat,
        butterfly: mdiButterfly,
        derivative_works: mdiContentCut
      },
      drawer: false,
      fixed: false,
      nav_items: [
        {
          icon: '/img/bilibili-fill.svg',
          title: '伊深Imi的个人空间',
          to: 'https://space.bilibili.com/690608694'
        }
      ],
      external_link: [
        {
          icon: '/img/bilibili-fill.svg',
          title: '伊深的时钟八音盒',
          to: 'https://space.bilibili.com/686331665/'
        },
        {
          icon: 'netease_music',
          title: '伊深Imi的网易云电台',
          to: 'http://music.163.com/radio/796641576'
        }
      ]
    };
  },
  computed: {
    current_locale() {
      return this.$i18n.locale;
    },
    tencent_logo() {
      //const mode = this.$vuetify.theme.dark ? 'dark' : 'light';
      return '/img/tencent/tencent_cloud.png';
      //return '/img/tencent/' + mode + '.svg';
    }
  },
  mounted() {
    this.$vuetify.theme.dark = this.$store.state.dark === 'true';
    if (window.innerWidth >= 1024) {
      this.drawer = true;
    }
  },
  methods: {
    switch_dark() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.$store.commit('SET_DARK', this.$vuetify.theme.dark);
      // Also switch nya mode, re-use dark value
      this.$store.commit('set_nya_mode', this.$vuetify.theme.dark);
    },
    switch_lang(lang) {
      console.log('switching to ' + lang);
      this.$store.commit('SET_LANG', lang);
      this.$i18n.locale = lang;
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.current_locale
      }
    };
  }
};
</script>
