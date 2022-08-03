import { useAppContext } from '../Store/store'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

export default function ViewBook () {
  const [editing, setEditing] = useState<boolean>(false)
  const store = useAppContext()
  const { IDbook } = useParams()
  const item = store.getItem(IDbook!)

  return (
    <>
        {editing
          ? (
          <h1>editing</h1>
            )
          : (
          <div>

          <p>Titulo: {item.title}</p>
          <p>Autor: {item.author}</p>
          <img src={item.cover} alt={item.title} width={200}/>
          <p>Introduccion: {item.intro}</p>
          <p>{item.completed ? 'Libro leido ✅' : 'Leyendo...📖'}</p>
          <p>Opinion: {item.review}</p>
        </div>
            )
      }

    </>
  )
}
