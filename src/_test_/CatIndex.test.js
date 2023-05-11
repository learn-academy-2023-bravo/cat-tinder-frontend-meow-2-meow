import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import CatIndex from "../pages/CatIndex"
import mockCats from "../mockCats"

describe("<CatIndex/>", () => {
  it('renders cat cards', () => {
    render(
      <BrowserRouter>
        <CatIndex cats={mockCats}/>
      </BrowserRouter>
    )
    mockCats.forEach(cat => {
      const catName = screen.getByText(cat.name)
      expect(catName).toBeInTheDocument()
    })
  })
})