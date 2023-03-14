<template>
  <nav>
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'MainPage' }">Main</router-link>
    <p>scrollY : {{ Math.floor(scrollPos) }}</p>
    <input type="text" ref="inputRef" />
    <span>{{ inputText }}</span>
  </nav>
</template>

<script>
import { ref, onMounted } from "vue";
import _ from "lodash";

export default {
  setup() {
    let scrollPos = ref(0);
    let inputText = ref("");
    const inputRef = ref("");

    // onMounted(() => {
    //   document.addEventListener("scroll", () => {
    //     // debounce
    //     let toId;
    //     toId = setTimeout(() => {
    //       clearTimeout(toId);
    //       scrollPos.value = window.scrollY;
    //     }, 100);
    //   });
    // });

    // onMounted(() => {
    //   let wait = false;
    //   inputRef.value.addEventListener("input", (e) => {
    //     // throtlle
    //     if (wait) return;
    //     inputText.value = e.target.value;
    //     wait = true;
    //     setTimeout(() => {
    //       wait = false;
    //     }, 10000);
    //   });
    // });

    onMounted(() => {
      document.addEventListener(
        "scroll",
        _.debounce((e) => {
          scrollPos.value = window.scrollY;
        }, 300)
      );
    });

    onMounted(() => {
      inputRef.value.addEventListener(
        "input",
        _.throttle(
          (e) => {
            inputText.value = e.target.value;
          },
          300,
          { trailing: true }
        )
      );
    });

    return {
      scrollPos,
      inputText,
      inputRef,
    };
  },
};
</script>

<style>
</style>