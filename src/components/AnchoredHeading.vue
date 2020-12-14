<!--
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-11 15:44:23
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-11 15:47:06
-->
<template>
   <h1 v-if="level === 1">
      <slot></slot>
    </h1>
    <h2 v-else-if="level === 2">
      <slot></slot>
    </h2>
    <h3 v-else-if="level === 3">
      <slot></slot>
    </h3>
    <h4 v-else-if="level === 4">
      <slot></slot>
    </h4>
    <h5 v-else-if="level === 5">
      <slot></slot>
    </h5>
    <h6 v-else-if="level === 6">
      <slot></slot>
    </h6>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  setup () {
    return {}
  }
})
</script>

<style scoped>

</style>
