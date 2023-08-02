// Create a list screen that displays a list of posts associated with the logged in user
// Allow users to create new posts and comments
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { useState } from 'react'
import Tags from '../components/Tags'
import { useDispatch } from 'react-redux'
import { addPost } from '../redux/posts'
import { useNavigation } from '@react-navigation/native'

export default function AddPostScreen() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [tags, setTags] = useState([])
  const [tag, setTag] = useState('')

  const dispatch = useDispatch()
  const navigation = useNavigation()
  const handleTagChange = (enteredText) => {
    if (enteredText.charAt(enteredText.length - 1) === ' ') {
      const trimmedTag = enteredText.trim()
      if (trimmedTag !== '') {
        setTags((prevTags) => [trimmedTag, ...prevTags])
        setTag('')
      }
    } else {
      setTag(enteredText)
    }
  }

  const addPostHandler = async () => {
    const post = {
      id: 200000,
      title,
      body,
      tags,
      userId: 9,
      reactions: 0,
    }
    dispatch(addPost({ post }))
    navigation.navigate('Posts')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.input}
        multiline={true}
        numberOfLines={2}
        onChangeText={(enteredText) => {
          setTitle(enteredText)
        }}
      />
      <Text style={styles.label}>Body:</Text>
      <TextInput
        style={styles.input}
        multiline={true}
        numberOfLines={10}
        onChangeText={(enteredText) => {
          setBody(enteredText)
        }}
      />
      <Text style={styles.label}>Tags:</Text>
      <TextInput
        style={styles.input}
        placeholder="Press Space to add a tag"
        value={tag}
        onChangeText={handleTagChange}
      />
      {tags.length > 0 && <Tags tags={tags} />}
      <TouchableOpacity onPress={addPostHandler} style={styles.addPost}>
        <Text style={styles.addPostText}>ADD POST</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },

  input: {
    backgroundColor: '#ffff',
    borderRadius: 10,
    padding: 10,
    borderRadius: 15,
    fontSize: 18,
    marginBottom: 10,
    marginHorizontal: 10,
    backgroundColor: '#ffffff',
  },

  label: {
    fontSize: 18,
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 5,
  },

  addPost: {
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#071013',
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 20,
  },

  addPostText: {
    color: '#fff',
    fontWeight: 'bold',
  },
})
