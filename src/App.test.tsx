import React from "react";
import { render, screen } from "@testing-library/react/pure";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("should add new upvote on click of add button", () => {
  render(<App />);
  const addListItemButton = screen.getByRole("button", {
    name: "Add upvote button",
  });
  expect(addListItemButton).toBeInTheDocument();

  userEvent.click(addListItemButton);
  userEvent.click(addListItemButton);
  userEvent.click(addListItemButton);

  expect(
    screen.getAllByRole("button", { name: "Upvote button" }).length
  ).toEqual(3);
});

test("should update upvote selected state on click", () => {
  const firstUpvoteButton = screen.getAllByRole("button", {
    name: "Upvote button",
  })[0];
  expect(firstUpvoteButton).not.toHaveClass("selected");

  userEvent.click(firstUpvoteButton);
  expect(firstUpvoteButton).toHaveClass("selected");
});
