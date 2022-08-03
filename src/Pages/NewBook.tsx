import useFormBook from '../Hooks/useFormBook'
export default function NewBook () {
  const { title, author, cover, intro, completed, review } = useFormBook().states
  const { handleChange, handleCover, handleSubmit } = useFormBook().actions

  return (
    <div>

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
