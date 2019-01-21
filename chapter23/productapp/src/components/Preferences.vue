<template>
  <div>
    <div class="card teal white-text">
      <div class="card-content">
        <span class="card-title">Preferences</span>
        <div class="row">
          <label>
            <input type="checkbox" class="filled-in" v-model="primaryEdit">
            <span class="white-text">Primary Color for Edit Buttons</span>
          </label>
        </div>
        <div class="row">
          <label>
            <input class="filled-in" type="checkbox" v-model="dangerDelete">
            <span class="white-text">Danger Color for Delete Buttons</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    dangerDelete: {
      get() {
        return this.$store.state.prefs.dangerDeleteButton;
      },
      set(val) {
        this.$store.commit("prefs/setDeleteButtonColor", val);
      }
    },
    primaryEdit: {
      get() {
        return this.$store.state.prefs.primaryEditButton;
      },
      set(val) {
        this.$store.commit("prefs/setEditButtonColor", val);
      }
    }
  }
};
</script>
