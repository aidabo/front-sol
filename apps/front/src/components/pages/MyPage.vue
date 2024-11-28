<template>
  <button class="display-7" @click.prevent="testPost">addPost</button><br><br>

  <button class="display-7" @click.prevent="testPost2">addPost2</button>
</template>

<script setup>
import { useGhostAdminApi } from "@/api/ghostAdminApi";
import { useAdminApi }  from "@/api/adminApi"
import { environment } from "@/common/environment";

/**
 * Use AdminApi package
 */
const testPost2 = async () => {
    const { env } = environment();
    const siteUrl = env.ghost_site_url.replace(/\/$/, "");
    const adminApiKey = env.ghost_api_admin_key;
    const { post } = useAdminApi({siteUrl, adminApiKey});
    await post({ title: "Hello World from JS 0022" });
};

/**
 * Use Api
 */
const testPost = async() =>{
    const { post } = useGhostAdminApi();
    await post( [{ title: 'Hello World x0023' }])
}

</script>

<style scoped></style>
