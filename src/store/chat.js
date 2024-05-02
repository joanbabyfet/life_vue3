import { defineStore } from 'pinia'

// 创建store,命名规则： useXxxxStore
// 参数1：store的唯一标识
// 参数2：对象，可以提供state actions getters
const useChatStore = defineStore('chat', {
    //开启数据持久化
    persist: true,
    state: () => {
        return {
            chatHistory: '', //历史对话
        }
    },
    actions: {
        setChatHistory(data) {
            this.chatHistory = data
        }
    }
})
export default useChatStore