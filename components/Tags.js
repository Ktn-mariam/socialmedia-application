import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export default function Tags({ tags }) {
  return (
    <View style={styles.container}>
      {tags.map((tag) => {
        return <Text style={styles.tag}>{`#${tag}`}</Text>
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#071013',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 5,
    marginTop: 5,
    color: '#ffff',
  },
})
