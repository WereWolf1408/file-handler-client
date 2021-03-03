import React, {createContext} from 'react';

export const FileHandlerContext = createContext('default value');

const FileHandlerProvider = ({children}: any) => {

  const mass = [
    {
      name: 'default value'
    }
  ]

  return (
    <FileHandlerContext.Provider value={mass}>
      {children}
    </FileHandlerContext.Provider>
  )
}

export {
  FileHandlerProvider
}