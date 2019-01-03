<template>
  <div>
    <editor-field label="ID"/>
    <editor-field label="Name"/>
    <editor-field label="Price"/>
    <div>
      <button class="btn" @click="save">{{ editing ? "Save" : "Create" }}</button>
      <button class="btn grey" @click="cancel">Cancel</button>
    </div>
  </div>
</template>

<script>
import EditorField from "./EditorField";

export default {
  data: function() {
    return {
      editing: false,
      product: {
        id: 0,
        name: "",
        price: 0
      }
    };
  },
  components: { EditorField },
  inject: ["eventBus"],
  methods: {
    startEdit(product) {
      this.editing = true;
      this.product = {
        id: product.id,
        name: product.name,
        price: product.price
      };
    },
    startCreate() {
      this.editing = false;
      this.product = {
        id: 0,
        name: "",
        price: 0
      };
    },
    save() {
      this.eventBus.$emit("complete", this.product);
      this.startCreate();
      console.log(`Edit Complete: ${JSON.stringify(this.product)}`);
    },
    cancel() {
      this.product = {};
      this.editing = false;
    }
  },
  created() {
    this.eventBus.$on("create", this.startCreate);
    this.eventBus.$on("edit", this.startEdit);
  }
};
</script>

<!--Listing 18-8. The Contents of the ProductEditor.vue-->