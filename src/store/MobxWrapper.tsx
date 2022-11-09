import React, {createContext, FC, ReactElement} from "react";
import {store, Store} from "./store";

export const StoreContext = createContext<Store>({} as Store)

interface IMobxWrapper {
    children: ReactElement
}

const MobxWrapper: FC<IMobxWrapper> = ({children}) => {
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )
}

export default MobxWrapper
