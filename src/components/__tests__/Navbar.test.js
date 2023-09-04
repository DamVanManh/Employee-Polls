import { createStore } from "redux";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../App";
import { users, questions } from "../../utils/mockdata";

describe("Test Nav click", () => {
  it("Should move to AddQuestion page", async () => {
    const storeMock = createStore(
      (state = { users, questions, user: "sarahedo" }) => state
    );
    jest.spyOn(storeMock, "dispatch").mockImplementation(() => {});

    const view = render(
      <Provider store={storeMock}>
        <Router>
          <App />
        </Router>
      </Provider>
    );

    const link = screen.getByTestId("new-question-btn");
    fireEvent.click(link);
    await view.findByText(/Create Your Own Poll/i);
  });
});
