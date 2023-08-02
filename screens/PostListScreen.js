// Create a list screen that displays a list of posts associated with the logged in user
// Allow users to create new posts and comments
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Tags from '../components/Tags'

export default function PostListScreen({ navigation }) {
  const posts = {
    posts: [
      {
        id: 1,
        title: 'She was in a hurry.',
        body: 'She was in a hurry. /*... more data */  ',
        userId: 5,
        tags: ['french', 'magical', 'english'],
        reactions: 0,
      },
    ],
    total: 3,
    skip: 0,
    limit: 3,
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts.posts}
        keyExtractor={(post) => post.id}
        renderItem={(post) => {
          return (
            <TouchableOpacity
              style={styles.post}
              onPress={() => {
                navigation.navigate('PostDetail', { postId: post.item.id })
              }}
            >
              <View>
                <Text style={styles.title}>{post.item.title}</Text>
                <Text style={styles.body}>{post.item.body}</Text>
                <Tags tags={post.item.tags} />
              </View>
              <View>
                <Text>{post.item.reactions}</Text>
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

  post: {
    margin: 10,
    padding: 20,
    backgroundColor: '#DFE0E2',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 23,
  },
  body: {
    fontSize: 15,
    marginBottom: 15,
  },
})
