<script>
  import './style.css'
</script>

<template>
  <div class="main">
    <div class="links">
      <router-link to="/" exact>Go Home</router-link>
      <router-link to="/one">Go to One</router-link>
      <router-link to="/two">Go to Two</router-link>
    </div>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>
