<template>
  <div>
    <h4 class="card-panel teal white-text center-align">Preferences</h4>
    <div class="row">
      <label>
        <input type="checkbox" :checked="primaryEdit" @input="setPrimaryEdit">
        <span>Primary Color for Edit Buttons</span>
      </label>
    </div>
    <div class="row">
      <label>
        <input type="checkbox" :checked="dangerDelete" @input="setDangerDelete">
        <span>Danger Color for Delete Buttons</span>
      </label>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      primaryEdit: state => state.prefs.primaryEditButton,
      dangerDelete: state => state.prefs.dangerDeleteButton
    })
  },
  methods: {
    setPrimaryEdit() {
      this.$store.commit("prefs/setEditButtonColor", !this.primaryEdit);
    },
    setDangerDelete() {
      this.$store.commit("prefs/setDeleteButtonColor", !this.dangerDelete);
    }
  }
};
</script>
