<template>
  <v-layout>
    <v-flex>
      <v-card :loading="loading">
        <v-card-title>{{ $t('live.activity') }}</v-card-title>
        <v-card-text>
          <!-- <a v-for="item in links" :key="item.title" :href="item.url" target="_blank">
            <voice-btn :large="true" class="link-button white--text" :class="item.color" :emoji="item.emoji">
              {{ item.tr[current_locale] }}
            </voice-btn>
          </a> -->
          直播间标题: {{ live_title }}
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      loading: true,
      api_data: [],
      live_status: -1,
      live_title: '载入中'
    };
  },
  computed: {
    current_locale() {
      return this.$i18n.locale;
    }
  },
  async mounted() {
    await this.fetch_live_data();
  },
  methods: {
    shuffle(array) {
      //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
      let currentIndex = array.length,
        temporaryValue,
        randomIndex;
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    },
    async fetch_live_data() {
      const api_url = '/liveapi/room/v1/Room/get_info?id=22605466';
      this.$axios
        .get(api_url)
        .then(res => {
          this.api_data = res.data;
          this.live_status = res.data.data.live_status;
          this.live_title = res.data.data.title;
          //console.log(this.api_data);
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>
