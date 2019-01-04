<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper container">
        <ul>
          <li>
            <router-link to="/display" exact-active-class="red">Simple Display</router-link>
          </li>
          <li>
            <router-link to="/list" exact-active-class="red">List Maker</router-link>
          </li>
          <li>
            <router-link to="/numbers" exact-active-class="red">Numbers</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>