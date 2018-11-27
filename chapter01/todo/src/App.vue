<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper blue">
        <a href="#" class="brand-logo center">{{name}}'s To Do List</a>
      </div>
    </nav>
    <main class="container">
      <div class="row">
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>
            <tr class="row" v-for="t in filteredTasks" v-bind:key="t.action">
              <td>{{t.action}}</td>
              <!--<td>{{t.done}}</td>-->
              <td>
                <form action="#">
                  <label>
                    <input type="checkbox" v-model="t.done">
                    <span>{{t.done}}</span>
                  </label>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="row">
        <form action="#" class="center">
          <label>
            <input type="checkbox" v-model="hideCompleted">
            <span>Hide completed tasks</span>
          </label>
        </form>
      </div>
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
      ],
      hideCompleted: true
    };
  },
  computed: {
    filteredTasks() {
      return this.hideCompleted ? this.tasks.filter(t => !t.done) : this.tasks;
    }
  }
};
</script>
