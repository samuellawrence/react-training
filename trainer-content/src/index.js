import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import customerApp from './reducers/reducers'

import Layout from './component/Layout'

const store = createStore(customerApp)

ReactDOM.render(<Provider store={store}>
                <Layout />
                </Provider>, document.getElementById('root'));
