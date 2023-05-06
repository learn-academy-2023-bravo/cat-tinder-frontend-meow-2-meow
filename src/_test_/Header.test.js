import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from '../components/Header'
import { BrowserRouter } from 'react-router-dom'

describe("<Header/>", () => {
    it("renders without error", () => {
        render(
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        )  
        const indexLink = screen.getByText(/meet all of our purrr Friends/i)
        expect(indexLink).toBeInTheDocument()
    })
    it("Header has clickable links", () => {
        render(
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        )
        userEvent.click(screen.getByText("Meet all of our Purrr Friends", {exact: false}))
        expect(screen.getByText("Meet all of our Purrr Friends")).toBeInTheDocument()
    })
})