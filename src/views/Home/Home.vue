<template>
  <div class="home" id="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <div id="home2">
      <div>{{temporaryData.name}}</div>
      <div>{{temporaryData.age}}</div>
      <div>{{temporaryData.city}}</div>
    </div>
  </div>
</template>

<script lang="ts" src="./Home.ts" />

<style scoped lang='scss'>
#home2 {
  width: 200px;
  height: 200px;
  background-color: green;
  border: 1px solid black;
}
</style>
