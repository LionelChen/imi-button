<template>
  <v-row>
    <v-col v-for="emote in emotes" :key="emote.keyword" class="d-flex child-flex">
      <v-card min-width="125">
        <v-img
          :src="`/emotes/${emote.path}`"
          :lazy-src="`/emotes/${emote.path}`"
          max-height="125"
          contain
          aspect-ratio="1"
          class="grey lighten-2"
        ></v-img>
        <v-card-title class="text-h6"> 关键词:{{ emote.keyword }} </v-card-title>
      </v-card>
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
  }
};
</script>
