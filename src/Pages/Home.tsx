import { useAppContext } from '../Store/store'
import { Link } from 'react-router-dom'

export default function Home () {
  const store = useAppContext()

  return (
    <div>
      <Link to="/create">Create Book</Link>
      {store.items.map((item) => (
        <>
          <div key={item.id}>{item.title}</div>
          <div key={item.id}>{item.author}</div>
          <img key={item.id} src={item.cover} alt={item.id} width={200}/>
          <div key={item.id}>{item.intro}</div>
          <input key={item.id} type="checkbox" checked={item.completed} />
          <div key={item.id}>{item.review}</div>
        </>
      ))}
    </div>
  )
}
