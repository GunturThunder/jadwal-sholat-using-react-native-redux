import React, { Component } from 'react'
import { View,Text } from 'react-native'
import store from './src/components/redux/store'
import { Provider } from 'react-redux'

import Home from './src/components/screen/Home/Home'
import Footer from './src/components/screen/Home/Footer'
// import Test from './src/components/screen/Home/Test'

function App(){
  return(
    <Provider store={store}>
      <Home />
      {/* <Footer /> */}
    </Provider>
  )
}

export default App