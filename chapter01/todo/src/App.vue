<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper blue">
        <a href="#" class="brand-logo center">{{name}}'s To Do List</a>
      </div>
    </nav>
    <main class="container">
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          <tr class="row" v-for="t in tasks" v-bind:key="t.action">
            <td>{{t.action}}</td>
            <td>{{t.done}}</td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      name: "Adam",
      tasks: [
        { action: "Buy Flowers", done: false },
        { action: "Get Shoes", done: false },
        { action: "Collect Tickets", done: true },
        { action: "Call Joe", done: false }
      ]
    };
  }
};
</script>
