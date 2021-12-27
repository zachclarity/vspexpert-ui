import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {Simulate} from "react-dom/test-utils";


test('renders Ready to Helpq', () => {
  const component = render(<App />);
  const linkElement = component.getByText(/Ready to Help/i);
  expect(linkElement).toBeInTheDocument();
});

test('Button Click', () => {
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');

  useStateSpy.mockImplementation(() => [undefined, setState]);
  const component = render(<App />);
  const showFormButton = component.getByTestId('ask-button');
  Simulate.click(showFormButton);

});
