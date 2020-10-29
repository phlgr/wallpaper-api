import React from "react";
import ReactDOM from "react-dom";
import FavoriteImage from "./FavoriteImage";
import { render, screen } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FavoriteImage photoId="UjD08DRW24E" />, div);
});

it("renders img UjD08DRW24E from unsplash", () => {
  render(<FavoriteImage photoId="UjD08DRW24E" />);
  const imageElement = screen.getByRole("img");
  expect(imageElement).toBeInTheDocument();
  expect(
    imageElement.src.startsWith("https://source.unsplash.com/UjD08DRW24E")
  ).toBeTruthy();
});

it("renders img k38v31SkZdo from unsplash", () => {
  render(<FavoriteImage photoId="k38v31SkZdo" />);
  const imageElement = screen.getByRole("img");
  expect(imageElement).toBeInTheDocument();
  expect(
    imageElement.src.startsWith("https://source.unsplash.com/k38v31SkZdo")
  ).toBeTruthy();
});
