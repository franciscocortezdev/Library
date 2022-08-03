
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
