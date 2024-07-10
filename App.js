import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { useState } from 'react';


import Button from './components/Button';
import ImageViewer from './components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';

const PlaceholderImage = require('./assets/images/MalenaCindy.jpg');

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
        <View style={styles.imageContainer}>
        <Text style={{ color: '#fff', fontSize: 30, textAlign: 'center', paddingBottom: 10 }}>Cindy and Malena</Text>
        
        <Text style={styles.titleText}>About Us:</Text> 
        <Text style={styles.descriptionText}>Hello! We are both Snap Engineering Scholars who love to read, playing with dogs and eating sweets!</Text>

        <Text style={styles.titleText}>Malena: </Text> 
      
        <Button theme="primary" label="Snap"/>
        
        <Text style={styles.descriptionText}>Malena is the sweetest most awesome scholar here! She had a cute project with a frog design and brightens the room!</Text>

        <Text style={styles.titleText}>Cindy: </Text>
        <Text style={styles.descriptionText}>Cindy is the best teacher around. She has a kind smile and is extremely welcoming. You can tell by her actions that she has a big heart and it's always a pleasure to be around her!</Text>
      </View>
      </View>
      

      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008a65',
    alignItems: 'center',
    padding: 7
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  titleText: {
    color: '#fff', 
    fontSize: 20, 
    paddingBottom: 10
  },
  descriptionText: { 
    fontSize: 15, 
    paddingBottom: 10
  },
});
