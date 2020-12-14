import { defineComponent, ref } from 'vue'
import CustomCompent from '@/components/CustomCompent'
export default defineComponent({
  setup () {
    const msg = ref('msg')
    return { msg }
  },
  data () {
    return {
      msg3: 'msg3'
    }
  },
  components: {
    'custom-compent': CustomCompent
  },
  render () {
    const msg1 = 'msg1'
    const myStyle1 = {
      fontSize: 100,
      color: 'red'
    }
    const el = <h1>el</h1>
    const elArray = [
      <h1>h1</h1>,
      <h3>h3</h3>
    ]
    const dymicArray = ['demo1', 'demo2']
    const dymicElAray = dymicArray.map((str: string) => {
      return <h1>{str}</h1>
    })

    function getElement (str: string) {
      return <h1>{str}</h1>
    }
    return <div style={myStyle1}>
      {el}
      {elArray}
      {dymicElAray}
      {1 + 1}
      {getElement('ceshi')}
      <custom-compent></custom-compent>
            my custom router{msg1}-{this.msg}-{this.msg3}
    </div>
  }
})
