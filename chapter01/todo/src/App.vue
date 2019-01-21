<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper blue">
        <a href="#" class="brand-logo center">{{name}}'s To Do List</a>
      </div>
    </nav>
    <main class="container">
      <div class="row" v-if="0==filteredTasks.length">
        <div class="col s12 center">
          <b>Nothing to do. Hurrah!</b>
        </div>
      </div>
      <template v-else>
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
                <td>
                  <label>
                    <input class="filled-in" type="checkbox" v-model="t.done">
                    <span>{{t.done}}</span>
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
      <div class="row">
        <form class="col s12" action="#">
          <div class="col s10 input-field">
            <input
              type="text"
              class="input-field"
              v-model="newItemText"
              placeholder="description of new item"
            >
          </div>
          <div class="col s2 input-field">
            <button class="btn" v-on:click="addNewTodo">Add</button>
          </div>
        </form>
      </div>
      <div class="row">
        <form action="#" class="col s12">
          <div class="col s6">
            <label class="right">
              <input class="filled-in" type="checkbox" v-model="hideCompleted">
              <span>Hide completed tasks</span>
            </label>
          </div>
          <div class="col s6">
            <button class="btn orange" v-on:click="deleteCompleted">Delete Completed</button>
          </div>
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
      tasks: [],
      hideCompleted: true,
      newItemText: ""
    };
  },
  computed: {
    filteredTasks() {
      return this.hideCompleted ? this.tasks.filter(t => !t.done) : this.tasks;
    }
  },
  methods: {
    addNewTodo() {
      this.tasks.push({
        action: this.newItemText,
        done: false
      });
      this.storeData();
      this.newItemText = "";
    },
    storeData() {
      localStorage.setItem("todos", JSON.stringify(this.tasks));
    },
    deleteCompleted() {
      this.tasks = this.tasks.filter(t => !t.done);
      this.storeData();
    }
  },
  created() {
    let data = localStorage.getItem("todos");
    if (null != data) {
      this.tasks = JSON.parse(data);
    }
  }
};
</script>
