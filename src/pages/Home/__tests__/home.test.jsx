import React from 'react'
import { render } from '@testing-library/react';
import Home from "../index";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";

test("should show beer 01", () => {
    const history = createMemoryHistory()

    const { getByTestId, getAllByTestId } = render(
        <Router history={history}>
            <Home/>
        </Router>
        );
    const x = getAllByTestId("beer-name-1")[0];
    expect(x).toHaveTextContent(/beer01/);

    const x2 = getByTestId("beer-name-2");
    expect(x2).toHaveTextContent(/beer02/);
});