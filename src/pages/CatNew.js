import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CatNew = ({createCat}) => {
  
  const navigate = useNavigate()

  const [newCat, setNewCat] = useState({
    name:"",
    age: "",
    gender: "",
    enjoys: "",
    image: ""
  })

  const handleChange = (e) => {
    setNewCat({...newCat, [e.target.name]: e.target.value})
  }

  const handleClick = () => {
    createCat(newCat)
    navigate ("/catindex")
  }
    
  return(
    <>
      <Form 
      className="cat-form">
        <FormGroup>
          <Label for="cat-name">Name</Label>
          <Input
          id="cat-name"
          name="name"
          placeholder="Enter Cat Name"
          type="text"
          onChange={handleChange}
          value={newCat.name}
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
          value={newCat.age}
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
          value={newCat.gender}
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
          value={newCat.enjoys}
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
          value={newCat.image}
          />
        </FormGroup>
        <Button onClick={handleClick}>Submit</Button>
      </Form>
    </>
  )
}


export default CatNew