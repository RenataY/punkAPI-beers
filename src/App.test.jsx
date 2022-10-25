import Navbar from "./containers/Navbar/Navbar";
import {render, screen} from "@testing-library/react"
//import userEvent from "@testing-library/user-event"

it("should render the Navbar", () => {
    // triple A process

    // 1.Arrange
    render(<Navbar />);
    // 2.Act
    //const abvCheckbox = screen.getByRole("checkbox", {name: /High ABV (>6.0%)/i});
    const abvCheckbox = screen.getByRole("form", {name: /name/i});
    // 3.Assert
    expect(abvCheckbox).toBeInTheDocument();
})