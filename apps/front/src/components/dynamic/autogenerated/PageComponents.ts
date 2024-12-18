
// auto-generated: PageComponents.ts: Sun Oct 20 2024 23:35:30 GMT+0900 (Japan Standard Time)
//
import { reactive } from "vue";
import { PageComponent } from "stackapp";
import {
        component as arcoform_comp,
        props as arcoform_props,
} from "@/components/dynamic/component/arcoform";
import {
        component as formexample_comp,
        props as formexample_props,
} from "@/components/dynamic/component/formexample";
import {
        component as formkitschema_comp,
        props as formkitschema_props,
} from "@/components/dynamic/component/formkitschema";
import {
        component as formkitsummary_comp,
        props as formkitsummary_props,
} from "@/components/dynamic/component/formkitsummary";

export const PageComponents = reactive<PageComponent[]>([
  {
    props:
      typeof arcoform_props === "function" ? arcoform_props() : arcoform_props,
    component:
      typeof arcoform_comp === "function" ? arcoform_comp() : arcoform_comp,
  },

  {
    props:
      typeof formexample_props === "function" ? formexample_props() : formexample_props,
    component:
      typeof formexample_comp === "function" ? formexample_comp() : formexample_comp,
  },

  {
    props:
      typeof formkitschema_props === "function" ? formkitschema_props() : formkitschema_props,
    component:
      typeof formkitschema_comp === "function" ? formkitschema_comp() : formkitschema_comp,
  },

  {
    props:
      typeof formkitsummary_props === "function" ? formkitsummary_props() : formkitsummary_props,
    component:
      typeof formkitsummary_comp === "function" ? formkitsummary_comp() : formkitsummary_comp,
  },
]);
