<template>
  <div class="row">
    <div class="col m6">
      <h3 class="card-panel grey white-text center-align">Left View</h3>
      <router-view name="left" class="card-panel grey lighten-4"/>
    </div>
    <div class="col m6">
      <h3 class="card-panel grey white-text center-align">Right View</h3>
      <router-view name="right" class="card-panel grey lighten-4"/>
    </div>
  </div>
</template>
