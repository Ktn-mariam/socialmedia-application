import { StyleSheet, Text, View } from 'react-native'

export default function UserDetailDisplay({ left, right }) {
  return (
    <View style={styles.container}>
      <Text style={styles.left}>{left}</Text>
      <Text style={styles.right}>{right}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  right: {
    fontStyle: 'italic',
    fontSize: 16,
  },
  left: {
    textTransform: 'capitalize',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
