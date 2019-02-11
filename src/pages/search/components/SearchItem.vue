<template>
  <div class="continued-tags-wrapper">
    <div
      v-for="(item, index) of searchList"
      :key="index"
      v-show="item!==null"
      class="continued-tags"
    >
      <span v-html="iconfont[0]" class="iconfont left"></span>
      <span @click="searchType(item)" class="continued-tags-item border-bottom">{{item}}</span>
      <span
        @click="deleSearch(item)"
        v-if="iconfont[1]"
        v-html="iconfont[1]"
        class="iconfont right"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    searchList: Array,
    type: Number
  },
  computed: {
    iconfont () {
      if (this.type === 0) {
        return ['&#xe64f;']
      } else {
        return ['&#xe706;', '&#xe601;']
      }
    }
  },
  methods: {
    searchType (name) {
      this.$emit('searchType', name)
    },
    deleSearch (name) {
      this.$emit('deleSearch', name)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .continued-tags-wrapper
    .continued-tags
      display: flex
      align-items: center
      height: .45rem
      position: relative
      .left
        flex: 0 0 auto
        margin-right: .07rem
        color: rgb(201, 201, 201)
      .continued-tags-item
        flex: 1
        width: 1%
        padding-right: .1rem
        font-size: .15rem
        line-height: .45rem
        color: #333
      .right
        position: absolute
        right : .15rem
        top: .14rem
        color: rgb(201, 201, 201)
</style>
