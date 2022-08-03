import { createContext, useContext, useState } from 'react'

type NewBookInfo = {
  id: string
  title: string,
  author: string,
  cover: string,
  intro: string,
  completed: boolean,
  review: string
}

interface StoreProps {
  children?: JSX.Element | JSX.Element[]

}

const AppContext = createContext({
  items: [] as NewBookInfo[],
  createItem: (item:NewBookInfo) => {},
  getItem: (id:string) => {},
  updateItem: (item:NewBookInfo) => {}
})
const Store = ({ children }:StoreProps) => {
  const [items, setItems] = useState<Array<NewBookInfo>>([])

  const createItem = (item:NewBookInfo) => {
    const temp:NewBookInfo[] = [...items]
    temp.push(item)

    setItems(temp)
  }

  const getItem = (id:string) => {
    const item = items.find((item) => item.id === id)
    return item
  }

  const updateItem = (item:NewBookInfo) => {
    const index = items.findIndex((i) => i.id === item.id)
    const temp = [...items]
    temp[index] = { ...item }
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
