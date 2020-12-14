<!--
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-11 15:52:18
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-14 08:55:23
-->

<script lang="ts">
// import { defineComponent, h } from 'vue'
import { defineComponent, openBlock as _openBlock, createBlock as _createBlock } from 'vue'

export default defineComponent({
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  setup () {
    return {}
  },
  render () {
    // return h(
    //   'h' + this.level, // 标签名字
    //   {}, // props/attributes
    //   this.$slots // array of children
    // )
    return (_openBlock(), _createBlock('h' + this.level, null, this.$slots))
  }
})
</script>
