<template>
  <div>
    <keep-alive>
      <router-view v-if="!playId"></router-view>
    </keep-alive>
    <play v-if="playId" class="player"></play>
  </div>
</template>

<script>
import Play from './pages/Play'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    Play
  },
  computed: {
    ...mapGetters(['playId'])
  }
}
</script>

<style lang="stylus" scpoed>
  .player
    position: fixed
    bottom: 0
    left: 0
    z-index: 9999
</style>
