import {render} from '@testing-library/react';
import { Provider } from 'react-redux';
import {StaticRouter} from "react-router-dom/server"

import appReduxStore from '../../utils/AppReduxStore';
import Header from "../../components/Header";

test("Should load the Food Villa Logo", () =>{
    const header = render(<StaticRouter>
                                    <Provider store ={appReduxStore}>
                                                        <Header/>
                                                    </Provider>
                          </StaticRouter>);
    console.log(header);
})