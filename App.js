import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const PlaceholderImage = require('./assets/images/MalenaCindy.jpg');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image}/>
      </View>
      <Text style={{ color: '#fff', fontSize: 30 }}>Malena is the best!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008a65',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
