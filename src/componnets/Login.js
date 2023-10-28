import { StyleSheet, Text, View, Button, TextInput, Image, Alert,TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import axios from 'axios';
export default function Login({ navigation }) {
  const baseUrl = 'https://medpro.onrender.com/api/v1/auth/getAllUser';
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const onChangeUserHandler = (email) => {
    setEmail(email);
  };
  const onChangePasswordHandler = (password) => {
    setEmail(password);
  };
  
  console.log(email,password);
  return (
    <View style={styles.containerLogin}>
      <View style={styles.logoLogin}>
        <Text style={{ fontSize: 35, color: '#fff', fontWeight: '700', letterSpacing: 5 }}> medpro</Text>
      </View>
      <View style={styles.inputLogin}>
        <Text style={{ textAlign: 'center', paddingBottom: 25, color: '#fff', fontSize: 24, fontWeight: 'bold' }}>Đăng nhập</Text>
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <TextInput
            style={styles.inputUser}
            placeholder='Nhập vào email'
            onChangeText={(value)=>onChangeUserHandler(value)}
            value={email}
            placeholderTextColor={'#fff'}
            
          />
          <TextInput
            style={styles.inputUser}
            placeholder='Nhập vào mật khẩu'
            placeholderTextColor={'#fff'}
            onChangeText={(value)=>onChangePasswordHandler(value)}
            value={password}
          />

        </View>
      </View>
      <View style={styles.btn}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("NavigationTag")}>
        <Text style={{fontSize:18 , fontWeight:'bold'}}>Đăng nhập</Text>
      </TouchableOpacity>       
      </View>
      <View style={{width:'90%',flexDirection:'row',justifyContent:'flex-end',paddingTop:15}} > 
      <Text style={{fontSize:15,color:'#fff'}}>Bạn chưa có tài khoản?</Text>
        <Text  onPress={() => navigation.navigate("Auth")}  style={{fontSize:15,textDecorationLine:'underline',fontWeight:'700'}}> Đăng ký</Text>
      </View>

    </View>
  )
  
}

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: "#01B5F2",
  },
  logoLogin: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',

  },
  btnLogin: {
    flex: 1,
  },
  inputLogin: {
    width: '100%',
    color: 'while',
  },
  inputUser: {
    color: '#fff',
    height: 40,
    width: '80%',
   
    borderBottomWidth: 1,
    borderColor: '#fff',
    marginBottom: 20,
    padding: 10,
    fontSize:17,
  },
  button:{
    backgroundColor:'#fff',
    borderRadius:20,
    height:45,
    flexDirection:'column',
    justifyContent:'center',
    width:'80%',
    color:"#0093E1",
    alignItems:'center',
  },
  btn:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    
  },
  btnUser:{
   
  },
  lableAuth:{
    fontSize:18,
  },
 
})