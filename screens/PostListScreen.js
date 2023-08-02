// Create a list screen that displays a list of posts associated with the logged in user
// Allow users to create new posts and comments
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Tags from '../components/Tags'
import { AntDesign } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchPosts } from '../redux/posts'

export default function PostListScreen({ navigation }) {
  const dispatch = useDispatch()

  const posts = useSelector((state) => state.allPosts.posts)
  const status = useSelector((state) => state.allPosts.status)
  const error = useSelector((state) => state.allPosts.error)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  if (status === 'loading') {
    return <Text>Loading...</Text>
  }

  if (error === 'failed') {
    return <Text>Failed to fetch the data</Text>
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AddPost')
        }}
        style={styles.addPost}
      >
        <Text style={styles.addPostText}>ADD POST</Text>
      </TouchableOpacity>
      <FlatList
        data={posts}
        keyExtractor={(post) => post.id}
        renderItem={(post) => {
          return (
            <TouchableOpacity
              style={styles.post}
              onPress={() => {
                navigation.navigate('PostDetail', { postId: post.item.id })
              }}
            >
              <View style={styles.postDetail}>
                <Text style={styles.title}>{post.item.title}</Text>
                <Text
                  style={styles.body}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {post.item.body.length > 80
                    ? post.item.body.substring(0, 80) + '...'
                    : post.item.body}
                  {/* {post.item.body} */}
                </Text>
                <Tags tags={post.item.tags} />
              </View>
              <View style={styles.reaction}>
                <AntDesign name="heart" size={24} color="#EB5160" />
                <Text style={styles.reactionText}>{post.item.reactions}</Text>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },

  addPost: {
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#071013',
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
  },

  addPostText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  post: {
    margin: 10,
    padding: 20,
    backgroundColor: '#DFE0E2',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  postDetail: {
    width: '85%',
  },
  title: {
    fontSize: 23,
  },
  body: {
    fontSize: 15,
    marginBottom: 15,
  },

  reaction: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  reactionText: {
    fontSize: 15,
    color: '#AAAAAA',
  },
})
