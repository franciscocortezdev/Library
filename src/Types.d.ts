
export interface NewBookInfo {
  id: string
  title: string
  author: string
  cover: string
  intro: string
  completed: boolean
  review: string
}

export interface StoreProps {
  children?: JSX.Element | JSX.Element[]

}

export interface ContextType {
  items: NewBookInfo[]
  createItem: (item:NewBookInfo) => void
  getItem: (id:string) => NewBookInfo
  updateItem: (item:NewBookInfo) => void
};

export interface proposForm {
  dt:{
  title: string
  author: string
  cover: string
  intro: string
  completed: boolean
  review: string
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void
  handleCover: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
 }
}
