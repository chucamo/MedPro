import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

export default function Login({ navigation }) {
  return (
    <View>
      <Button
        onPress={()=>navigation.navigate("NavigationTag")}
        title="Đăng nhập"

      />
      <Button
        onPress={()=>navigation.navigate("Auth")}
        title="Đăng ký"

      />
    </View>
  )
}

const styles = StyleSheet.create({})