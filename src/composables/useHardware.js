import { ref, onMounted } from 'vue'
import { getHardwareInfo } from '../api/index'
import { ElMessage } from 'element-plus'

//获取新闻列表
export default function useHardware() {
    const piData = ref({})

    async function getInfo() {
        await getHardwareInfo().then((res) => {
            if(res.code === 0) {
                piData.value = res.data
            }
        }).catch(error => {
            ElMessage.error(error)
        })
    }

    onMounted(() => {
        getInfo()
    })

    return {
        piData,
    }
}