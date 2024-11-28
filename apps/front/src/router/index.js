import { defineAsyncComponent } from "vue";
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

const routes = [
  {    
    path: "",
    redirect: '/home' 
  },
  {    
    path: "/",
    redirect: '/home' 
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/components/pages/Top.vue"),
  },
  {
    path: "/mypage",
    name: "mypage",
    component: ()=>import("@/components/pages/MyPage.vue")
  },
  {
    path: "/pagelist",
    name: "pagelist",
    component: ()=>import("@/components/pages/DefaultStackPageList.vue"),
  },  
  {
    path: "/page/w/:id?",
    name: "createpage",
    component: ()=>import("@/components/pages/DefaultStackPageCreate.vue"),
  },
  {
    path: "/page/b/w/:id",
    name: "createpageback",
    component: ()=>import("@/components/pages/DefaultStackPageCreate.vue"),
  },
  {
    path: "/page/r/:id",
    name: "page",
    component: ()=>import("@/components/pages/DefaultStackPage.vue"),
  },
  {
    path: "/page/p/:id",
    name: "preview",
    component: ()=>import("@/components/pages/DefaultStackPage.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: ()=>import("@/components/pages/PortalPage.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: ()=>import("@/components/pages/CustomSignupPage.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: ()=>import("@/components/pages/EditorPage.vue"),
  },
  {
    path: "/:cacheAll(.*)*",
    redirect: { name: "member" },
  },
];

const router = createRouter({
  // mode: 'history',
  history: createWebHistory(),
  //createWebHashHistory(),
  routes,
  // force: true,
  linkExactActiveClass: "text-yellow-500",
});

export default router;
