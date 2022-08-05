import { createContext, useContext, useState } from 'react'
import { NewBookInfo, StoreProps, ContextType } from '../Types'
import { INITIAL_STATE } from './Data'

const AppContext = createContext<ContextType>({
  items: [],
  createItem: (item) => {},
  getItem: (id) => {
    return {
      id: '',
      title: '',
      author: '',
      cover: '',
      intro: '',
      completed: false,
      review: ''
    }
  },
  updateItem: (item) => {}
})

const Store = ({ children }:StoreProps) => {
  const [items, setItems] = useState<Array<NewBookInfo>>(INITIAL_STATE)

  const createItem = (item:NewBookInfo) => {
    const temp:NewBookInfo[] = [...items]
    temp.unshift(item)

    setItems(temp)
  }

  const getItem = (id:string) => {
    const item = items.find((item) => item.id === id)
    return item!
  }

  const updateItem = (item:NewBookInfo) => {
    const index = items.findIndex((i) => i.id === item.id)

    const temp = [...items]
    temp[index] = { ...item }

    setItems(temp)
  }

  return (
    <AppContext.Provider value={{
      items,
      createItem,
      getItem,
      updateItem

    }} >
    {children}
    </AppContext.Provider>
  )
}

export default Store

export const useAppContext = () => {
  return useContext(AppContext)
}
