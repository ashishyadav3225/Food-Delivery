import { render,screen} from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from '../../utils/appstore'
import Header from '../Header'
import { BrowserRouter } from "react-router-dom";
import'@testing-library/jest-dom'

it("should render header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header/>
      </Provider>
    </BrowserRouter>
  );

//   const loginButton= screen.getByText('login');
  const loginButton= screen.getByRole('button');

  expect(loginButton).toBeInTheDocument();
});
