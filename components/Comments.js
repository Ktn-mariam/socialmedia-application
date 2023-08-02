import { StatusBar } from 'expo-status-bar'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export default function Comments({ comments }) {
  console.log(comments)
  return (
    <FlatList
      data={comments}
      keyExtractor={(comment) => comment.id}
      renderItem={(comment) => {
        return (
          <View style={styles.comment}>
            <Text style={styles.username}>{comment.item.user.username}</Text>
            <Text style={styles.body}>{comment.item.body}</Text>
          </View>
        )
      }}
    />
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
