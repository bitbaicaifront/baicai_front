<template>
    <div>
      ddd
      <html-panel :url.asyc="url2"></html-panel>
    </div>
</template>

<script>
    import HtmlPanel from '../components/HtmlPanel'

    export default {
      // 导出组件
        components:{
          HtmlPanel
        },
        name: "OuterHTML",
        data () {
          return {
            url2: 'http://ja.jd.com/front/region/report/38401?scroll1=auto&accessType1=0&preview1=false&version=5.0&portalId='
          }
        },
        mounted () {
          this.url2 = 'http://ja.jd.com/front/region/report/38401?scroll1=auto&accessType1=0&preview1=false&version=5.0&portalId='
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>
