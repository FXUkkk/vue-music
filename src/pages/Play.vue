<template>
  <div>
    <audio :src="currentPlayUrl" controls autoplay>你的浏览器暂时不支持H5播放</audio>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      currentPlayUrl: 'playId'
    })
  }
}
</script>

<style>

</style>
