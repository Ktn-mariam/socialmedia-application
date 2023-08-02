import { StyleSheet, Text, View, Image } from 'react-native'

export default function UserProfilePicture({ name, image }) {
  return (
    <View style={styles.profilePicContainer}>
      <Image
        style={styles.profilePic}
        source={{
          uri: image,
        }}
      />
      <Text style={styles.name}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  profilePicContainer: {
    backgroundColor: '#071013',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 30,
  },

  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'white',
  },

  name: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 15,
  },
})
