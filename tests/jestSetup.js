import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const MOCKED_NOW = 1522689340;
Date.now = jest.fn(() => MOCKED_NOW);

Enzyme.configure({ adapter: new Adapter() });
global.shallow = shallow;
global.render = render;
global.mount = mount;

const {
  fetch,
  Headers,
  Request,
  Response,
} = require('whatwg-fetch');

global.Response = Response;
global.Request = Request;
global.Headers = Headers;
global.fetch = fetch;
