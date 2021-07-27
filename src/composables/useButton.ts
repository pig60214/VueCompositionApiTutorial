import { computed, defineComponent, reactive, ref, watch } from 'vue';
import Button from '@/interface/button';

export default function useButton(buttonData: Button) {
  const button = ref(buttonData);
  console.log(button.value); // use `.value` to get value
  setTimeout(() => { button.value = {name: 'Use `button.value` to Change', isDisable: false}; console.log(button.value.name) }, 3000);

  watch(button, ()=> {console.log('Change!!')}); // Will console

  return {
    button,
  };
}