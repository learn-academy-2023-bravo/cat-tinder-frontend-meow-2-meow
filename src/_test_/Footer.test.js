import {render, screen} from '@testing-library/react'
import Footer from '../components/Footer'
import { BrowserRouter } from 'react-router-dom'


describe("<Footer/>", () => {
    it("renders without error", () => {
        render(
        <BrowserRouter>
            <Footer/>
        </BrowserRouter>
        )  
        const indexLink = screen.getByText("Brought to you by Meow 2 Meow")
        expect(indexLink).toBeInTheDocument()
    })
} )