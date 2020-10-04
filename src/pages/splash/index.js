import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Fire from '../../config/Fire';

export default function index({navigation}) {
  useEffect(() => {
    const unSubscribe = Fire.auth().onAuthStateChanged((user) => {
      setTimeout(() => {
        if (user) {
          navigation.replace('Home');
        } else {
          navigation.replace('Register');
        }
      }, 3000);
    });
    //proses pembersihan
    return () => unSubscribe();
  }, [navigation]);
  return (
    <View style={styles.Page}>
      <Image
        source={{uri: 'https://api.adorable.io/avatars/285/abott@adorable.png'}}
        style={styles.avatar}
      />
      <Text style={styles.Title}>Restoran </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Page: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    fontSize: 20,
    color: 'blue',
    marginTop: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
