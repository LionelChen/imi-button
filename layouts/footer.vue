<template>
  <v-footer app bottom fixed padless>
    <v-card flat tile width="100%" class="text-center">
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
    </v-card>
  </v-footer>
</template>
