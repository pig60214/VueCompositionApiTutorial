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
  setup(props) {
    const syntax = ref('Composition API');

    const alertMsg = computed(() => `You are using ${syntax.value} of ${props.framework}`);
    console.log(alertMsg.value); // use `.value` to get value

    return {
      syntax,
      alertMsg,
    };
  }
};
</script>
