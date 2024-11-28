import { markRaw, defineAsyncComponent } from "vue";
import {
  ComponentOption,
} from "stackapp";

export const component = () =>
  markRaw(
    defineAsyncComponent(() => import("@/components/samples/FormKitSummary.vue"))
  );

/**
 * CAN NOT use withDefaults, defineProps etc. compiler-hint helper
 * @returns
 */
export const props = (): ComponentOption => {
  return {
    cname: "formkitsummary",
    description: "Drag me Formkit Example",
    data: {},
  };
};
