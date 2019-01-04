<template>
  <div class="container">
    <div class="row">
      <div class="col m6">
        <h3 class="grey white-text center-align">Left View</h3>
        <router-view name="left" class="card-panel grey"/>
      </div>
      <div class="col m6">
        <h3 class="grey white-text center-align">Right View</h3>
        <router-view name="right" class="card-panel grey"/>
      </div>
    </div>
  </div>
</template>
