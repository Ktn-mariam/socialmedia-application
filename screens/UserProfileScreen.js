import { StyleSheet, Text, View, Image } from 'react-native'
import UserProfilePicture from '../components/UserProfilePicture'
import UserDetailDisplay from '../components/UserDetailDisplay'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

export default function UserProfileScreen() {
  const token = useSelector((state) => state.tokenData.token)
  const [user, setUser] = useState({})
  console.log(token)

  useEffect(() => {
    const getUser = async () => {
      const user = await fetch(
        `https://dummyjson.com/users/${token.id}`,
      ).then((res) => res.json())
      setUser(user)
    }
    getUser()
  }, [token.id])

  return (
    <View style={styles.container}>
      <UserProfilePicture
        name={`${user.firstName} ${user.lastName}`}
        image={user.image}
      />
      <View style={styles.details}>
        <UserDetailDisplay left={'age'} right={user.age} />
        <View style={styles.verticleLine}></View>
        <UserDetailDisplay left={'email'} right={user.email} />
        <View style={styles.verticleLine}></View>
        <UserDetailDisplay left={'birthdate'} right={user.birthDate} />
        <View style={styles.verticleLine}></View>
        <UserDetailDisplay left={'address'} right={user.address.address} />
        <View style={styles.verticleLine}></View>
        <UserDetailDisplay left={'city'} right={user.address.city} />
        <View style={styles.verticleLine}></View>
        <UserDetailDisplay left={'university'} right={user.university} />
        <View style={styles.verticleLine}></View>
        <UserDetailDisplay left={'Workplace'} right={user.company.name} />
        <View style={styles.verticleLine}></View>
        <UserDetailDisplay left={'occupation'} right={user.company.title} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#E5E5E5',
  },
  details: {
    width: '100%',
  },
  verticleLine: {
    height: 1,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#909090',
  },
})
