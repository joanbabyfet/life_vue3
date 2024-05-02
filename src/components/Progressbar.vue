<template>
    <div class="bar" :style="{width: barSize+'px', height: barSize+'px'}">
        <svg xmlns="http://www.w3.org/2000/svg" :viewBox="'0 0 '+totalSize+' '+totalSize">
            <circle :cx="center" :cy="center" :r="circleSize"
                :style="{'stroke-width': strokeWidth}" class="progress-bar__background" />
            <circle :cx="center" :cy="center" :r="circleSize"
                :style="{'stroke-width': strokeWidth, 'stroke-dashoffset': 100-percentage}"
                class="progress-bar__progress 
                js-progress-bar" />
            <circle :cx="center" :cy="center" :r="circleSize - strokeWidth/2"
                class="text"/>
        </svg>
        <div class="flexc" :style="{
            width: (circleSize*2 - strokeWidth)*ratio+'px', 
            height: (circleSize*2 - strokeWidth)*ratio+'px',
            top: strokeWidth*ratio+'px',
            left: strokeWidth*ratio+'px',
            fontSize: barSize*0.12+'px',
            }"> 
            <span class="title">{{ text }}</span>
            <span class="value">{{ percentage }}%</span>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'

//接收父组件传递的数据
const props = defineProps({
    percentage: {
      type: Number,
      default: 50,
    },
    text: String
})
const circleSize = ref(16)
const barSize = ref(100)
const strokeWidth = ref(3)

//计算属性
const ratio = computed(() => {   
    return barSize.value / totalSize.value
})
const totalSize = computed(() => {   
    return circleSize.value*2 + strokeWidth.value
})
const center = computed(() => {   
    return circleSize.value + strokeWidth.value/2
})
</script>

<style lang="scss" scoped>
.bar {
  position: relative;
  div {
    position: absolute;
    z-index: 2;
    justify-content: center;
    span {
      color: white;
      font-weight: bold;
    }
    .title {
      margin-bottom: 6px;
    }
    .value {
      font-size: 1.4em;
    }
  }
  svg {
    width: 100%;
    height: 100%;
  }
}
svg {
  transform: rotate(-90deg);
}

.progress-bar__background {
  fill: none;
}

.progress-bar__progress {
  fill: none;
  stroke: #e67e22;
  stroke-dasharray: 100 100;
  stroke-dashoffset: 100;
  transition: stroke-dashoffset .2s ease-in-out;
}

.text {
  fill: #34495e;
}
</style>