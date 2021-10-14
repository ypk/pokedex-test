import { render, cleanup } from "@testing-library/react";

import Footer from "./index";
import { GetYear } from "../../../helpers";

afterEach(cleanup)

describe("Testing <Footer />", () => {
    describe("renders without items", () => {
        it("should match snapshot", () => {
            const component = render(<Footer />);
            expect(component.asFragment()).toMatchSnapshot();
        });

        describe("rendering footer functionality", () => {
            it("renders footer", () => {
                const currentYear = GetYear();
                const footerText = `© ${currentYear}, ypk. Everythingisopen-sourced.`;
                const { container } = render(<Footer />);
                expect(container).toBeInTheDocument();
                expect(container.textContent.replace(/ /ig, "")).toBe(footerText)
            });
        });

        describe("testing GetYear <-> replace here if test fails", () => {
            it("returns current year", () => {
                const currentYear = GetYear();
                expect(currentYear).toBe(2021)
            });
        });
    });
});


