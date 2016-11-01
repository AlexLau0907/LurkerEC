import React from 'react'
import configureStore from './store/configureStore'
const store = configureStore()

import AppContainer from './containers/AppContainer'
import { Provider } from 'react-redux'

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

export default App