<template>
  <div id="editor-container" ref="editorContainer">
    <KoenigLexicalEditor></KoenigLexicalEditor>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { KoenigLexicalEditor  } from "@tryghost/koenig-lexical";

const editorContainer = ref(null);

onMounted(() => {
});

</script>

<style scoped>
#editor-container {
  height: 500px;
  border: 1px solid #ccc;
  padding: 10px;
  overflow: auto;
}
</style>
