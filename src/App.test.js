import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('default rendering', () => {
  const { getByTestId, queryByText } = render(<App />);

  expect(getByTestId("weightInput").value).toEqual("100");
  expect(getByTestId("repInput").value).toEqual("1");
  expect(getByTestId("unitSelect").value).toEqual("kg");

  expect(queryByText("100kg")).toBeInTheDocument();
  expect(queryByText("94kg")).toBeInTheDocument();
});

test('default settings', () => {
  const { getByTestId, getByTitle } = render(<App />);

  fireEvent.click(getByTitle("Settings"));
  expect(getByTestId("formulaSelect").value).toEqual("Epley");
  expect(getByTestId("rowsInput").value).toEqual("15");
});

test('change weight', () => {
  const { getByTestId, queryByText } = render(<App />);

  fireEvent.change(getByTestId("weightInput"), {
    target: {
      value: "1000"
    }
  });

  expect(getByTestId("repInput").value).toEqual("1");
  expect(getByTestId("unitSelect").value).toEqual("kg");

  expect(queryByText("1000kg")).toBeInTheDocument();
  expect(queryByText("938kg")).toBeInTheDocument();
});

test('change unit', () => {
  const { getByTestId, queryByText } = render(<App />);

  fireEvent.change(getByTestId("unitSelect"), {
    target: {
      value: "lb"
    }
  });

  expect(getByTestId("weightInput").value).toEqual("100");
  expect(getByTestId("repInput").value).toEqual("1");

  expect(queryByText("100lb")).toBeInTheDocument();
  expect(queryByText("94lb")).toBeInTheDocument();
});

test('change formula', () => {
  const { getByTestId, getByTitle, queryByText } = render(<App />);

  fireEvent.click(getByTitle("Settings"));
  fireEvent.change(getByTestId("formulaSelect"), {
    target: {
      value: "Brzycki"
    }
  });

  expect(queryByText("100kg")).toBeInTheDocument();
  expect(queryByText("97kg")).toBeInTheDocument();
});

test('change rows', () => {
  const { getByTestId, getByTitle, queryByText } = render(<App />);

  expect(queryByText("67kg")).toBeInTheDocument();

  fireEvent.click(getByTitle("Settings"));
  fireEvent.change(getByTestId("rowsInput"), {
    target: {
      value: "10"
    }
  });

  expect(queryByText("67kg")).not.toBeInTheDocument();
});
