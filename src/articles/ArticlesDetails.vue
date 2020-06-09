<template>
  <main>
    <div class="bg-grey info column text-bold">
      <p>
        <span class="text-lightgrey info-item"> Área: </span>
        <span class="text-accent"> {{ article.area }} </span>
      </p>
      <p>
        <span class="text-lightgrey"> Projeto: </span>
        <span class="text-accent"> {{ article.projeto }} </span>
      </p>
      <p>
        <span class="text-lightgrey"> Programa: </span>
        <span class="text-accent"> {{ article.programa }} </span>
      </p>
    </div>
    <div class="bg-accent pt-md">
      <h1 class="text-primary title text-center">{{ article.titulo }}</h1>
      <p class="text-bold text-md text-center">{{ actor }}</p>
      <div class="row justify-center tag-wrapper">
        <badge v-for="tag in tags" :key="tag" > {{ tag }} </badge>
      </div>
      <p class="description text-sm">{{ article.resumo }}</p>
      <p class="pl-sm">Publicado em: {{ article.dataPublicacao }}</p>
    </div>
  </main>
</template>

<script>
import * as Service from '@/service/Service'
import Badge from '@/components/Badge'
import { mapActions } from 'vuex'
import { SET_ARTICLE } from '@/store'

export default {
  name: 'AticlesDetails',
  components: {
    Badge
  },
  computed: {
    actor() {
      return [].concat(this.article.autor).sort().join(', ')
    },
    tags() {
      const tags = this.article.palavrasChave || ''
      return tags.split('.').filter(tag => tag)
    }
  },
  data() {
    return {
      article: {}
    }
  },
  methods: {
    ...mapActions([SET_ARTICLE])
  },
  created() {
    Service.getArticleById(this.$route.params.id).then(res => {
      this.article = res
      this[SET_ARTICLE](res) 
    })
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/style/_variables.sass'
.title
  font-size: 4rem
.info
  padding: 5px $space-sm
  & > p
    margin: 3px $space-sm
  @media (min-width: $screen-lg)
    flex-direction: row
    justify-content: space-between
  span
    font-size: 1.2rem
.tag-wrapper
  margin-top: $space-md
  & > :not(:first-child)
    margin-left: $space-md
.description
  padding: 50px $space-md
</style>