<template>
  <div class="background-transition h-screen">
    <div class="container m-auto">
      <router-view name="sm"></router-view>
    </div>
  </div>
</template>
<style>
.background-transition {
  background: linear-gradient(360deg, rgba(73, 59, 168, 0.74) 0%, #3362A9 57.29%);
}
</style>
