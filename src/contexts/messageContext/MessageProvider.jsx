import { useState } from "react";
import { MessageContext } from "./messageContext";

export const MessageProvider = ({children}) => {


  // Dashboard
  const [adminNavMainActive, setAdminNavMainActive] = useState(false);
  const handleAdminNavMainToggle = () => setAdminNavMainActive(!adminNavMainActive);

  return(
    <MessageContext.Provider value={{adminNavMainActive, handleAdminNavMainToggle}}>
      {children}
    </MessageContext.Provider>
  );
};