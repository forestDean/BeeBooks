// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Invoke the `configure` method
configure(
    // pass it an object
    {
      // The Object has a key titled `adapter` and a value that equals a new instantiated instance of the `Adapter` class.
      adapter: new Adapter()
    }
)  