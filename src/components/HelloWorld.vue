<template>
  <h1> {{ framework }} </h1>
  <h2> {{ syntax }} </h2>
  <button @click="clickButton" :disabled="button.isDisable"> {{ button.name }} </button>
</template>

<script>
import { ref } from 'vue';

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
  computed: {
    alertMsg() {
      return `You are using ${this.syntax} of ${this.framework}`;
    },
  },
  methods: {
    clickButton() {
      alert(this.alertMsg);
    },
  },
  setup() {
    const syntax = ref('Composition API');
    console.log(syntax.value); // use `.value` to get value

    setTimeout(() => { syntax.value = 'Composition API, Yeah !!'; console.log(syntax.value); }, 3000);

    return {
      syntax,
    };
  }
};
</script>
