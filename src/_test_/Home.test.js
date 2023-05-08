import { screen, render } from "@testing-library/react";
import Home from '../pages/Home'

describe('<Home />', () => {
    it('it renders the home page for the user', () => {

        render(<Home/>)
        const element = screen.getByRole('heading', {name: /welcome to meet meow/i})
        expect(element).toBeInTheDocument()

        const p_home = screen.getByText(/are you tired of swiping left on all the basic tabbies and predictable persians\? well, look no further! cat tinder is here to help you find the purrrfect match\. whether you're a sassy siamese or a cool and collected russian blue, we've got the feline for you\. so don't be a scaredy\-cat, swipe right on cat tinder and find your meow\-mate today!/i)
        expect(p_home).toBeInTheDocument()

        // const element = screen.getByText("Welcome to Meet Meow")
        // expect(element).toBeInTheDocument()
        // screen.logTestingPlaygroundURL()
    })
})