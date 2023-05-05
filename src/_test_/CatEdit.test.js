import {render, screen} from "@testing-library/react"
import CatEdit from "../pages/CatEdit"
import { BrowserRouter} from 'react-router-dom'

describe("<CatEdit/>", () => {
  it("renders the edit cat form", () => {
    render(
      <BrowserRouter>
        <CatEdit/>
      </BrowserRouter>
    )

    const nameInput=screen.getByRole('textbox', {name: "Name"})
    expect(nameInput).toBeInTheDocument()
    
    const ageInput=screen.getByRole('textbox', {name: "Age"})
    expect(ageInput).toBeInTheDocument()
    
    const genderInput=screen.getByRole('textbox', {name: "Gender"})
    expect(genderInput).toBeInTheDocument()
    
    const enjoysInput=screen.getByRole('textbox', {name: "Enjoys"})
    expect(enjoysInput).toBeInTheDocument()
    
    const imageInput=screen.getByRole('textbox', {name: "Image"})
    expect(imageInput).toBeInTheDocument()
  })  
})