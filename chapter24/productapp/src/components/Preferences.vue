<template>
  <div>
    <div class="card-panel center" v-if="displayWarning">
      <h5>Are you sure?</h5>
      <button class="btn red" @click="doNavigation">Yes</button> &nbsp;
      <button class="btn red" @click="cancelNavigation">Cancel</button>
    </div>
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
  data() {
    return {
      displayWarning: false,
      navigationApproved: false,
      targetRoute: null
    };
  },
  computed: {
    ...mapState({
      primaryEdit: state => state.prefs.primaryEditButton,
      dangerDelete: state => state.prefs.dangerDeleteButton
    })
  },
  methods: {
    cancelNavigation() {
      this.navigationApproved = false;
      this.displayWarning = false;
    },
    doNavigation() {
      this.navigationApproved = true;
      this.$router.push(this.targetRoute.path);
    },
    setDangerDelete() {
      this.$store.commit("prefs/setDeleteButtonColor", !this.dangerDelete);
    },
    setPrimaryEdit() {
      this.$store.commit("prefs/setEditButtonColor", !this.primaryEdit);
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.navigationApproved) {
      next();
    } else {
      this.targetRoute = to;
      this.displayWarning = true;
      next(false);
    }
  }
};
</script>
