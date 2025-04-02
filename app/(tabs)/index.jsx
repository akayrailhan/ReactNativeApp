import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import image from '@/assets/images/barcelona-cathedral.jpeg' // Dosya yolu doğru mu kontrol et

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.background} resizeMode="cover">
        <Text style={styles.text}>Coffee App</Text>
      </ImageBackground>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
})

