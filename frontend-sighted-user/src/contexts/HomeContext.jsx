
import React, { createContext } from 'react'

export const HomeContext = createContext()

const HomeContextProvider = (props) => {

  return <HomeContext.Provider value={{}}>
    {props.children}
  </HomeContext.Provider>
}

export default HomeContextProvider