
import React, { createContext } from 'react'

export const BlogContext = createContext()

const BlogContextProvider = (props) => {

  return <BlogContext.Provider value={{}}>
    {props.children}
  </BlogContext.Provider>
}

export default BlogContextProvider