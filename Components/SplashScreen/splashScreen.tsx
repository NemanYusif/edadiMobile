import { useRouter } from 'expo-router'
import React, { useEffect } from 'react'
import { View } from 'react-native'
import Loader from '../ui/loader'
import Logo from '../ui/logo'

const SplashScreen = () => {
  const router = useRouter()

  useEffect(()=>{
    const timer = setTimeout(()=>{
      router.replace('/homeScreen')
    },3000);

    return()=>clearTimeout(timer);
  },[])
  return (
    <View>
      <Logo/>
      <Loader/>
    </View>
  )
}

export default SplashScreen