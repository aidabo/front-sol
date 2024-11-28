<!-- src/components/GhostAuth.vue -->
<template>
  <div>
    <h2>Sign In or Sign Up</h2>
    <div id="ghost-portal"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { environment } from "@/common/environment";

// const ghostApiUrl = environment().env.ghost_api_url;

// onMounted(() => {
//   const portal = new Portal({
//     url: ghostApiUrl,
//     container: "#ghost-portal",
//     events: {
//       onSignedIn: (user:any) => {
//         console.log("User signed in:", user);
//         // Handle signed-in user here, e.g., store user data in Vuex or a local storage
//       },
//       onSignedOut: () => {
//         console.log("User signed out");
//         // Handle signed-out state here
//       },
//       onError: (error:any) => {
//         console.error("Error with Ghost Portal:", error);
//         // Handle errors here
//       },
//     },
//   });

//   // Initialize the portal
//   portal.init();
// });
</script>
