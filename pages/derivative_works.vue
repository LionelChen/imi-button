<template>
  <v-layout>
    <v-flex>
      <v-card :loading="loading">
        <v-card-title>{用户名单：}</v-card-title>
        <v-card-text>
          <!-- <a v-for="item in links" :key="item.title" :href="item.url" target="_blank">
            <voice-btn :large="true" class="link-button white--text" :class="item.color" :emoji="item.emoji">
              {{ item.tr[current_locale] }}
            </voice-btn>
          </a> -->
          用户昵称 {{ [der_usr_name_list] }}
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
//import VoiceBtn from '../components/VoiceBtn';

export default {
  components: {},
  data() {
    return {
      loading: this.$store.state.loading,
      api_data: [],
      live_status: -1,
      live_title: '载入中',
      derivative_accounts: [
        {
          icon: '/img/bilibili-fill.svg',
          title: '伊深Imi的个人空间',
          to: 'https://space.bilibili.com/690608694'
        }
      ],
      posts: []
    };
  },
  computed: {
    current_locale() {
      return this.$i18n.locale;
    },
    der_usr_name_list() {
      console.log(this.$store.state.der_usr_name_list);
      return this.$store.state.der_usr_name_list;
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
      //const api_url = '/api/x/space/acc/info?mid=2';
      /*       this.$axios
        .get(api_url, {
          withCredentials: true
        })
        .then(res => {
          this.api_data = res.data;
          //this.live_title = res.data.name;
          console.log(this.api_data);
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          this.loading = false;
        }); */
    }
  }
};
</script>
