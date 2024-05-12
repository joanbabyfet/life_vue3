import { ref, onMounted } from 'vue'

export default function useClock() {
    const timeInterval = ref(1)

    onMounted(() => {
        //循环执行每秒1次
        setInterval(() => {
            if (timeInterval.value > 1000) {
                return timeInterval.value = 0
            }
            timeInterval.value ++
        }, 1000)
    })

    return {
        timeInterval,
    }
}