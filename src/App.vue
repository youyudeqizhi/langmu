<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();

const form = reactive<any>({
  text: "",
  tel: "",
  digit: "",
  number: "",
  password: "",
});

const list = ref([]);
//#endregion
const loading = ref(false);

const name = ref<any>("");

async function getName() {}

function save() {
  (axios as any)({
    method: "POST",
    url: "/api/save",
    data: {
      id: "dsfdslkfjkdshdfkshfdk",
      value: "dsfdsfsdfsfds",
    },
  });
}

async function getForm() {
  const data: any = await getOne("form");
  if (!data) return;
  form["text"] = data.text;
  form["tel"] = data.tel;
  form["digit"] = data.digit;
  form["number"] = data.number;
  form["password"] = data.password;
}

onMounted(() => {
  getName();
});
</script>

<template>
  <div>文本{{}}</div>
  <!-- 输入任意文本 -->
  <van-field v-model="form.text" label="文本" placeholder="请输入文本" />
  <!-- 输入手机号，调起手机号键盘 -->
  <van-field
    v-model="form.tel"
    type="tel"
    label="手机号"
    placeholder="请输入手机号"
  />
  <!-- 允许输入正整数，调起纯数字键盘 -->
  <van-field
    v-model="form.digit"
    type="digit"
    label="整数"
    placeholder="请输入整数"
  />
  <!-- 允许输入数字，调起带符号的纯数字键盘 -->
  <van-field
    v-model="form.number"
    type="number"
    label="数字"
    placeholder="请输入数字"
  />
  <!-- 输入密码 -->
  <van-field
    v-model="form.password"
    type="password"
    label="密码"
    placeholder="请输入密码"
  />
  <van-button type="primary" @click="save">保存</van-button>
  <van-button type="primary" @click="getForm">获取</van-button>
</template>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
