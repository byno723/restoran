import React, {useEffect, useState} from 'react';
import {Alert, Button, Image, StyleSheet, Text, View} from 'react-native';
import Fire from '../../config/Fire';
import {getData} from '../../utils';

export default function index({navigation}) {
  const [profile, setProfile] = useState({
    fullname: '',
  });
  useEffect(() => {
    //membaca dari local storage
    getData('user').then((res) => {
      const data = res;
      setProfile(data);
    });
  });
  //logout
  const Logout = () => {
    Fire.auth()
      .signOut()
      .then(() => {
        navigation.replace('Register');
      })
      .catch((err) => {
        Alert.alert('Gagal !', err.message);
      });
  };
  return (
    <View style={styles.page}>
      <View style={styles.profile}>
        <Image
          source={{
            uri: 'https://api.adorable.io/avatars/285/abott@adorable.png',
          }}
          style={styles.avatar}
        />
        <Text style={styles.nama}>{profile.fullname}</Text>
      </View>

      <Button title="Logout" onPress={Logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  nama: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft: 16,
  },
  profile: {
    flexDirection: 'row',
    padding: 20,
  },
});
