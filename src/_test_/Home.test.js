import { screen, render } from "@testing-library/react";
import Home from '../pages/Home'

describe('<Home/>', () => {
    it('it renders the home page for the user', () => {

        render(<Home/>)
        const element = screen.getByText("Home Page")
        expect(element).toBeInTheDocument()
    })
})