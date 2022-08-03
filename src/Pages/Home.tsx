import { useAppContext } from '../Store/store'
import { Link } from 'react-router-dom'

export default function Home () {
  const store = useAppContext()

  return (
    <div>

      {store.items.map((item) => (
        <Link to={'/view/' + item.id} key={item.id}>
          <div >{item.title}</div>
          <div>{item.author}</div>
          <img src={item.cover} alt={item.id} width={200}/>
        </Link>
      ))}
    </div>
  )
}
