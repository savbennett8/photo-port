import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from '..';

//after each test, remove any leftover memory data that could give false results
afterEach(cleanup);

describe('About component', () => {
    //baseline test to verify the component is rendering
    it('renders', () => {
        render(<About />);
    });

    //"test case" to compare versions of the DOM node structure
    it('matches snapshot DOM node structure', () => {
        //returns the snapshot of About component
        const { asFragment } = render(<About />);
        //compares expected w/ actual outcomes
        expect(asFragment()).toMatchSnapshot();
    });
})