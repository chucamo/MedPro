
import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import Login from '../componnets/Login'
export default function Account({navigation}) {
  return (
    <View>
      <Button
       onPress={()=>navigation.navigate(Login)}
        title="Đăng xuất"
        
      />
    </View>
  )
}

const styles = StyleSheet.create({})