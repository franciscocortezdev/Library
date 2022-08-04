import { useAppContext } from '../Store/store'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const BookDatailsContainer = styled.div`
  padding: 50px;
  max-width: 800px;
  max-height: 600px;
  color: #F9F5EB;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 0 auto;
  border: 2px solid #F9F5EB;
  border-top: none;
  border-radius: 0 0 8px 8px;
`
const BookDatailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
  
`
const BookDatailsTitle = styled.p`
  font-size: 30px;
`

const BookDatailsPicture = styled.img`
  width: 45%;
  border-radius: 8px;
`
const BookDatailsBtn = styled.button`
  font-size: 20px;
  font-weight: 600;
  padding: 10px 20px;
  color: #fff;
  background-color: #1C3879;
  border: none;
  border-radius: 4px;

  &:hover{
    box-shadow: 0px 0px 25px -5px #1C3879;
    cursor: pointer;
  }
  
`
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
        <BookDatailsContainer>
          <BookDatailsInfo>
          <BookDatailsTitle>Title: {item.title}</BookDatailsTitle>
          <p>Author: {item.author}</p>
          <p>Introduction: {item.intro}</p>
          <p>Status: {item.completed ? 'Libro leido ✅' : 'Leyendo...📖'}</p>
          <p>Review: {item.review}</p>
          <BookDatailsBtn onClick={handleClicEdit}>Edit Book</BookDatailsBtn>
          </BookDatailsInfo>
          <BookDatailsPicture src={item.cover} alt={item.title} />
        </BookDatailsContainer>

    </>
  )
}
