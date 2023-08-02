import { StatusBar } from 'expo-status-bar'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export default function Comments({ comments }) {
  return (
    <View>
      {comments.map((comment, index) => {
        return (
          <View key={index} style={styles.comment}>
            <Text style={styles.username}>{comment.user.username}</Text>
            <Text style={styles.body}>{comment.body}</Text>
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  username: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 3,
  },
  body: {
    fontSize: 15,
  },
  comment: {
    marginBottom: 15,
  },
})
