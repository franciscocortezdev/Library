import { useAppContext } from '../Store/store'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export default function ViewBook () {
  const store = useAppContext()
  const { IDbook } = useParams()
  const item = store.getItem(IDbook!)
  const navigate = useNavigate()

  const handleClicEdit = () => {
    navigate('/edit/' + IDbook)
  }

  return (
    <>
          <div>
          <p>Titulo: {item.title}</p>
          <p>Autor: {item.author}</p>
          <img src={item.cover} alt={item.title} width={200}/>
          <p>Introduccion: {item.intro}</p>
          <p>{item.completed ? 'Libro leido ✅' : 'Leyendo...📖'}</p>
          <p>Opinion: {item.review}</p>
        </div>

    <button onClick={handleClicEdit}>Edit Book</button>
    </>
  )
}
