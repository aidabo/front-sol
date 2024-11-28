
// auto-generated: PageStores.ts: Sun Oct 20 2024 23:35:30 GMT+0900 (Japan Standard Time)
//
import { reactive } from "vue";
import { PageStore } from "stackapp";
import { useTestDataStore } from "@/store/TestDataStore";
import { useTestLayoutStore } from "@/store/TestLayoutStore";

export const PageStores = reactive<PageStore[]>([

  {
        name: "TestDataStore",
        store: useTestDataStore,
  },

  {
        name: "TestLayoutStore",
        store: useTestLayoutStore,
  },
]);
