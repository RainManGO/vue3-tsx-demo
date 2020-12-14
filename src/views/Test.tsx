import { defineComponent, ref } from 'vue'
import AnchoredHeading from '@/components/AnchoredHeadingRender.vue'
import CustomCompent from '@/components/CustomCompent'

type foo = string

export default defineComponent({
  setup () {
    const msg = ref('hello world  tsx xxxx')
    const myStyle = {
      fontSize: 100,
      color: '#FF0000'
    }
    const myel = <h1>my element</h1>
    const strArray = ['dymic haha', 'dymic hehe']
    const arrayel = <div>
      <h1>haha</h1>
      <h2>hehe</h2>
    </div>
    console.log(arrayel)

    // console.log(['dymic haha', 'dymic hehe'].map((str: string) => {
    //   return <span>{str}</span>
    // }))
    // as操作符
    const bar = '4'
    // var foo = <foo>bar;
    const foo = bar as foo

    return { msg, myStyle, myel, arrayel, strArray }
  },
  components: {
    'anchored-heading': AnchoredHeading
  },
  render () {
    console.log(this.strArray)

    const myStyle1 = {
      fontSize: 100,
      color: '#00FF00'
    }

    const myStyle2 = {
      fontSize: 100,
      color: 'red'
    }
    function getElement (str: string) {
      return <h1 style={myStyle1}>{str}</h1>
    }

    const arrayel = this.strArray.map((str: string) => {
      return <h1 style={myStyle2}>{str}</h1>
    })

    return <div >
      {getElement('函数')}
      {arrayel}
    </div>
    // return <anchored-heading level={1} >
    //   {this.msg}
    //   <div style={this.myStyle}>
    //       static style
    //   </div>
    //   <div>
    //     {this.myel}
    //     {this.arrayel}
    //     {getElement('函数')}
    //   </div>
    //   <CustomCompent></CustomCompent>
    // </anchored-heading>
  }
})
