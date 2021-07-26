<template>
  <h1> {{ framework }} </h1>
  <h2> {{ syntax }} </h2>
  <button @click="clickButton" :disabled="button.isDisable"> {{ button.name }} </button>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
  name: 'HelloWorld',
  props: {
    framework: String,
  },
  setup(props) {
    const syntax = ref('Composition API');

    const alertMsg = computed(() => `You are using ${syntax.value} of ${props.framework}`);

    const clickButton = () => {
      alert(alertMsg.value);
    };

    const buttonData = {
      name: 'Button',
      isDisable: false,
    };
    const button = reactive(buttonData);
    console.log(button); // no need `.value` to get value

    return {
      syntax,
      clickButton,
      button,
    };
  },
};
</script>
