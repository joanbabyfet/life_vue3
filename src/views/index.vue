<template>
  <div class="main-page flexc">
    <div class="top">
      <div class="time flexc">
        <div class="date flex">
          <span>{{ timedate }}</span>
          <span>{{ week }}</span>
        </div>
        <div>
          <Clock></Clock>
        </div>
        <span class="tips">{{ weatherData.result?.forecast_keypoint }}</span>
      </div>
      <div class="info flexc">
        <div class="progressbar flex">
          <Progressbar :text="'CPU'" :percentage="cpuUsage"/>
          <Progressbar :text="'RAM'" :percentage="ramUsage"/>  
        </div>
        <div class="txt flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 46 94"
              version="1.1">
              <g
                id="layer1"
                transform="translate(0,-958.36214)">
                <path
                  style="opacity:0.8;fill:#ff0000;stroke:none;stroke-width:3.77637601;stroke-miterlimit:4;stroke-dasharray:none"
                  d="m 21.474387,958.3621 c -6.41557,0 -11.6916606,4.69576 -11.6597626,10.44389 l 0.02544,3.73932 -5.2507503,0 0,3.95231 5.2724483,0 0.02953,4.94641 -5.0510092,0 0,3.95231 5.0728082,0 0.02953,5.93351 -5.1054508,0 0,3.95581 5.1272908,0 0.02544,4.6943 -5.0292467,0 0,3.95524 5.0509913,0 0.03952,6.809 c -6.2703329,4.2391 -10.0323796,11.2743 -10.051166,18.8023 5.588e-4,12.6022 10.297847,22.8156 23,22.8156 12.702156,0 22.99939,-10.2134 22.999999,-22.8156 -0.01499,-7.647 -3.886124,-14.78 -10.316279,-18.9967 l 0,-41.74381 c 0,-5.74813 -5.244067,-10.44389 -11.659712,-10.44389 l -2.549138,0 z m 0,4.53551 2.549143,0 c 3.697901,0 6.597862,2.59552 6.597862,5.90838 l 0,44.28701 0.145067,0 c -0.01,0.2414 -0.06002,0.4724 -0.134617,0.6918 5.907483,2.9512 9.636555,8.9512 9.644474,15.513 -2.49e-4,9.6043 -7.847206,17.39 -17.527809,17.39 -9.680605,0 -17.5275561,-7.7857 -17.5277619,-17.39 0.0011,-6.5664 3.7303073,-12.5721 9.6408579,-15.527 -0.01544,-0.055 -0.02953,-0.1105 -0.04453,-0.1658 0.02544,0 0.03952,0 0.06002,0 l 0,-44.78093 c 0,-3.31285 2.8964,-5.90837 6.594305,-5.90837 z m -0.261602,32.56086 c -1.314401,0 -2.371124,1.04835 -2.371124,2.3524 l 0,19.67433 c -5.146855,1.6745 -8.628156,6.4387 -8.631381,11.8126 1.03e-4,6.8708 5.613502,12.4401 12.538576,12.4401 6.925036,0 12.538435,-5.5693 12.538485,-12.4401 -0.0025,-5.4849 -3.627985,-10.3213 -8.921845,-11.9033 l 0,-19.58363 c 0,-1.30405 -1.056674,-2.3524 -2.371179,-2.3524 l -2.781532,0 z"
                  id="thermometer"/>
              </g>
            </svg>
            <span>{{ cpuTemp }}°C</span>
          </div>
          <div>
            <svg viewBox="0 0 1122 1024" xmlns="http://www.w3.org/2000/svg" >
              <path fill="#0197d5" d="M561.152 910.336c-7.68 0-25.088-13.824-53.248-41.984-27.648-28.16-41.472-45.568-41.472-53.248 0-12.288 11.776-22.528 35.84-30.72s43.52-12.8 59.392-12.8c15.872 0 35.328 4.096 59.392 12.8s35.84 18.432 35.84 30.72c0 7.68-13.824 25.6-41.472 53.248-29.184 28.16-46.592 41.984-54.272 41.984z"></path>
              <path :fill="piData.wifi_status?.value > 33 ? '#0197d5':'#c0c0c0'" d="M715.264 755.712c-0.512 0-8.192-4.608-23.04-14.336-14.336-9.728-33.792-18.944-57.856-28.672-24.064-9.728-48.64-14.336-73.216-14.336-24.576 0-49.152 4.608-73.216 14.336-24.064 9.728-43.52 18.944-57.856 28.672-14.336 9.728-22.016 14.336-23.04 14.336-6.656 0-24.576-14.336-53.248-43.008s-43.008-46.08-43.008-53.248c0-5.12 2.048-9.216 5.632-13.312 29.696-29.184 67.072-52.224 112.128-69.12s89.088-25.088 133.12-25.088c44.032 0 88.064 8.192 133.12 25.088 45.056 16.896 82.432 39.936 112.128 69.12 3.584 3.584 5.632 8.192 5.632 13.312 0 6.656-14.336 24.576-43.008 53.248-29.696 28.672-47.104 43.008-54.272 43.008z"></path>
              <path :fill="piData.wifi_status?.value > 66 ? '#0197d5':'#c0c0c0'" d="M871.424 600.064c-4.096 0-8.704-1.536-13.312-4.608-51.712-39.936-99.84-69.632-143.872-88.064s-95.232-28.16-153.088-28.16c-32.256 0-65.024 4.096-97.28 12.8S402.944 510.464 378.88 522.24c-24.064 11.776-45.568 23.552-65.024 35.328s-34.304 22.016-45.056 30.208c-11.264 8.192-16.896 12.8-17.92 12.8-6.656 0-24.064-14.336-52.736-43.008s-43.008-46.08-43.008-53.248c0-4.608 2.048-8.704 5.632-12.8 50.176-50.176 111.104-89.088 182.784-117.248 71.68-27.648 143.872-41.472 217.088-41.472s145.408 13.824 217.088 41.472c71.68 27.648 132.608 67.072 182.784 117.248 3.584 3.584 5.632 8.192 5.632 12.8 0 6.656-14.336 24.576-43.008 53.248s-45.056 42.496-51.712 42.496z"></path>
              <path :fill="piData.wifi_status?.value > 99 ? '#0197d5':'#c0c0c0'" d="M1026.048 445.44c-4.096 0-8.192-1.536-12.8-5.12-68.096-59.904-138.752-104.96-212.48-135.168-73.216-30.208-153.6-45.568-240.128-45.568-87.04 0-166.912 15.36-240.128 45.568S176.64 380.416 108.544 440.32c-4.096 3.584-8.192 5.12-12.8 5.12-6.656 0-24.064-14.336-52.736-43.008S0 356.352 0 349.184c0-5.12 2.048-9.216 5.632-13.312C76.8 265.216 161.792 210.432 260.096 171.52s198.656-58.368 301.056-58.368 202.752 19.456 301.056 58.368 183.296 93.696 254.464 164.352c3.584 3.584 5.632 8.192 5.632 13.312 0 6.656-14.336 24.576-43.008 53.248-28.672 28.672-46.592 43.008-53.248 43.008z"></path>
            </svg>
            <span>{{ piData.wifi_status?.name }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom flex">
      <div class="weather flex" @click="client.getWeather()">
        <div class="main flexc">
          <div class="svg flex">
            <weather :weather="weatherData.result?.realtime.skycon"/>
            <b>{{ weatherData.result?.realtime.temperature }}°C</b>
          </div>
          <p><span>bbb湿度:</span><b>{{ $toFixed(weatherData.result?.realtime.humidity * 100) }}<small>%</small></b></p>
          <p><span>降雨:</span><b>{{ $toFixed(weatherData.result?.realtime.precipitation.local.intensity) }}<small>mm/h</small></b></p>
          <p><span>风速:</span><b>{{ $toFixed(weatherData.result?.realtime.wind.speed) }}<small>m/s</small></b></p>
          <p><span>PM2.5:</span><b>{{ $toFixed(weatherData.result?.realtime.air_quality.pm25) }}<small>μg/m3</small></b></p>
        </div>
        <div class="future">
          <div class="one">
            <time>一小时</time>
            <weather :weather="weatherData.result?.hourly.skycon[1].value"/>
            <span class="temp"><b>{{ $toFixed(weatherData.result?.hourly.temperature[1].value) }}</b><small>°C</small></span>
            <span class="rain">雨：<b>{{ $toFixed(weatherData.result?.hourly.precipitation[1].value) }}</b><small>mm/h</small></span>
          </div>
          <div class="two">
            <time>两小时</time>
            <weather :weather="weatherData.result?.hourly.skycon[2].value"/>
            <span class="temp"><b>{{ $toFixed(weatherData.result?.hourly.temperature[2].value) }}</b><small>°C</small></span>
            <span class="rain">雨：<b>{{ $toFixed(weatherData.result?.hourly.precipitation[2].value) }}</b><small>mm/h</small></span>
          </div>
          <div class="three">
            <time>明天</time>
            <weather :weather="weatherData.result?.daily.skycon[1].value"/>
            <span class="temp"><b>{{ $toFixed(weatherData.result?.daily.temperature[1].avg) }}</b><small>°C</small></span>
            <span class="rain">雨：<b>{{ $toFixed(weatherData.result?.daily.precipitation[1].avg) }}</b><small>mm/h</small></span>
          </div>
          <div class="four">
            <time>后天</time>
            <weather :weather="weatherData.result?.daily.skycon[2].value"/>
            <span class="temp"><b>{{ $toFixed(weatherData.result?.daily.temperature[2].avg) }}</b><small>°C</small></span>
            <span class="rain">雨：<b>{{ $toFixed(weatherData.result?.daily.precipitation[2].avg) }}</b><small>mm/h</small></span>
          </div>
        </div>
      </div>
      <!-- <todo/> -->
    </div>
  </div>
</template>

<script setup>
import { ref, computed, getCurrentInstance, onUnmounted, onMounted, watch } from 'vue'
import Progressbar from '@/components/Progressbar.vue'
import Clock from '@/components/Clock.vue'
import Weather from '@/components/Weather.vue'
//import useWeather from '@/composables/useWeather'
//import useHardware from '@/composables/useHardware'
import useTimeInterval from '@/composables/useTimeInterval'

//const { weatherData } = useWeather()
//const { piData } = useHardware()
const { proxy } = getCurrentInstance()
const piData = ref({})
const weatherData = ref({})
const { timeInterval } = useTimeInterval()

//计算属性
const timedate = computed(() => {   
  const date = new Date()
  return proxy.$dayjs(date).format('YYYY - MM - DD')
})
const week = computed(() => {   
  const date = new Date()
  return proxy.$dayjs(date).format('dddd')
})
const cpuTemp = computed(() => {  
  return parseInt(piData.value.cpu_temp)
})
const cpuUsage = computed(() => {  
  return parseInt(piData.value.cpu_usage)
})
const ramUsage = computed(() => {
  return parseInt(piData.value.ram_usage)
})

//websocket
let ws = new WebSocket(import.meta.env.VITE_APP_WEBSOCKET)
//连接开启时调用
const handle_open = () => {
  console.log('Connection established')
  heartbeat() //发送心跳包保持长连接
  sayhi()
  
  //监听timeInterval数据, 变化则调用函数
  watch(timeInterval, (newValue, oldValue) => {
    get_hardware()
  })

  //每10分钟调1次接口
  setInterval(() => {
    get_weather()
  }, 600000)
  get_weather()
}
//连接断开时调用
const handle_close = () => {
  console.log('Connection closed')
}
//服务端送来消息时
const handle_message = (event) => {
  console.log('RESPONSE:' + event.data)
  if (event.data == '~H#S~') {
    return
  }
  let obj = JSON.parse(event.data)
  if (obj.action == "hardware") {
    piData.value = obj.data
  } else if (obj.action == "weather") {
    weatherData.value = obj.data
  }
}
//连接出错时调用
const handle_error = () => {
  console.log('Connection error')
}
//监听事件
ws.addEventListener('open', handle_open)
ws.addEventListener('close', handle_close)
ws.addEventListener('message', handle_message)
ws.addEventListener('error', handle_error)

let interval = null
//連接上即發送心跳包，在10秒内未向服务端发送數據，将会被切断
const heartbeat = () => {
  let str = '~H#C~'
  sendMessage(str)
  interval = setInterval(() => { //循环执行
    sendMessage(str)
  }, 8000)
}

const get_hardware = () => {
  let obj = {
    action: 'hardware',
  }
  sendMessage(JSON.stringify(obj))
}

const get_weather = () => {
  let obj = {
    action: 'weather',
  }
  sendMessage(JSON.stringify(obj))
}

//向服务器注册用户
const sayhi = () => {
  let obj = {
    action: 'say_hi',
    //token: 'xxx',
    //data: {}
  }
  sendMessage(JSON.stringify(obj))
}

//发送消息
const sendMessage = (message) => {
  console.log('SENT: ' + message)
  ws.send(message)
}

//设置setInterval后, 需要在当前页面绑定关闭, 否则会一直执行
onUnmounted(() => {
    ws.close()
    clearInterval(interval)
})
</script>

<style lang="scss" scoped>
.main-page {
  width: 100%;
  height: 100%;
  .top {
    display: flex;
    margin-top: 6px;
    padding-bottom: 6px;
    border-bottom: 1px solid #bebebe;
    .time {
      align-items: stretch;
      .date {
        span{
          font-size: 14px;
          font-weight: bold;
        }
        justify-content: space-around;
      }
    }
    .info {
      flex-grow: 1;
      align-items: stretch;
    }
    .progressbar {
      justify-content: space-evenly;
    }
    .txt {
      justify-content: space-between;
      div{
        display: flex;
        align-items: center;
        width: 50%;
        svg{
          width: 20px;
          height: 20px;
        }
        span {
          margin-left: 10px;
          font-size: 12px;
          word-break: break-all;
          font-weight: bold;
        }
      }
    }
    .tips {
      font-size: 13px;
      margin-top: auto;
      text-align: center;
    }
  }
  .bottom {
    align-items: stretch;
    flex-grow: 1;
    width: 100%;
    height: 0;
    .weather {
      width: 60%;
      background: linear-gradient(127deg, #e4d0ff, #ffdcc3);
      border-radius: 12px;
      margin: 4px;
      align-items: stretch;
      flex-shrink: 0;
      .main{
        width: 130px;
        align-items: stretch;
        .svg{
          ::v-deep(svg){
            width: 80px;
            height: 80px;
          }
          b{
            font-size: 22px;
          }
        }
        p{
          display: flex;
          align-items: center;
          margin: auto 0;
          transform: translateY(-8px);
          color: #1e1e1e;
          span{
            width: 45px;
            font-size: 13px;
            margin-right: 8px;
            text-align: right;
          }
          b{
            font-size: 15px;
          }
          small{
            font-size: 11px;
            margin-left: 3px;
            color: #363636;
          }
        }
      }
      .future {
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
        >div {
          width: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
          time {
            font-size: 12px;
            font-weight: bold;
          }
          ::v-deep(svg) {
            width: 36px;
            height: 36px;
          }
          span {
            font-size: 13px;
            color: #1e1e1e;
            &.temp {
              margin-top: -2px;
            }
            small {
              font-size: 8px;
            }
          }
          border-color: #fff;
          border-style:  solid;
          border-width: 0;
          &.one{
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          &.two {
            border-bottom-width: 1px;
          }
          &.three {
            border-right-width: 1px;
          }
        }
      }
    }
  }
}
</style>