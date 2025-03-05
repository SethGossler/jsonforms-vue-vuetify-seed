<script setup lang="ts">
import { ref, provide } from "vue";
import { JsonForms, JsonFormsChangeEvent } from "@jsonforms/vue";
import { extendedVuetifyRenderers } from '@jsonforms/vue-vuetify';
import { defaultStyles, mergeStyles, vanillaRenderers } from "@jsonforms/vue-vanilla";
import { markRaw } from 'vue';

// Example Schemas and UI Schemas

// An example of a "Utility Breaker" schema and UI schema
import exschema from './schemas/breakerExSchema.json';
import exuischema from './schemas/breakerExUISchema.json';

// An example of an "Equipment Array" schema and UI schema
// import exschema from './schemas/equipmentExSchema.json';
// import exuischema from './schemas/equipmentExUIShema.json';

// The origina example schema and UI schema from the jsonforms-vue-seed repo
// import exschema from './schemas/originalSchema.json';
// import exuischema from './schemas/originalUISchema.json';

const renderers = Object.freeze([
  ...extendedVuetifyRenderers,
  // here you can add custom renderers
]);

const schema = exschema;
const uischema = exuischema;
const data = ref({});

const onChange = (event: JsonFormsChangeEvent) => {
  data.value = event.data;
};

// mergeStyles combines all classes from both styles definitions into one
const myStyles = mergeStyles(defaultStyles, { control: { label: "mylabel" } });

// Provide styles to child components
provide('styles', myStyles);
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>JSON Forms Vue 3 w/ Vuetify 3 Added <h5>Created for openenergysolutions.com ux testing</h5></h1>
  <div class="myform">
    <json-forms :data="data" :renderers="renderers" :schema="schema" :uischema="uischema" @change="onChange" />
  </div>
  <pre>{{ data }}</pre>
</template>

<style>
/* Delete?*/
@import '@jsonforms/vue-vuetify/lib/jsonforms-vue-vuetify.css';

img { 
  width: 50px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  margin-left: 120px;
  margin-right: 120px;
}

.mylabel {
  color: darkslategrey;
}

.vertical-layout {
  margin-left: 10px;
  margin-right: 10px;
}

.myform {
  width: 570px;
  margin: 10px auto;
  max-height: 80vh;
  overflow-x: hidden;
  overflow-y: scroll;
}

.text-area {
  min-height: 80px;
}

pre {
  background: lightcyan;
  padding: 10px;
  text-align: left;
  width: 100%;
}
</style>