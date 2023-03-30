<template>
  <div class="">
    11111111111
    <van-uploader :after-read="afterRead" />
  </div>
</template>

<script setup lang="ts">
import {} from "vue";
const afterRead = (file: any) => {
  // 此时可以自行将文件上传至服务器
  console.log(file);
};
</script>

<style lang="less" scoped></style>
