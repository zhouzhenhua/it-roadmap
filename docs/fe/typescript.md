# Typescript

<!-- ['❌','✅','🔥','⭐'] -->

Typescript给Javascript带来了类型系统，带来了更智能的提示和丝滑的开发体验，Javascript中变量可以赋值任意类型的值，这在大型系统中会增加代码的维护难度，Typescript有点像三体人，每个变量的类型，每个函数的参数结构都对外清晰可见，是构建大型项目和框架的必备技术

<roadmap :data="[
  {title:'Typescript',download:true,x:400,y:20},
{ title:'学习目标',y:200,
    left:[
      ['基础类型'],
      ['Interface'],
      ['复合类型'],
      ['操作符',[
        ['keyof'],
        ['in'],
      ]],
      ['函数类型'],
    ],
    right:[
      ['Vue+TS'],
      ['React+TS'],
      ['泛型<T>',[
        ['extends'],
        ['infer'],
        ['Partial'],
        ['Record'],
        ['Omit'],
      ]],
      ['网络接口类型'],
    ],
  } ,
  { title:'使用TS开发项目',y:120
  } 
]" />


Typescript是图灵完备的类型系统，类型可以写递归，初学者不要陷入复杂的类型体操，而是要专注功能的实现,我用代码演示几个使用场景, 这些代码搞明白就算入门了

```typescript
// 1. 自己定义变量可以设置基本类型
let courseName:string = '玩转Vue3全家桶'
let price:number = 129
let isOnline:boolean = true
let courseSales:undefined
let me:[string,number] = ["大圣",18]
// 2. 对象类型
interface course {
    name:string,
    price:number[],
    avatar?:string|boolean,
    readonly address:string
}
//3 函数类型
type addType = (a:number,b:number)=>number
interface addType1{
    (a:number,b:number):number
}
let add2:addType  = function(x: number, y: number): number {
    return x + y;
}
// 4. 宿主环境的类型TS提供了
let w:Window = window
let ele:HTMLElement = document.createElement('div')
ele.addEventListener('click',function(e:MouseEvent){
    w.alert(1)
},false)

// 5 泛型 （难点）
// <T>就是<某种类型>的意思，就是定义了一个类型变量，通过extends控制类型

function test<某种类型>(args:某种类型):某种类型{
    return args
}
type ExtendsType<T> = T extends boolean ? "重学前端" : "玩转Vue3"
function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
    return o[name]
}
type ReturnType1<T> = T extends ()=>infer P ?P:never 

// 6. 用到框架中的源码
import {ref, Ref} from 'vue'
const props = defineProps<{ title: string value?: number}>()

interface Todo{
  title:string,
  done:boolean
}
let todos:Ref<Todo[]> = ref([{title:'学习Vue',done:false}])

const App: React.FC<IProps> = (props) => {
  const [count, setCount] = useState<number>(1)
  return (
    <div className="App">
      <h1>hello world</h1>
      <h2>{count}</h2>
    </div>
  );
}
// 7.网络接口的类型
// 限制前后端接口的Typescript类型，限制参数传递，前后端联调爽歪歪
import axios from 'axios'
function request<T extends keyof API>(url:T,obj:Api[T]){
    return axios.post(url,obj)
}
interface Api{
    '/course/buy':{
        id:number
    },
    '/course/comment':{
        id:number,
        message:string
    }
}
request('/course/buy',{id:1})
request('/course/comment',{id:1,message:'嘎嘎好看'})
request('/course/comment',{id:1}) //如果message必传 类型提醒缺少参数
request('/course/404',{id:1}) //接口不存在 类型报错
```

## 技术文档
* [TS中文网](https://www.tslang.cn/docs/handbook/basic-types.html)
* [在线练习](https://www.typescriptlang.org/play?ssl=414&ssc=5&pln=402&pc=1#code/FDD0oAgRgOgwv9UAIehvH0NHqwA2BTALhAxgPYCuATgM5YByAhgLZYBc5OpAlgHYDmEAvBAHJAlc6AbeIBqxLAGZAFoqA27UBuFgMy4IAB3b4mHYnQBGWUn2gAmAJwq8bcgHkOGTkz2FC2Gh2OtJlgiQpYAZRpsckZiDgATLAAzRwifHDYGUkYdDAxjNIwfBkYAbRZ2bgAaHX1DAF1jPIAiQHJNQGJ1GuKoAA4K4AY8gAYq-ihgHABPNSwIQFg5QHvlQF+AzKwAN0MQcAh3IcnAU7lAejNAb7lAVXk0QBh-wBiVACsaeZpyfHY1HEBCm0BTVUAuZUBqJQgIQF4dQHnEwEQdQApXCBgSCAK+VAFnagEk5QAbyt9DoB9OUAWPKAaojABXGgCQFQBccmsfGsACoAC04XBxHCGAGE-JQIIw1sYBmsKWQqfwBAAPVnKIgcciuLAwDCELgACgZlL5NBgehg+AAlCBgRBAFnmgD45CCABTTAGxKgAp1QAAcmDACFugC51QD2ZoBQxUOgBXrQBBmoA-6MA0F5qsEgwCQ5oBfTWKgD10wAceq7joA4NT9rsAkHKAKjlANJyOuAWDKEHtgBHowBgShAAN7u73ugOugC+wC5POw-MFQvjCbyAldAgqvGr3Tled5heFJZ6Ver5YEcuweGuhFIWHI1Wb7YqxVjdsTZczldHQ-TlY6CpMcDQgBUAwAQKhBAQAfIErQAb8Zt-oBTc01gAPFEOAdW1AGTegCY5fU6kM+IhMrBQakQQpErdlAxGFmieZJCkTkxTffpc1AzxSEkCAVkAUqNAExUkBhlGXwXwCIg+2MdsIB3AQ51wwQpx8Hs+zfRhn38DDezGFkKxIzCsBMalKMoaisJZHVABog+jQAAKj4oEIEEpcIEAUuNAGPlSFAFhNQAhc0AT+1AEMY-Ujk2QBGV3gQAaczQQBZRLXQAYAKPYBhIgNA8iqLZAAdTQARvzQUcf0MczAEYdQB4Q0AZxVAAF3GzAFo5QBR-UAbwyZEAC4TAF+EqyL2MwSPmitZnN2Fy0H1GzIsIrZ1zQFKAH4IC2SZAEgEwA9HUAcgMPkAaDlACN0-VEMAQ-lAHsDJytkALn9fkAMLlAHXlQB0eUATfiQ2Kw5AHfowBTCJkFK+xoCJCHsIYIEAcAtADHouqQUAb+jxmmQA7+UATlNDk2+1AAZ1QABdURRDItAYBOBwQxohoLQIEAQPNACLtQA300AF9T7RTYzovtQBYFQvZhWCJYoPo+QB3uUAHgtUl0X9zMB6KIE6v6ii4GHosAJujAAg9QAWTUAeYVMoRr9nF5dxkY+MaJqmscDrx7hgBzLsIEArBGX8Rg7qe167WMZMgbHH7GGEcQYNkRQBGJiAwfyABWMxigEKApDMadufR7HGCujBKFFvb9sYGpEgYGAuCwLAAGs9HcLgYF7Lgahp4AGaZygYC17DpBgch8WjLhWU4U4iWlDhlDAASUqkOBAF-FSyVNQQ4I6+w5ACHlSzjkAFfjAD21QAeBU0wAKWMAKDkwphQ4Qs2SEjkAW+jAFWbK1SpS6LonCfBEkmiBY6FRPGETtAZUYNP07QZMcxMiPAAsIwA++MAeH1s5zvcthhfVIUOQBEI0AG7lAH95f5W8s9vLM73gAD4e7QCB9QryFxoiAYTOiwBod0Ad1ij2dQBOhzklrDjXlCsCPQBeo0Abs8z9xEYsAIldEtHUgBsuRrh8OEmw17nUutdLAkII5HDPlICOxwz4mAjvcZ0gAqTTqG8FKEdvKAFz5QAbI7QP+NlHcgBJb0AM6KgA6VIvJCfKEBABoRoAUAD0roBMidEAdcOANzYE3M+QpWQswcqQUcQxxGQ0MF3CAEj3qwz7DgMgHhWQQAANQQCGAAbltiIqAo4TAyn0TiCI59GAighuUSRegbG-hlHvRR-B+GCMmqImRtipFeMcb4wwSjooqLURADR2i9G23fqsCx-9UL8GsRI4o9iJFON3hI8xEQTA0hiQAj4rj66Nw4J4hRsjJE6P8aQeRiiubKNwCEsJOj9E5jOhwC6pAro3T-gAqANTooJNKUkhxcihmkFtnTFB2SIixNfHkiAbjCnFMSeUkptiqmlMCSTOppB1FaMabbFYEdNJHicoAelNACAxuMQAMCqJUTocJymxAAvbmJSEgAsTRDGgQA2-GABkIwAs4mAF944A8yhEeD7IsfwizSlrNsfooFTdQWGEoMUz83B5HIq4DCgpwKIDwvBWIlZv5CJoqhQSncaLCLzEIGwCIGyIBsGiBAIU79CD0o0dWFkEiOw0tqao7ZEAqClNETAHAhAAj-W4EKGUbs1AOBwEKAQHYYA4sRZK04lKinyplKY7mWYIBYHVmMOlDKmUsr4NWQQaLOW9Nhpsnl6ipUyrlQqpVWAJUwFVZwR1WrYY5hzM6oUUATBSDlH6gQHt0iEA7MsYOJkAAsy5UCAFrTQAAFEpUAMr6y9AD90YAO9TAAMSg+Lh+pHqAEwFQ4gANvMACXRIJpjZoLYAG0V-iAE7TcuKVs2sT5BwegWBxgIkQhAUcgAxeS2GNQRixiougkFgNtzpDiAAEjZ0Tzs1OR7UhEya8IAwlWAOQ+Hxj7l0AFoKaBk2bEAMeRgBmxR6lmwAGRm8Nge0+BEAABKWBro4AdmMK1CjO0szRfo2GsRfyMAJm4Dgttb0dLGBOt9NKO25A-GK9F3Nh2JEWIBlwwHbawo8G4bZQo22MCfS+t9W5INii7kB59HAP31gLAKYUbaYAwawHKWGdLGUAOZWhfwirn0jqwGygQ5H3Adg-SsVjxqGVts3RAEjL5JVIbYIsfjgmA4yg-dykJXgxjgEAGbaDNtWIa2R4NWVIVhIcAFpmD9ACxitp22Ua+IpQlnAaZ1xbg4FNIAO38MomQAFIXCuDcNgdxAAL8V8wA9c6AGCNbyTlnSAAj9F5gB+7UANxyMJrQAHdOATVS4cCadBqHUMOF1UBaBnMBbuCFDzLUUoAAlcQAFkAAyFJ0iTsKSlAAkgAQVIFwXQ0YcADg7twwStWSCUAAKKLFaYAaLlABvcilLqgAZxM2FfHNc79S4gCB5xKgAHjUAHBmKV8Q4BwGoUI4AuBsBwPiYgUoiB0FALVtgNxCA8miDgUA0yMKudAKwI2oA6A0E4KAcgpB8CgAcHoXhPhUuMAAOoZcIKl4w6XIgI58HqpgNWGtjewAwVpxgJr4F6606UY0LrY6wLj2VAgIgKcjeM9IAARBTLMqCECiPV6weB+AE6JzgGAABHSQpAhgBHRw3XsHX0hypp-MSNUYCxnwm31jnLBoyGDlfgBw+BjYi0w0KJgI3iDjcmzgVT3M8x4BoN10InXuu84HPwK3PXKfkG5qlmAwRDCyqgMx6K1G+S0ZFNbuUWZijGaY3ZlKgAabyDA2wAYhaADbzfUW2hsQGXmvfUMf48J5CgiQAC8aAGz5ZAgAeeUx-V8nlOPNRxStaBmUhvL6ifdEUcDMAC0pASBtIbw+zvWAn2YQiA+mgqW8uHET4AK8DACPugmQACeb3I2ClNoKM1KAGm5QAs34QCcuMQAGrGAAf4yrwlTrLEgEkNQvY8DJl8HQNQxALoRFHPJxYD+Yh9qbzq6IHe6CCAZsoUTrS4E3QPQvRvRcwrCwyMZUxIwKiwwaCPbaClIKjNIrAW4QB0DkA8D8B9jRCeqwSQAQCACcFoAHbGgAyfGACmionCiIAD-a14N4GUyBk0LAqB6BYE2KMQAAPGirvDgWAZsIAFgJgA4-GADAwagIAHxmgAXJ6ABlfoAPrmx+vg3IeAhAegpwxgj+Lq-cco9B8hnGzIrBL6CmWAbBQB7MXByYEBggogE6QsSgo4sBWgLMAaZgWYcoCoKBaBXAzE-At2N+d+QoEqfAu8ggnKKwFaFBlBLhDBeAbaHhV+3hWAEQhhbM9oXBfhe870YBrBtqKYZh-Mlh8g1h6gmgTApgjhiBzhmhjBGghAJ2+OMQjgAACh3idmwaAXgRAIkDgNgN+vBtAfTMEJILjPiksCsFmFwRoZACgRThdjUbEBwFgGNnQBduQM0buK0frizAIMQGoBEDQBdCLL0RgJIBUvIhSlSogaMQqGBveriGzoQJfj0R8O0Z0WioDOkdFGTE4GhhRogQqHTMKhNKEE3ioTEEKHkMmI8UwAINpoAAZyE6Is7xqswQlAWYFQzhshre6JrePygAgZH6gJiABOSoAP1+GJreCoYkpUR4HypBJWrm+oHygAbGlBQJh2YQAABsMAgA2zaoBCSCTOigImgRzJ5BQcI9xRyAAA6ViUQYnEeGCDXJhs3JZF9GwYAAvmgAs55oBcFtyqmdyMBamp4QCLZL5wjr4tQQAVSAAkciGBHFsA+C5IALgGhw3kgA4aYNqAD98oAGAux6KUfEkAgKmKTcVKfWF2Qw3QQeXALMaw8itIH6wSvKTuGGfpHgAZrSQZbBuIXBTuLMuI8iuINKMZHgcZOYSZ7RQwHB8GXB-MdeeRQRkAPUuIDUaKs6GwPcAUgA6fpbBopnRRDJnDBsESJcE+7H6clQIbBujnj6kLYRxR4PiJxRxbC4iHBR6AAxciGDOWgFsAANK+kCKFK0pdnFlQCpnFDrlcFiK4jFDSLrldy4hbjrnRmGYQC1Y7H4iKruA5YSq7zdAwASyZRiJDC2ZFlBkHnPF9lyoARAQiwslmAyi4EQC4jtnwaHDrlbDpIrCAAB3oAJmKgACEZdSADsFsOYcBtmgAiFQYAF+KuIxw651eAFwwUAoFIgdeEFUFMFcFDZSFKF0agkAA7PGoAGj+doKUxsWAQwHG6oGoaAVaWwkkxU+ogAboreQRgpRYCsgXSRADiACG5jNl5oJJwB8IALIJgAYcopTiaADtwS2bPFpbShwNEAElsFqEpSpREOQN5JCAXI-FjJybiFqEQvqC5BCClDev-nejdDJv4BLNBl+s8dzLYfAbYpErkm+g0VUQ7hAIJcJfSiFZQGFSsBJYxscNFXlA+D4MbIwAlY0clQIIxsoHTMbFACVWKIldUSyGoAIDBRtJhdFbIfZdGI5YAB6KqAu6DUsFuqyl3VA4AAqhABpYACRKCaCoOZXVqlEAE12UAAGu+AAJqmSoBBiADCiqPGPMhLkmNiNapdMqmQEfwPNSdY5RAMphANlDUD8tpoALJKgA9141Dvg1AWFAQ2xRLHUOXkDTIsH-WjVnXKYBErB-XXWA3dK8ACBPVvXKBQ0A3TLREg2nUAKlmIwQ2QDI2g0AImBw3fXSBI3xVijlXE3ARbjw0vWvWk2oRvo2BKGczcx5DGyWUQBvrkAVAjIwUGVc1oCAA68hiKlfspADnJVIAMdygAgB7UKABxchVHPH5ZDWTS+EzcofwC0dapTRUvoq8RAAja9brd8cfl1MWoAAbyTk0wV8gAQ4ZL5RyXovyGw4ANVe7TRLnvKoDrmtlzn6jFQKUrC4h5DrkVBDxiGABzcsVt5IAGvKJF650l6c1ecpztrtpAPZZ5EA65w1ANKVQlHGaZQohAmZ9kX6md2ZwdVQd5mRhAeQjGHQOYKBbaDRcBdVatzNmt3MX1As0gNQjADhosj1tNvdDhtsKdjRbtuG9VhRMslNkaY9VRE9Td09Ag4wtN1ZEAx0gwuS650R4m7NKtowzKHCSpIY5l6ACoC1jlgAcCqVTpyHCADPBoANKx6cMIgA4Jr-D6iAC70YdahAAGIuDGApEBGM1KGyFWiAA55nBQ+BHIcIAG56gAKHIRxpxrl1FORpx1Fb2oRPq2pA3nXGBXU50Sp7ycDWVGB1H3V1GpALABKYNjD-2EAsHYNqK4P0O7yyFENpLrINRpwSKHAMqpIkMBLkNOSABRRgfKgIABragAFQqYUwgYM-1jBdakA0BDAV59Z4OXXZ2jUQBKMqNsGCNGBjYBGZRjZUNgq0M6OkDKOqM459YsG6M2MU7qMFDwalADLKYVA41waIzfilJbjKaR4mStC8V2iAB52oABhGKUETl6gAd26AAN0S2YADHamFkOlxN01xE0gS4JXRiMH0UQ1wkBeTk0RRATzSshy8mwoTgADc5oB1FW6JDBBQB8MiOAAE8oAEgJHyR4UcwUxUbV+UgAnhkWN1Np1sCNMaM0rB0c2pX50VC4xB0h1xWoRqD1MZOEDGDDMNMYAHmrNsMrDHAVRoA6gPKHCAAE+TNIAN+egAFUo5rLNp2rMwg5xwjW05oKhRK3M4CrMs363gkDFko7jhBRAzFxF62tEfD5P4C-PwaEQAu1GzERAgvWrvEDF3X-ORCwvAsm0rDOgtQ9RICLxLx7rniADwOoAMN+UJshZLl6b4EAVoew1TdRj2NVEA4dqzMdJF4Jxw7x1eshUSDL2u2zR5F1KYOqHwKwlLb4QzjLArmdWji10z9KaZLNsMeQ5DOlIdmZKr9dFjqzDRCwbAWAiO-AfLNVqZNxo4usF22AH1O4NQ7xNQu8+iKBfxRdsFNxur8w+rhrWTlrRRNQ0JlhzQRTsxLM4egMZTYrUJl6zEtL1TaAx1muxAUQEAhwLL3kgAKkqAAmaeuRlK80dayAm1EAK8eRY-GwcYW4eZnUKwQ9o1ndlLMWCu+OuWYn9d0MYKW4m6+GwTUK6DUNTVONTdxBWKOIIIOwIF4y28YDUIO79UdcDfm2W529272wIP2wIKO8O2uzxAINTRWDjX9SwUu4RFOzxDbAqJS1IBAPS-U6M1s-qG04AEr6gAEk6aSHAPuAB90e5nOsVGgBiPlMfg+Ini0m0uBtJjBB+mYR2bDDQLfviL2IU3+s+jykwGptFPMDlqhoTBwKLLUnoShgE96rZuAAAALOtDPXvBAmDjOX5CTRSTM6XyuwWzMswbM3uUfzOeOLMQaSA2B3DAosEsdjMTo425XQeXa9j5SHCDrWU7FkBYD6hoeEB0DjC5R5QWMTo8eFLRECcYCUdCcgAoE0CMDqe8eTTRHgdfpsgciizSdIeMAocfAKd0CMCab6Y5gRuXoXuxuoA2ALE4Bvgpu4jptZvFQQDHDGtQCAD5StMIAB9ugAs8o8u5I+cXZFtCv9y5uoQ6ugqessFJd+emsTTmt2u7PjERFtE3G1WusTTuvZdfOtHZMQB+swk-UvGtHgvrGAA8sa6PqDaCLJiwJJZaQ4fkHIJGgIAMrygAsyZDfGQUuRtQCAAq3oABIW6XYw4XFbWdl9A4DHirHd+tKrHN6rsFmrmLkAlLJgi3y3EA7b5bGdx5+DsrN1tbCi1DRgLMTbM3Hn53B9K35HOnVH9xEAdHHgW3THh3Id93A46tLWKx1qMPsPcP91EA2nbHFdxX8PaPcPGrCzwx8o8oUST65AxAGAXOnNk0+AOxbBeQUAI4APJgnjMFSlowDccRZXt1YwlPxiHQUSFIAi5P1bi1sU1PE1G3qwpI5kQreQMAkvGdkvMAY1C4Coh2x2p2oAqWqvQqACLmgWHR5sls3WoABO5AoA+Ir5BMxsoAt+bAMqQwre785AMAh2dA2Q73Maolz1V9r1kk62GvpWOARwmoic7TZ01+5+qw3sz2cyn+ggNAYf5AgccpfYgu-YsqZAGAkBxQihpwNIpIZu6msZMfMAZ+LAQoKf6fShIeQHABijagbAXMtsCfkgRfAgoAbaoAegxAQwIsyYVKfdThwA9fSfcqzfYoQ-dAlOnf3fRiDA5A5ANAhsfMmYV8Agvf-fjfQ-L4I-Y-xQXfEQPf0F4AEDU-M-hsvkLTEAgAcAaAAScmgHnoAEmJzUicffWAifq-LfMa3QMa4-O-UAThuBkk4wEjWoLapf3FKb1gQn3SAPHyf4N8cAqZcHrnTSo6M6ibWLgin0YBnkM+jADrNXzyC4gUSWtXPvmXz6F9k+pADAKX1OBjEIASBE-IFRA5YCa+-3Jvi3zb4d87O-3FjDvxQqgsqBLXa1EwOH63Yx+bA-WhwJGS8C4eh-WfkwA7L603OkAMpkHzPxp0UwTeYoFgXfyR8BARHBmKAGgjJkGAreHLPTTGCPkhgBgJvOMwsGKsdwOZFYAzCNxYBvIdQb4GvH+xDAAAQkMCbznIA+bTSyIQWOCABZlUAApemPH8EgAgAA)
* [Ant Design Pro官网](https://pro.ant.design/)
## 免费文章和教程

* [掘金| TypeScript 高级用法](https://juejin.cn/post/6926794697553739784)
* [掘金|  一文读懂 TypeScript 泛型及应用](https://juejin.cn/post/6844904184894980104)
* [掘金| 一份不可多得的 TS 学习指南（1.8W字）](https://juejin.cn/post/6872111128135073806)
* [掘金| 「1.9W 字总结」一份通俗易懂的 TS 教程，入门 + 实战！](https://juejin.cn/post/7068081327857205261)
## 免费视频
::: warning @todo
B站录制
类型体操入门到实战
:::

## 书籍推荐

* [TypeScript 入门教程](https://ts.xcatliu.com/)
* [深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/#why)

## 付费课程

* [极客时间| 大圣带你玩转Vue3全家桶](https://time.geekbang.org/column/intro/100094401?code=r78oEOqzZRyXf4pq6sDsv55Txm-8xGuB94dQMOW19Q8%3D&page=A)
