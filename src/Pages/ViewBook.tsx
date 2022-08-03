import { useAppContext } from '../Store/store'
import { useParams } from 'react-router-dom'

export default function ViewBook () {
  const store = useAppContext()
  const { IDbook } = useParams()
  const item = store.getItem(IDbook!)

  return (
    <div>
      {item && (
        <p>{item.title}</p>
      )}
    </div>
  )
}
