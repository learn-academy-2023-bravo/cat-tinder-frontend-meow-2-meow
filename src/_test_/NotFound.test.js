import { screen, render } from "@testing-library/react";
import NotFound from '../pages/NotFound'

describe('<NotFound/>', () => {
    it('it renders the home page for the user', () => {

        render(<NotFound/>)
        const element = screen.getByText(/No cat here/i)
        expect(element).toBeInTheDocument()
    })
})