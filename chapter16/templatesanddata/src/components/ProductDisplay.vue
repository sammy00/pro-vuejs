<template>
  <ul>
    <li v-for="prop in Object.keys(product)" v-bind:key="prop">
      <slot :propname="prop" :propvalue="product[prop]">{{ prop }}: {{ product[prop] }}</slot>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["product"]
};
</script>
