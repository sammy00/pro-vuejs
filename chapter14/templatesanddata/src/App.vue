<template>
  <div class="container">
    <div id="outer-element" class="teal card-panel white-text" @click="handleClick">Outer Element
      <div id="middle-element" class="card-panel grey" @click="handleClick">Middle Element
        <div id="inner-element" class="card-panel light-blue" @click="handleClick">Inner Element</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  methods: {
    handleClick($event) {
      console.log(
        `handleClick target: ${$event.target.id}` +
          ` currentTarget: ${$event.currentTarget.id}`
      );
    }
  }
};
</script>