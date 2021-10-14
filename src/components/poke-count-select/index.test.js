import { render, screen, fireEvent, cleanup, within } from "@testing-library/react";

import PokeCountSelect from "./index";

afterEach(cleanup)

const items = [
    10, 20, 50
];

const pokeCountObject = {
    selectedPokeCountValue: 20,
    handlePokeCountValueChange: jest.fn()
};

describe("Testing <PokeCountSelect />", () => {
    describe("renders without items", () => {
        it("should match snapshot", () => {
            const component = render(<PokeCountSelect {...pokeCountObject} />);
            expect(component.asFragment()).toMatchSnapshot();
        });

        describe("rendering dropdown functionality", () => {
            it("renders dropdown", () => {
                render(<PokeCountSelect {...pokeCountObject} />);
                const buttonElement = screen.getByRole("button");
                expect(buttonElement).toBeInTheDocument();
            });

            it("renders correct option passed in", () => {
                render(<PokeCountSelect {...pokeCountObject} />);
                const buttonElement = screen.getByRole("button");
                expect(buttonElement).toHaveTextContent("Displaying 20 Pokemons");
            });

            it("renders correct text for selected dropdown value", () => {
                pokeCountObject.selectedPokeCountValue = 10;
                render(<PokeCountSelect {...pokeCountObject} />);
                const buttonElement = screen.getByRole("button");
                expect(buttonElement).not.toHaveTextContent("Displaying 20 Pokemons");
                expect(buttonElement).toHaveTextContent("Displaying 10 Pokemons");
                pokeCountObject.selectedPokeCountValue = 20;
            });
        });

        describe("checking button click functionality", () => {
            it("renders dropdown items", async () => {
                render(<PokeCountSelect {...pokeCountObject} />);
                const buttonElement = screen.getByRole("button");
                fireEvent.click(buttonElement);
                const listItems = await screen.getAllByRole("listitem");
                expect(listItems).toHaveLength(3);
            });

            it("renders dropdown items correctly", async () => {
                render(<PokeCountSelect {...pokeCountObject} />);
                const buttonElement = screen.getByRole("button");
                fireEvent.click(buttonElement);
                const listItems = await screen.getAllByRole("listitem");
                listItems.forEach((item, index) => {
                    const { queryByText } = within(item);
                    expect(queryByText(items[index])).toBeInTheDocument()
                })
            });
        });
    });
});


