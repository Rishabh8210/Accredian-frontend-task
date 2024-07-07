import React, { Children, createContext, useState } from "react";

const ReferContext = createContext();

export const ReferProvider = ({children}) => {
    const [isReferFormOpen, setReferForm] = useState(false)
    return (
        <ReferContext.Provider value = {{isReferFormOpen, setReferForm}}>
            {children}
        </ReferContext.Provider>
    )
}


export default ReferContext;
