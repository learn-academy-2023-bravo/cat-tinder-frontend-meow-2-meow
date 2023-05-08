import { render, screen } from "@testing-library/react";
// import { MemoryRouter, Routes, Route } from 'react-router-dom';
import CatEdit from "../pages/CatEdit";
// import mockCats from '../mockCats';
import { BrowserRouter} from 'react-router-dom'

describe("<CatEdit />", () => {
  it("renders the edit cat form", () => {
    render(     
      <BrowserRouter>
        <CatEdit/>
      </BrowserRouter>
    )

    const nameInput=screen.getByRole("textbox", {name: /name/i})
    expect(nameInput).toBeInTheDocument()
    
    const ageInput=screen.getByRole("textbox", {name: /age/i})
    expect(ageInput).toBeInTheDocument()
    
    const genderInput=screen.getByRole("textbox", {name: /gender/i})
    expect(genderInput).toBeInTheDocument()
    
    const enjoysInput=screen.getByRole("textbox", {name: /enjoys/i})
    expect(enjoysInput).toBeInTheDocument()
    
    const imageInput=screen.getByRole("textbox", {name: /image/i})
    expect(imageInput).toBeInTheDocument()
  })  
})