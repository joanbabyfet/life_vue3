<template>
    <router-view></router-view>
</template>

<script setup>
import { provide, getCurrentInstance } from 'vue'

//定义全局变量
provide('message', 'test')
//获取全局变量
//const { proxy } = getCurrentInstance()
//console.log(proxy.$baseUrl)
</script>