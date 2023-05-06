import { screen, render } from "@testing-library/react";
import NotFound from '../pages/NotFound'

describe('<NotFound/>', () => {
    it('it renders the not found page for the user', () => {

        render(<NotFound/>)
        const element = screen.getByText(/no cat here/i)
        expect(element).toBeInTheDocument()
    })
})