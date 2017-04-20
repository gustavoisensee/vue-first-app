<template>
  <div class="main">
    <div class="content-label">
      <span>
        Counter: {{ $store.state.count }}
      </span>
      <span>
        Count is {{ evenOrOdd }}
      </span>
    </div>
    <div class="content-buttons">
      <button @click="increment" class="btn btn__blue">+</button>
      <button @click="decrement" class="btn btn__grey">-</button>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: mapGetters([
      'evenOrOdd'
    ]),
    methods: mapActions([
      'increment',
      'decrement'
    ])
  }
</script>
