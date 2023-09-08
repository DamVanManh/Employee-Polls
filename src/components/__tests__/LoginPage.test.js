import { createStore } from "redux";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../App";
import { users, questions } from "../../utils/mockdata";
describe("Test LoginPage", () => {
  it("Should match the snapshot", async () => {
    const storeMock = createStore(
      (state = { users, questions, user: null }) => state
    );
    jest.spyOn(storeMock, "dispatch").mockImplementation(() => {});

    const view = render(
      <Provider store={storeMock}>
        <Router>
          <App />
        </Router>
      </Provider>
    );

    expect(view).toMatchSnapshot();
  });

  it("Should show the LoginPage", async () => {
    const storeMock = createStore(
      (state = { users, questions, user: null }) => state
    );
    jest.spyOn(storeMock, "dispatch").mockImplementation(() => {});

    const view = render(
      <Provider store={storeMock}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
    await view.findByText(/Login/i);
  });
});
