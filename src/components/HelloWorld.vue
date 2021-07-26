<template>
  <h1> {{ framework }} </h1>
  <h2> {{ syntax }} </h2>
  <button @click="clickButton" :disabled="button.isDisable"> {{ button.name }} </button>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    framework: String,
  },
  data() {
    return {
      syntax: 'Option API',
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
};
</script>
