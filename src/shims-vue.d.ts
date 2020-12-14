/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-11 15:27:32
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-12 14:14:06
 */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.scss'
