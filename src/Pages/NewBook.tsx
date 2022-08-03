import FormBook from '../Components/FormBook'
import useFormBook from '../Hooks/useFormBook'

export default function NewBook () {
  return (
    <div>
      <FormBook dt={useFormBook().states} />

    </div>
  )
}
