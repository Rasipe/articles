<template>
  <main class="articles-page">
    <div class="row full-width actions-wrapper align-center justify-center">
      <a-input
        v-model="query"
        class="ma-sm filter col-11 col-md-6"
      >
        <div class="row justify-center align-center full-height">
          <img
            class="mr-xs"
            src="@/assets/magnifier.svg"
            height="23px"
            alt="filter"
          >
        </div>
      </a-input>
      <order
        class="col-md-5 col-lg-5"
        @change-field="(value) => field = value.toLowerCase()"
        @change-direction="(value) => direction = value"
      />
    </div>
    <ul class="article-list">
      <article-list-item
        v-for="article in articlesList"
        :id="article.id"
        :key="article.id"
        class="col-lg-5 col-xl-3"
        :title="article.titulo"
        :actors="article.autor"
        :description="article.resumo"
      />
    </ul>
  </main>
</template>

<script>
import Input from '@/components/Input'
import ArticleListItem from './ArticleListItem'
import Order from './Order'
import * as Service from '@/service/Service'

export default {
  name: 'AticlesListPage',
  components: {
    'a-input': Input,
    ArticleListItem,
    Order
  },
  data() {
    return {
      articles: [],
      query: '',
      direction: 'asc',
      field: 'titulo'
    }
  },
  computed: {
    articlesList() {
      const articles = this.articles.filter(article =>
        article.titulo
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
          .includes(this.query))
      articles.sort((back, next) => {
        const backValue = this.getValueToSort(back[this.field])
        const nextValue = this.getValueToSort(next[this.field])
        if (this.direction == 'asc') {
          return  backValue > nextValue? 1 : -1
        }
        if (this.direction == 'desc') {
          backValue < nextValue? 1: -1
        }
        return 0
      })
      return articles
    }
  },
  created() {
    Service.getArticles().then(res => this.articles = res)
  },
  methods: {
    getValueToSort(value) {
      return (Array.isArray(value)
          ? [].concat(value).sort().join(', ')
          : value).normalize("NFD").replace(/[\u0300-\u036f]/g, '')
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/style/_variables.sass'

.articles-page
  @media (min-width: $screen-sm)
    display: grid
    grid-template-columns: (100vw * 0.2) (100vw * 0.6) (100vw * 0.2)
  @media (min-width: $screen-lg)
    display: block
    padding-left: 3%
.actions-wrapper
  height: fit-content(100%)
  @media (min-width: $screen-sm)
    grid-column: 1/4
    margin: $space-md $space-xl
  @media (min-width: $screen-sm)
    margin: $space-md 0px
    justify-content: start
.article-list
  padding-bottom: 45px
  @media (min-width: $screen-sm)
    padding-bottom: 0px
    grid-row: 2/2
    grid-column: 2/2
    display: flex
    flex-direction: column
  @media (min-width: $screen-lg)
    flex-direction: row
    flex-wrap: wrap
    
</style>