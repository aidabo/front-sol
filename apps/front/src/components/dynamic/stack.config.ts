import { PageResources } from "stackapp";
import { PageComponents } from "./autogenerated/PageComponents";
import { PageHandlers } from "./autogenerated/PageHandlers";
import { PageStores } from "./autogenerated/PageStores";

const config = {
  layoutStore: "TestLayoutStore",
  eventHandler: "TestHandler",
  dataStore: "TestDataStore",

  resources: {
    components: PageComponents,
    handlers: PageHandlers,
    stores: PageStores,
  } as PageResources,
};

export default config;