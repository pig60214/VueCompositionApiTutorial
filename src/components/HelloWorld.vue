<template>
  <h1> {{ framework }} </h1>
  <h2> {{ syntax }} </h2>
  <button @click="clickButton" :disabled="button.isDisable"> {{ button.name }} </button>
</template>

<script>
import { computed, ref } from 'vue';

export default {
  name: 'HelloWorld',
  props: {
    framework: String,
  },
  data() {
    return {
      button: {
        name: 'Button',
        isDisable: false,
      },
    };
  },
  methods: {
    clickButton() {
      alert(this.alertMsg);
    },
  },
  setup() {
    let syntax = 'Composition API';

    const alertMsg = computed(() => `You are using ${syntax}`);
    console.log(alertMsg.value); // use `.value` to get value

    setTimeout(() => { syntax = 'Composition API, Yeah !!'; console.log(alertMsg.value); }, 3000);

    return {
      syntax,
      alertMsg,
    };
  }
};
</script>
