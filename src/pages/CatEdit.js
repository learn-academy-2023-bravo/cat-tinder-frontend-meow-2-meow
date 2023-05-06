import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

const CatEdit = ({ cats, updateCat }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  let currentCat = cats?.find((cat) => cat.id === +id)

  const [editCat, setEditCat] = useState({
    name: currentCat.name,
    age: currentCat.age,
    gender: currentCat.gender,
    enjoys: currentCat.enjoys,
    image: currentCat.image
  })
  const handleChange = (e) => {
    setEditCat({ ...editCat, [e.target.name]: e.target.value })
  }
  const handleSubmit =() => {
    updateCat(editCat, currentCat.id)
    navigate(`/catshow/${id}`)
  }
  return(
    <>
      <Form className="cat-form">
        <FormGroup>
          <Label for="cat-name">Name</Label>
          <Input
          id="cat-name"
          name="name"
          placeholder="Enter Cat Name"
          type="text"
          onChange={handleChange}
          value={editCat.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="cat-age">Age</Label>
          <Input
          id="cat-age"
          name="age"
          placeholder="Enter Cat Age"
          type="text"
          onChange={handleChange}
          value={editCat.age}
          />
        </FormGroup>
        <FormGroup>
          <Label for="cat-gender">Gender</Label>
          <Input
          id="cat-gender"
          name="gender"
          placeholder="Enter Cat Gender"
          type="text"
          onChange={handleChange}
          value={editCat.gender}
          />
        </FormGroup>
        <FormGroup>
          <Label for="cat-enjoys">Enjoys</Label>
          <Input
          id="cat-enjoys"
          name="enjoys"
          placeholder="Enter Cat Enjoys"
          type="text"
          onChange={handleChange}
          value={editCat.enjoys}
          />
        </FormGroup>
        <FormGroup>
          <Label for="cat-image">Image</Label>
          <Input
          id="cat-image"
          name="image"
          placeholder="Enter Cat Image"
          type="text"
          onChange={handleChange}
          value={editCat.image}
          />
        </FormGroup>
        <Button onClick={handleSubmit}>
          Submit Updated Cat
        </Button>
        </Form>
    </>
  )
}

export default CatEdit