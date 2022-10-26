import Navbar from "./containers/Navbar/Navbar";
import Main from "./containers/Main/Main";
import BeerCardsMain from "./components/BeerCards/BeerCards";
import App from "./App";
import {render, screen, waitFor} from "@testing-library/react"
import BeerCards from "./components/BeerCards/BeerCards";
//import userEvent from "@testing-library/user-event"

describe('App' , () => {
  test('renders learn react link', () => {
    render(<App />);
    screen.debug();
});

});
it("should have Classic Range textbox", () => {
    render(<Navbar />);
    const classicRange = screen.getByRole("checkbox", {name: "Classic Range"});
    expect(classicRange).toBeInTheDocument();
})
it("should have ABV textbox", () => {
    render(<Navbar />);
    const abvCheckbox = screen.getByRole("checkbox", {name: "High ABV (>6.0%)"});
    expect(abvCheckbox).toBeInTheDocument();
})
it("should have PH textbox", () => {
    render(<Navbar />);
    const phCheckbox = screen.getByRole("checkbox", {name: "Acidic (ph<4)"});
    expect(phCheckbox).toBeInTheDocument();
})
it("should have Searchbox", () => {
    render(<Navbar />);
    const searchBox = screen.getByRole("textbox", {name: "searchbox"});
    expect(searchBox).toBeInTheDocument();
})

it("should display beers", async () => {
    render(<Main />);
    await waitFor(() => expect(screen.getByText("ABV")).toBeInTheDocument(), {
        timeout: 5000,
    });
    screen.getByRole("");
})
