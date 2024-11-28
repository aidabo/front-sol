<template>
  <div class="container m-auto">
    <div style="height: 40vmin; min-height: 360px; margin: auto;"  id="signup">
    </div>
    <div><span><button class="display-5" @click="loginTest">テスト</button></span></div>   
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { environment } from "@/common/environment";
import { setupGhostApi } from "@/api/signup/api";


const createSignupForm = () => {
  let e = document.getElementById("signup") as HTMLElement;
  let se: HTMLElement = document.createElement("script");
  se.setAttribute("type", "text/javascript");
  se.setAttribute(
    "src",
    //"https://cdn.jsdelivr.net/ghost/signup-form@~0.1/umd/signup-form.min.js"
    "/assets/signup/umd/signup-form.min.js"
  );
  se.setAttribute("data-background-color", "#08090c");
  se.setAttribute("data-text-color", "#FFFFFF");
  se.setAttribute("data-button-color", "#FF1A75");
  se.setAttribute("data-button-text-color", "#FFFFFF");
  se.setAttribute("data-title", "My Life...");
  se.setAttribute("data-description", "Thoughts, stories and ideas.");
  se.setAttribute("data-site", "http://127.0.0.1:2368/");
  se.setAttribute("async", "");
  se.setAttribute("data-label-1", "Signup form");
  se.setAttribute(
    "data-icon",
    "https://static.ghost.org/v4.0.0/images/ghost-orb-1.png"
  );
  e.appendChild(se);
};

const createPortal = () =>{
  let e = document.getElementById("signup") as HTMLElement;
  let se: HTMLElement = document.createElement("script");
  se.setAttribute("type", "text/javascript");
  se.setAttribute("defer", "");
  se.setAttribute(
    "src",
    //"https://unpkg.com/@tryghost/portal@latest/umd/portal.min.js"
    //"/assets/portal/umd/portal.min.js"
    "http://localhost:5368/portal"
  );
  se.setAttribute("data-ghost", environment().env.ghost_site_url);
  //se.setAttribute("data-ghost", "http://localhost:5173/");
  se.setAttribute("data-portal", "signup/monthly");
  se.setAttribute("data-key", environment().env.ghost_api_key);
  se.setAttribute("data-api", environment().env.ghost_api_url);
  se.setAttribute("data-autoRedirect", "true");
  //"http://localhost:2368/ghost/api/content/");
  // se.setAttribute("data-background-color", "#08090c");
  // se.setAttribute("data-text-color", "#FFFFFF");
  // se.setAttribute("data-button-color", "#FF1A75");
  // se.setAttribute("data-button-text-color", "#FFFFFF");
  // se.setAttribute("data-title", "My Life...");
  // se.setAttribute("data-description", "Thoughts, stories and ideas.");
  // se.setAttribute("data-site", "http://127.0.0.1:2368/");
  // se.setAttribute("async", "");
  // se.setAttribute("data-label-1", "Signup form");
  // se.setAttribute(
  //   "data-icon",
  //   "https://static.ghost.org/v4.0.0/images/ghost-orb-1.png"
  // );
  e.appendChild(se);
}

onMounted(() => {
  //createSignupForm();
  createPortal();
  //document.getElementById("signup-form")?.click();
});

const loginTest = async() =>{

  //http://localhost:2368/members/?token=IHTDJL5pDDOfhX0gFfxvKSAtflnZ_DBj&action=signin&r=http%3A%2F%2Flocalhost%3A5173%2F

  const ghost_site_url = environment().env.ghost_api_url;
  try {
    await new Promise(resolve => {
      setTimeout(async () => {
        const { getIntegrityToken } = setupGhostApi({ siteUrl: ghost_site_url });
        const response: any = await getIntegrityToken();
        if (response.status < 200 || response.status >= 300) {
          console.log("failed", response);
        }else if (response.ok) {
          console.log("Ok", response);
        }
        console.log("ghost signup result: ", response);
        resolve(response.ok);
      }, 500);
    });
  } catch (err) {
    console.log(err);
  }
};

</script>

<style scoped></style>
