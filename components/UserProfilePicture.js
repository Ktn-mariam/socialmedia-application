import { StyleSheet, Text, View, Image } from 'react-native'

export default function UserProfilePicture() {
  return (
    <View style={styles.profilePicContainer}>
      <Image
        style={styles.profilePic}
        source={{
          uri: 'https://robohash.org/hicveldicta.png?size=50x50&set=set1',
        }}
      />
      <Text style={styles.name}>Terry Medhurst</Text>
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
