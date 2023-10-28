import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function Home() {
  const baseUrl = 'https://medpro.onrender.com/api/v1/auth/getAllUser';
  const [users, setUsers] = useState([]);
  const [NAME, SETNAME] = useState('');


  useEffect(() => {
    axios.get(baseUrl)
      .then(function (response) {
        if (Array.isArray(response.data.users)) {
          setUsers(response.data.users);
        } else {
          console.log('API response is not an array:', response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <View>
      {users && users.map((user, index) => (
        <View key={index}>
          <Text>
            {user.name}
          </Text>
          <Image
            style={{ width: 40, height: 40 }}
            source={{ uri: user.avatar }} 
          />
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({})
