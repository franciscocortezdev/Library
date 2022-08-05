import React, { useState } from 'react'
import { NewBookInfo } from '../Types'
import { useNavigate } from 'react-router'
import { useAppContext } from '../Context/store'

export default function useFormBook () {
  const [title, setTitle] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const [cover, setCover] = useState<string>('')
  const [intro, setIntro] = useState<string>('')
  const [completed, setCompleted] = useState<boolean>(false)
  const [review, setReview] = useState<string>('')
  const navigate = useNavigate()
  const store = useAppContext()

  const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.currentTarget.name
    const value = e.currentTarget.value
    switch (name) {
      case 'title':
        setTitle(value)
        break
      case 'author':
        setAuthor(value)
        break
      case 'intro':
        setIntro(value)
        break
      case 'completed': {
        const element = e.target as HTMLInputElement
        setCompleted(element.checked)
        break
      }
      case 'review':
        setReview(value)
        break
    }
  }

  const handleCover = (e: React.ChangeEvent<HTMLInputElement>) => {
    const element = e.currentTarget
    if (element.files) {
      const file = element.files[0]

      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        if (reader.result) {
          setCover(reader.result.toString())
        }
      }
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newBook:NewBookInfo = {
      id: crypto.randomUUID(),
      title,
      author,
      cover,
      intro,
      completed,
      review
    }
    store.createItem(newBook)
    navigate('/')
  }

  return {
    states: { title, author, cover, intro, completed, review, handleChange, handleCover, handleSubmit }
  }
}
