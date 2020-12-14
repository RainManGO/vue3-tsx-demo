<!--
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-11 15:27:32
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-12 15:07:21
-->

<template>
  <anchored-heading :level="level">{{msg}}</anchored-heading>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// import AnchoredHeading from './AnchoredHeading.vue'
import AnchoredHeading from './AnchoredHeadingRender.vue'

export default defineComponent({
  components: {
    'anchored-heading': AnchoredHeading
  },
  setup () {
    const msg = ref('hello world')
    const level = ref(1)
    return { msg, level }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
