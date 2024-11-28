
// auto-generated: PageHandlers.ts: Sun Oct 20 2024 23:35:30 GMT+0900 (Japan Standard Time)
//
import { reactive } from "vue";
import { PageHandler } from "stackapp";
import { useTestHandler } from "@/handlers/TestHandler";

export const PageHandlers = reactive<PageHandler[]>([

  {
        name: "TestHandler",
        handler: useTestHandler,
  },
]);
