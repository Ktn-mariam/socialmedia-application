import { StyleSheet, Text, View, Image } from 'react-native'
import UserProfilePicture from '../components/UserProfilePicture'
import UserDetailDisplay from '../components/UserDetailDisplay'
import { StatusBar } from 'expo-status-bar'

export default function UserProfileScreen() {
  return (
    <View style={styles.container}>
      <UserProfilePicture />
      <View style={styles.details}>
        <UserDetailDisplay />
        <View style={styles.verticleLine}></View>
        <UserDetailDisplay />
        <View style={styles.verticleLine}></View>
        <UserDetailDisplay />
      </View>
      <StatusBar style="light" />
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
