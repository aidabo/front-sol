<template>
  <Suspense>
    <StackLayoutProvider :config="config">
      <StackPageCreate></StackPageCreate>
    </StackLayoutProvider>
  </Suspense>
</template>

<script setup lang="ts">
import "stackapp/dist/style.css"
import { StackLayoutProvider } from "stackapp";
import config from "@/components/dynamic/stack.config";

</script>

<style scoped></style>
