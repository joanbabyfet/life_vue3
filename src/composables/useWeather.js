import { ref, onMounted } from 'vue'
import { getWeatherInfo } from '../api/index'
import { ElMessage } from 'element-plus'

//获取新闻列表
export default function useWeather() {
    const weatherData = ref({})

    async function getInfo() {
        await getWeatherInfo().then((res) => {
            if(res.code === 0) {
                weatherData.value = res.data
            }
        }).catch(error => {
            ElMessage.error(error)
        })
    }

    onMounted(() => {
        getInfo()
    })

    return {
        weatherData,
    }
}