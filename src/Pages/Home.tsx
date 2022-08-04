import { useAppContext } from '../Store/store'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ContainerBooks = styled.div`
  padding: 50px 0;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`
const BookView = styled(Link)`
  text-decoration: none;
  color: #1C3879;
  width: 500px;
  background-color: #EAE3D2;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;

  &:hover{
    box-shadow: 0px 0px 25px -5px #1C3879;
  }
`

const BookPincture = styled.img`
  height: 200px;
  min-width: 200px;
  border: 2px solid #607EAA;
  
`
const Title = styled.p`
  font-size: 30px;
  font-weight: 600;
  border-bottom: 4px solid #607EAA;
  margin-bottom: 15px;
`
const Author = styled.p`
  font-size: 20px;
  font-weight: 400;
  
`

export default function Home () {
  const store = useAppContext()

  return (
    <ContainerBooks>

      {store.items.map((item) => (
        <BookView to={'/view/' + item.id} key={item.id}>
          <div>
            <Title>{item.title}</Title>
            <Author>Author: {item.author}</Author>
          </div>
          <BookPincture src={item.cover} alt={item.id}/>
        </BookView>
      ))}
    </ContainerBooks>
  )
}
