import { ref, reactive } from "@vue/reactivity";
import { onMounted, watch, onBeforeMount, watchEffect } from "vue";

const colorManager  =() => {
    
  const colors = [ "red", "green", "blue", "yellow"];
  
  //   const color = reactive({
  //     name: "",
  //   });
  let message = ref("Pick a color...");

  const addColor = (value) => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (colors[randomNumber] === value) {
      message.value = `You win... [answer: ${colors[randomNumber]}]`;
    } else {
      message.value = `You lose... [answer: ${colors[randomNumber]}]`;
      console.log("click", value);
      
    } // end if else    
    }; // end addColor

    onMounted(() => window.addEventListener("click", addColor));
    
    return{
        colors,
        message,
        addColor

    }
}; // end colorManager
 
export default colorManager;
