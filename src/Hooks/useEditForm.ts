import React, { useState } from 'react'
import { NewBookInfo } from '../Types'
import { useNavigate } from 'react-router'
import { useAppContext } from '../Store/store'

export default function useEditForm ({ id, title, author, cover, intro, completed, review }:NewBookInfo) {
  const [tit, setTitle] = useState<string>(title)
  const [aut, setAuthor] = useState<string>(author)
  const [cov, setCover] = useState<string>(cover)
  const [int, setIntro] = useState<string>(intro)
  const [comp, setCompleted] = useState<boolean>(completed)
  const [rev, setReview] = useState<string>(review)
  const navigate = useNavigate()
  const store = useAppContext()

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
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
      case 'completed':
        setCompleted(e.currentTarget.checked)
        break
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
      id,
      title: tit,
      author: aut,
      cover: cov,
      intro: int,
      completed: comp,
      review: rev
    }
    store.updateItem(newBook)
    navigate('/view/' + id)
  }

  return {
    states: { title: tit, author: aut, cover: cov, intro: int, completed: comp, review: rev, handleChange, handleCover, handleSubmit }
  }
}
