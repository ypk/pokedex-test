import { render, screen, cleanup } from "@testing-library/react";
import PokeList from "./index";

afterEach(cleanup)

describe("Testing <PokeList />", () => {
    describe("renders without items", () => {
        it("should match snapshot", () => {
            const component = render(<PokeList listItems={[]} />);
            expect(component.asFragment()).toMatchSnapshot();
        });

        describe("rendering list functionality", () => {
            it("renders pokemon card", () => {
                render(<PokeList listItems={[{ "name": "pikachu", "height": 4, "weight": 60, "abilities": ["static", "lightning-rod"], "types": ["electric"] }]} />);
                const linkElement = screen.getByRole("link");
                expect(linkElement).toBeInTheDocument();
            });

            it("renders pokemon details correctly", () => {
                render(<PokeList listItems={[{ "name": "pikachu", "height": 4, "weight": 60, "abilities": ["static", "lightning-rod"], "types": ["electric"] }]} />);
                const linkElement = screen.getByRole("link");
                expect(linkElement).toHaveTextContent("Height4");
                expect(linkElement).toHaveTextContent("lightning-rod");
                expect(linkElement).toHaveAttribute("href", "https://pokemondb.net/pokedex/pikachu");
            });
        });

        describe("rendering empty list functionality", () => {
            it("renders pokemon not found message", () => {
                render(<PokeList listItems={[]} />);
                expect(screen.getByText("Not Found")).toBeInTheDocument();
                expect(screen.getByText("The pokemon you've searched is not found in the current set that's requested.")).toBeInTheDocument();
                expect(screen.getByText("Please refresh the page and try searching for a different pokemon.")).toBeInTheDocument();
            });

            it("renders refresh button", () => {
                render(<PokeList listItems={[]} />);
                const buttonElement = screen.getByRole("link");
                expect(buttonElement).toBeInTheDocument();
                expect(buttonElement).toHaveTextContent("Refresh Page");
                expect(buttonElement).toHaveAttribute("href", "/");
            });
        });
    });
});


