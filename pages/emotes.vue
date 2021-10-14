<template>
  <v-row>
    <v-col v-for="emote in emotes" :key="emote.keyword" class="d-flex child-flex">
      <v-hover v-slot="{ hover }">
        <v-card min-width="125" max-width="200">
          <v-img :src="`/emotes/${emote.path}`" max-height="125" contain aspect-ratio="1" class="grey lighten-2">
            <v-fade-transition>
              <v-overlay v-if="hover" absolute color="#036358">
                <v-alert v-if="succeed" type="success"> I'm a success alert. </v-alert>
                <v-btn v-else @click.stop="copy_to_clipboard(emote.keyword)">复制关键词</v-btn>
              </v-overlay>
            </v-fade-transition>
          </v-img>
          <v-card-title class="text-h6 justify-center"> {{ emote.keyword }} </v-card-title>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
import emotes_json from '~/assets/emotes.json';

export default {
  data() {
    return {
      emotes: emotes_json.emotes_list
    };
  },
  methods: {
    copy_to_clipboard(keyword) {
      navigator.clipboard.writeText(keyword);
    }
  }
};
</script>
