const { render,screen} = require("@testing-library/react")
const { default: Contact } = require("../Contact") 
import '@testing-library/jest-dom'

test('should load contact us component',()=>{
    render(<Contact />);

    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
})

test('should load button component',()=>{
    render(<Contact />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
})