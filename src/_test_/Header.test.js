import {render, screen} from '@testing-library/react'
import Header from '../components/Header'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

describe("<Header/>", () => {
    it("renders without error", () => {
        render(
        <BrowserRouter>
            <Header/>
        </BrowserRouter>
        )  
        const indexLink = screen.getByText(/Meet all of the Purr Friends/i)
        expect(indexLink).toBeInTheDocument()
    })
    it("Header has clickable links", () => {
        render(
            <BrowserRouter>
             <Header/>
            </BrowserRouter>
        )
        userEvent.click(screen.getByText(/Meet all of the Purr Friends/i))
        expect(screen.getByText(/Meet all of the Purr Friends/)).toBeInTheDocument()
    })
} )