<template>
  <div>
    <h4 class="teal white-text center-align">Preferences</h4>
    <div class="row">
      <input type="checkbox" :checked="primaryEdit" @input="setPrimaryEdit">
      <label>Primary Color for Edit Buttons</label>
    </div>
    <div class="row">
      <input type="checkbox" :checked="dangerDelete" @input="setDangerDelete">
      <label>Danger Color for Delete Buttons</label>
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
