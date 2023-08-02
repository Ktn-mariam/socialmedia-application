import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import LoginScreen from './screens/LoginScreen'
import UserProfileScreen from './screens/UserProfileScreen'
import PostListScreen from './screens/PostListScreen'
import PostDetailScreen from './screens/PostDetailScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name="Posts" component={PostListScreen} />
          <Stack.Screen name="UserProfile" component={UserProfileScreen} />
          <Stack.Screen name="PostDetail" component={PostDetailScreen} />
          {/* <LoginScreen /> */}
          {/* <UserProfileScreen /> */}
          {/* <PostListScreen /> */}
          {/* <PostDetailScreen /> */}
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#E5E5E5',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})
