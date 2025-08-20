import React from 'react'
import { View } from 'react-native'
import Loader from '../ui/loader'
import Logo from '../ui/logo'

const SplashScreen = () => {
  return (
    <View>
      <Logo/>
      <Loader/>
    </View>
  )
}

export default SplashScreen