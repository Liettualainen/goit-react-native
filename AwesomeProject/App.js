import { StatusBar } from 'expo-status-bar';
import {Alert, ImageBackground, Platform, Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import LemonImage from './Images/lemon.jpg'

const image = { uri: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcThjLk58LTqhPAO-hOR-szqaGfl0HCqsQJgHcAR3yjA0YALwpzn3wZTrbIIt2fWMk2Z' };

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}> 
      <Text>Open up App.js to start working on your app!</Text>
      <Text style={styles.title}>Yes JSdS</Text>
      <Text>Yes JSS</Text>
      <Text>Yes JSSd</Text>
      <Text>Yes Jshhhhss</Text>
      <Image 
         style={styles.tinyLogo}
        source={
         LemonImage
        //  {uri: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcThjLk58LTqhPAO-hOR-szqaGfl0HCqsQJgHcAR3yjA0YALwpzn3wZTrbIIt2fWMk2Z'},
        }
      />
      <Image 
        style={styles.tinyLogo}
        source={{ uri: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcThjLk58LTqhPAO-hOR-szqaGfl0HCqsQJgHcAR3yjA0YALwpzn3wZTrbIIt2fWMk2Z' }}
        
      />

      <TextInput style={styles.inputForm} />
      <Button
        title="Learn More"
          color="#841584"
          onPress={() => Alert.alert('Button pressed')}
      />
      <StatusBar  />
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
       backgroundColor: '#000000'
    },
      android: {
        backgroundColor: '#fff'
      },
    }),
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  inputForm: {
    marginBottom: 16,
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    width: 200,
  },
  button: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    width: 200,
  },
    tinyLogo: {
    width: 150,
    height: 150,
  },
    image: {
    flex: 1,
      justifyContent: 'center',
       alignItems: 'center',
  },
});
