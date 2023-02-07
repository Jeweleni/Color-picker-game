

<template>
  <h1>Color Picker Game</h1>

  <div>{{ message }}</div>

  <button v-for="color in colors" :key="color" @click="addColor(color)">
    {{ color }}
  </button>
</template>

<script  >
 
import { ref, reactive } from "@vue/reactivity";
import colorManager from "../composables/ColorPicker";

// const {colors, message, addColor} = colorManager();

export default {
  name: "ColorPickerGame",
  data(){
  return{
      colors: ["red", "blue", "green", "yellow"],
      message: '',
      
    }
  },
  methods: {
    addColor() {},

  },
  setup() {
    
    const { colors, message, addColor } = colorManager();
    return { colors, message, addColor };
  },
};

</script>

<style></style>
