import React, { useState } from 'react'
import { useAppContext } from '../Store/store'
import { Link } from 'react-router-dom'

type NewBookInfo = {
  id: string
  title: string,
  author: string,
  cover: string,
  intro: string,
  completed: boolean,
  review: string
}

export default function NewBook () {
  const [title, setTitle] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const [cover, setCover] = useState<string>('')
  const [intro, setIntro] = useState<string>('')
  const [completed, setCompleted] = useState<boolean>(false)
  const [review, setReview] = useState<string>('')

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
      id: crypto.randomUUID(),
      title,
      author,
      cover,
      intro,
      completed,
      review
    }
    store.createItem(newBook)
  }
  return (
    <div>
      <Link to="/">Home</Link>
      <form onSubmit={handleSubmit}>
        <div>
          <div>Title</div>
          <input type="text"
          name='title'
          onChange={handleChange}
          value={title}
          />

        </div>
        <div>
          <div>Author</div>
          <input type="text"
          name='author'
          onChange={handleChange}
          value={author}
          />

        </div>
        <div>
          <div>Cover</div>
          <input type="file"
          name='cover'
          onChange={handleCover}
          />
          <div>
            {cover && <img src={cover} alt="cover" width={200}/>}
          </div>
        </div>
        <div>
          <div>Introduction</div>
          <input type="text"
          name='intro'
          onChange={handleChange}
          value={intro}
          />

        </div>
        <div>
          <div>Completed</div>
          <input type="checkbox"
          name='completed'
          onChange={handleChange}
          // value={completed}
          checked={completed}
          />

        </div>
        <div>
          <div>Review</div>
          <input type="text"
          name='review'
          onChange={handleChange}
          value={review}
          />

        </div>
        <input type="submit" value="New Book" />
      </form>
    </div>
  )
}
