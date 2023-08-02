// Implement a details screen that shows the comments and details related to the post (on clicking on any post)
// Allow users to create new posts and comments
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Comments from '../components/Comments'
import { useEffect, useState } from 'react'
import Tags from '../components/Tags'

export default function PostDetailScreen({ route }) {
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const postId = route.params.postId
    const getPosts = async () => {
      const post = await fetch(
        `https://dummyjson.com/posts/${postId}`,
      ).then((res) => res.json())
      setPost(post)
    }

    const getComments = async () => {
      const allCommentsOfPost = await fetch(
        `https://dummyjson.com/comments/post/${postId}`,
      ).then((res) => res.json())
      setComments(allCommentsOfPost)
      setIsLoading(false)
    }

    getPosts()
    getComments()
  }, [])

  if (isLoading) {
    return <Text>Loading...</Text>
  }

  return (
    <View style={styles.container}>
      <View style={styles.post}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.body}>{post.body}</Text>
        {post.tags && post.tags.length > 0 && <Tags tags={post.tags} />}
      </View>
      <View style={styles.comments}>
        <Text style={styles.commentTitle}>Comments</Text>
        <Comments comments={comments.comments} />
      </View>
      <StatusBar style="dark" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  post: {
    backgroundColor: '#DFE0E2',
    padding: 40,
    paddingBottom: 70,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#79313A',
  },
  body: {
    fontSize: 18,
    paddingBottom: 10,
  },
  comments: {
    marginVertical: 20,
    paddingHorizontal: 40,
    paddingBottom: 40,
  },
  commentTitle: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: '400',
  },
})
