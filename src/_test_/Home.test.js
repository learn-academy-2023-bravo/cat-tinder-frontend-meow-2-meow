import { screen, render } from "@testing-library/react";
import Home from '../pages/Home'

describe('<Home />', () => {
    it('it renders the home page for the user', () => {

        render(<Home/>)
        const element = screen.getByText("Welcome to Meet Meow")
        expect(element).toBeInTheDocument()
        screen.logTestingPlaygroundURL()
    })
})