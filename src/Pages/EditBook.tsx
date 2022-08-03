import FormBook from '../Components/FormBook'
import { useAppContext } from '../Store/store'
import useEditForm from '../Hooks/useEditForm'
import { useParams } from 'react-router-dom'

export default function EditBook () {
  const store = useAppContext()
  const { IDbook } = useParams()

  const item = store.getItem(IDbook!)
  const data = useEditForm(item).states
  return (
    <FormBook dt={data} />
  )
}
