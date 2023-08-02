import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import LoginScreen from './screens/LoginScreen'
import UserProfileScreen from './screens/UserProfileScreen'
import PostListScreen from './screens/PostListScreen'
import PostDetailScreen from './screens/PostDetailScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import AddPostScreen from './screens/AddPostScreen'
import { useSelector } from 'react-redux'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  )
}

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#071013',
        tabBarInactiveTintColor: '#AAAAAA',
      }}
    >
      <Tab.Screen
        name="Posts"
        component={PostListScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons name="post" size={size} color={color} />
            )
          },
          headerShown: 'false',
        }}
      />
      <Tab.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="account"
                size={size}
                color={color}
              />
            )
          },
          headerShown: 'false',
        }}
      />
    </Tab.Navigator>
  )
}

function Navigation() {
  const token = useSelector((state) => state.tokenData.token)
  console.log(token)
  return (
    <NavigationContainer>
      {token !== null ? (
        <View style={styles.container}>
          <Stack.Navigator>
            <Stack.Screen
              name="BottomTab"
              component={BottomTab}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="PostDetail" component={PostDetailScreen} />
            <Stack.Screen name="AddPost" component={AddPostScreen} />
          </Stack.Navigator>
        </View>
      ) : (
        <AuthStack />
      )}
      <StatusBar style="dark" />
    </NavigationContainer>
  )
}
export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
