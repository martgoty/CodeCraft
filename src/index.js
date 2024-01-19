import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import 'macro-css'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.scss'
import App from './App'
import { store } from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router > {/*basename={process.env.PUBLIC_URL}*/}
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
)

