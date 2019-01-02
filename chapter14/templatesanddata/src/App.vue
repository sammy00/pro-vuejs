<template>
  <div class="container">
    <div class="blue card-panel white-text">
      <h3 class="center-align">{{ message }}</h3>
    </div>
    <table class="striped">
      <thead>
        <tr>
          <th>Index</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(name, index) in names" v-bind:key="name">
          <td>{{index}}</td>
          <td>{{name}}</td>
          <td>
            <button
              class="btn btn-sm bg-primary white-text"
              v-on="buttonEvents"
              :data-name="name"
            >Select</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data: function() {
    return {
      buttonEvents: {
        click: this.handleClick,
        mousemove: this.handleMouseEvent,
        mouseleave: this.handleMouseEvent
      },
      counter: 0,
      message: "Ready",
      names: ["Kayak", "Lifejacket", "Soccer Ball", "Stadium"]
    };
  },
  methods: {
    handleClick($event) {
      let name = $event.target.dataset.name;
      this.message = `Select: ${name}`;
    },
    handleMouseEvent($event) {
      let name = $event.target.dataset.name;

      if ($event.type == "mousemove") {
        this.message = `Move in ${name} ${this.counter++}`;
      } else {
        this.counter = 0;
        this.message = "Ready";
      }
    }
  }
};
</script>