import React, { Component } from 'react'
import { View,Text } from 'react-native'
import store from './src/components/redux/store'
import { Provider } from 'react-redux'

import Home from './src/components/screen/Home/Home'
// import Test from './src/components/screen/Home/Test'

function App(){
  return(
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default App