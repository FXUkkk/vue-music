<template>
  <div>
    <top></top>
    <keep-alive>
      <component :is="tabName"></component>
    </keep-alive>
  </div>
</template>

<script>
import Top from 'components/top/Top'
import Home from './home/Home'
import HotSongs from './hotsongs/HotSongs'
import Search from './search/Search'
export default {
  data () {
    return {
      tabName: 'Home'
    }
  },
  components: {
    Top,
    Home,
    HotSongs,
    Search
  }
}
</script>

<style>

</style>
