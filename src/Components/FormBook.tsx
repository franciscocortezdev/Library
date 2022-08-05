import { proposForm } from '../Types'
import styled from 'styled-components'

const Form = styled.form`
  max-width: 800px;
  border: 2px solid #EAE3D2;
  padding: 20px 40px;
  border-top: none;
  border-radius: 0 0 8px 8px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`
const InputImage = styled.input`
  display: none;
`
const Image = styled.img`
  width: 300px;
  height: 450px;
  border-radius: 8px;
`
const ImagePlaceHolder = styled.div`
  width: 300px;
  height: 450px;
  border: 2px solid #fff;
  border-radius: 8px;
`
const LabelUpload = styled.label`
  font-size: 20px;
  font-weight: 600;
  padding: 10px 20px;
  color: #fff;
  
  border: 2px solid #fff;
  border-radius: 4px;
  margin: 0 auto;

  &:hover{
    box-shadow: 0px 0px 25px -5px #1C3879;
    cursor: pointer;
  }
`
const ContainerPicture = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-bottom: 20px;

`

const InputsForm = styled.input`
  font-size: 16px;
  font-weight: 600;
  padding: 4px 10px;
  color: #1C3879;
  width: 100%;
  border: none;
  border-radius: 4px;
  outline: none;
  margin-bottom: 10px;

  &:focus{
    outline: 2px solid #1C3879;
  }
`
const IntroInput = styled.textarea`
  font-size: 14px;
  color: #1C3879;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 305px;
  height: 150px;
  border: none;
  padding: 8px 10px;
  outline: none;
  border-radius: 8px;
  resize: vertical;
  margin-bottom: 10px;
`

const TitleLabels = styled.p`
  font-size: 20px;
  color: #fff;
  font-weight: 600;
  margin-bottom: 4px;
`

const BtnSaveBook = styled.input`
  font-size: 20px;
  font-weight: 600;
  padding: 10px 20px;
  color: #fff;
  background-color: #1C3879;
  border: none;
  border-radius: 4px;
  margin-top: 20px;
  &:hover{
    box-shadow: 0px 0px 25px -5px #1C3879;
    cursor: pointer;
  }
`
const LabelCheck = styled.label`
  font-size: 20px;
  color: #fff;
  font-weight: 600;
  padding-right: 35px;
  position: relative;
  display: inline-block;
  margin-bottom: 10px;

  &::after{
    content: '';
    border: 3px solid #fff;
    border-radius: 4px;
    width: 20px;
    height: 20px;
    position: absolute;
    right: 0;
    bottom: 0;
    display: grid;
    place-content: center;
    
  }
  
`
const InputCheck = styled.input`
  display: none;

  &:checked + label::after{
    content: '✔';
    color: #1C3879;
    background-color: #fff;
  }
`

export default function FormBook (props:proposForm) {
  const { title, author, cover, intro, completed, review, handleChange, handleCover, handleSubmit } = props.dt

  return (
    <>
       <Form onSubmit={handleSubmit}>
        <div>
          <div>
            <TitleLabels>Title</TitleLabels>
            <InputsForm type="text"
            name='title'
            onChange={handleChange}
            value={title}
            />

          </div>
          <div>
            <TitleLabels>Author</TitleLabels>
            <InputsForm type="text"
            name='author'
            onChange={handleChange}
            value={author}
            />

          </div>

          <div>
            <TitleLabels>Introduction</TitleLabels>
            <IntroInput
            name='intro'
            onChange={handleChange}
            value={intro}
            />

          </div>
          <div>

            <InputCheck type="checkbox"
            name='completed'
            id='completed'
            onChange={handleChange}
            checked={completed}
            />
            <LabelCheck htmlFor='completed'>Completed</LabelCheck>

          </div>
          <div>
            <TitleLabels>Review</TitleLabels>
            <InputsForm type="text"
            name='review'
            onChange={handleChange}
            value={review}
            />

          </div>
          <BtnSaveBook type="submit" value="Save Book" />

        </div>
          <ContainerPicture>
            {cover ? <Image src={cover} alt="cover"/> : <ImagePlaceHolder></ImagePlaceHolder>}
            <div>
              <LabelUpload htmlFor="cover">Upload Picture</LabelUpload>
              <InputImage type="file"
              name='cover'
              id='cover'
              onChange={handleCover}
              />
            </div>
          </ContainerPicture>
      </Form>
    </>
  )
}
