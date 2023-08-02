// Login screen for basic authorization (token authentication)
import { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import LoginButton from '../components/buttons/LoginButton'
import { useDispatch } from 'react-redux'
import { addToken } from '../redux/auth'

export default function LoginScreen() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [inValidLogin, setInValidLogin] = useState(false)

  const dispatch = useDispatch()

  const loginHandler = async () => {
    const data = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((res) => res.json())

    if (data.message && data.message === 'Invalid credentials') {
      setInValidLogin(true)
      return
    }
    dispatch(addToken({ token: data }))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Login Page</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(enteredText) => {
            setUsername(enteredText)
            setInValidLogin(false)
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(enteredText) => {
            setPassword(enteredText)
            setInValidLogin(false)
          }}
        />
      </View>
      {inValidLogin && (
        <Text style={styles.warning}>
          ERROR: Invalid username or/and password
        </Text>
      )}
      <LoginButton onPress={loginHandler}>Login</LoginButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginText: {
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 25,
  },

  input: {
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderRadius: 6,
    fontSize: 18,
    borderColor: '#C0C0C0',
    marginBottom: 10,
    backgroundColor: '#ffffff',
  },

  warning: {
    color: '#FF0000',
    marginBottom: 10,
  },
})
