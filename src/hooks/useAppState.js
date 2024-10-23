
'use client'
import { useState, useContext, createContext } from "react";

 const AppContext = createContext();

 export function AppProvider( {children}){
    const [appstate, setAppState] = useState ({isActive: true, people:[]});

   function addPerson(personInfo){
      setAppState({...appstate, people:[...appstate.people, personInfo]})
   }

   const appValues = {...appstate, addPerson };



    return <AppContext.Provider value={appValues}>{children}</AppContext.Provider>;
 }

 export default function useAppState() {
    return useContext(AppContext);
 }