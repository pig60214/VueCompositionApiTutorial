<template>
  <h1> {{ framework }} </h1>
  <h2> {{ syntax }} </h2>
  <button @click="clickButton" :disabled="button.isDisable"> {{ button.name }} </button>
</template>

<script lang='ts'>
import { computed, defineComponent, reactive, ref, watch } from 'vue';
import Button from '@/interface/button';

export default defineComponent({
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

    const buttonData: Button = {
      name: 'Button',
      isDisable: false,
    };
    const button = ref(buttonData);
    console.log(button.value); // use `.value` to get value
    setTimeout(() => { button.value.name = 'Use `button.name` to Change'; console.log(button.value.name) }, 3000);

    watch(button, ()=> {console.log('Change!!')}); // Won't console

    return {
      syntax,
      clickButton,
      button,
    };
  },
});
</script>
