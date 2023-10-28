
import { StyleSheet, Text, View,Button, Image } from 'react-native'
import React from 'react'
import Login from '../componnets/Login'
export default function Account({navigation}) {
  return (
    <View>
     <Image
        style={styles.tinyLogo}
      />
      <Button
       onPress={()=>navigation.navigate(Login)}
        title="Đăng xuất"
        
      />
    </View>
  )
}

const styles = StyleSheet.create({

});