
'use client'
import { useState, useContext, createContext } from "react";

 const AppContext = createContext();

 export function AppProvider( {children}){
    const [appstate, setAppState] = useState ({isActive: true });
    return <AppContext.Provider value={appstate}>{children}</AppContext.Provider>;
 }

 export default function useAppState() {
    return useContext(AppContext);
 }