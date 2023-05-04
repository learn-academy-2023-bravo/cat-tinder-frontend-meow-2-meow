import {render, screen} from "@testing-library/react"
import CatNew from "../pages/CatNew"
import { BrowserRouter} from 'react-router-dom'

describe("<CatNew/>", () => {
  it("renders the new cat form", () => {
    render(
      <BrowserRouter>
        <CatNew/>
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
    // it("a form with entries for name, age, gender, enjoys, image", () => {
    //   const formName=screen.queryByLabelText('Label', {name: /name/i})
    //   expect(formName.getAttribute("For")).toEqual("Name")
    //   screen.logTestingPlaygroundURL()
    // })

})