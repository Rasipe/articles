<template>
  <header id="header">
    <div class="bg-primary hard-shadow row align-center pl-sm justify-between">
      <div class="text-lg">
        <slot />
      </div>
      <button class="download-button">
        <a v-if="article" :href="downloadLink" :download="articleTitle">
          <img src="@/assets/download.svg" alt="download article" height="40px">
        </a>
      </button>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import { GET_ARTICLE } from '@/store'

export default {
  name: "Header",
  computed: {
    ...mapGetters({
      article: GET_ARTICLE
    }),
    articleTitle() {
      return this.article.titulo
    },
    downloadLink() {
      return this.article.linkDownload
    }
  }
};
</script>

<style lang="sass" scoped>
#header
  height: var(--header-height)
#header > div
  position: fixed
  height: var(--header-height)
  width: 100%
.download-button
  margin-right: 30px
  background-color: transparent
  border: 0px
</style>