import {useContext} from "react";
import {Store} from "./store";
import {StoreContext} from "./MobxWrapper";

export const useStore = (): Store => useContext(StoreContext)
