import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ListMenu} from '../../component';

export default function index({navigation}) {
  const [katalog, setKatalog] = useState(['']);
  useEffect(() => {
    //membaca dari local server
    getDataKatalog();
  }, []);

  //mendapatkan data katalogo
  const getDataKatalog = () => {
    Axios.get('http://10.0.2.2:3004/katalog').then((res) => {
      console.log('hasil', res);
      setKatalog(res.data);
    });
  };

  return (
    <View style={styles.page}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Text style={styles.title}>Katalog Menu</Text>
        {katalog.map((item) => {
          return (
            <ListMenu
              key={item.id}
              namamenu={item.namamenu}
              harga={item.harga}
              gambar={{
                uri: 'https://api.adorable.io/avatars/285/abott@adorable.png',
              }}
              onPress={() => navigation.navigate('Checkout', item)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  title: {
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
