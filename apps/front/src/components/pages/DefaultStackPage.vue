<template>
  <Suspense>
    <StackLayoutProvider :config="config">
      <StackPage :id="pageId"></StackPage>
    </StackLayoutProvider>
  </Suspense>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import "stackapp/dist/style.css"
import {
  StackLayoutProvider,
} from "stackapp";
import config from "@/components/dynamic/stack.config";

const props = defineProps({
  id: {
    type: String,
    default: "",
  },
});

const pageId = ref("");

const route = useRoute();

onMounted(() => {
  if (route.params.id) {
    pageId.value = (route.params as any).id;
  } else if (props.id) {
    pageId.value = props.id;
  }
});
</script>

<style>

.drag-to-here {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  color: rgba(0, 0, 0, 0.3);
  padding: 30px;
}

.page .grid-stack-item-content {
  text-align: center;
  /* background-color: #18bc9c;  */
  background-color: rgba(255, 255, 255, 0.95);
  border: lightgray solid 1px;
}

.page .editable .grid-stack-item-content {
  cursor: move;
}

.editable {
  background-color: rgba(240, 240, 240, 0.95);
}

.page .grid-stack-item-content {
  cursor: default;
}

.page .grid-stack-item-removing {
  opacity: 0.5;
}

/* make nested grid have slightly darker bg take almost all space (need some to tell them apart) so items inside can have similar to external size+margin */
.grid-stack > .grid-stack-item.grid-stack-sub-grid > .grid-stack-item-content {
  background: rgba(0, 0, 0, 0.1);
  inset: 0 2px;
}

.grid-stack.grid-stack-nested {
  background: none;
  /* background-color: red; */
  /* take entire space */
  position: absolute;
  inset: 0;
  /* TODO change top: if you have content in nested grid */
}
</style>
