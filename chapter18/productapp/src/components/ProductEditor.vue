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
      // TODO - process edited or created product
      console.log(`Edit Complete: ${JSON.stringify(this.product)}`);
      this.startCreate();
    },
    cancel() {
      this.product = {};
      this.editing = false;
    }
  },
  provide() {
    return {
      colors: {
        bg: "grey lighten-2",
        text: "red-text"
      }
    };
  }
};
</script>

<!--Listing 18-8. The Contents of the ProductEditor.vue-->