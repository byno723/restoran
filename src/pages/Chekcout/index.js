import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {ListCheckout} from '../../component';
import {getData, setDate} from '../../utils';

export default function index({route, navigation}) {
  // parameter ditangkap menggunakan props route
  const item = route.params;

  const [qty, setQty] = useState('');
  const [status] = useState('Belum Bayar');
  const [profile, setProfile] = useState({});

  useEffect(() => {
    //membaca dari local server
    getDataUserFromLocal();
  }, []);

  //fungsi data local
  const getDataUserFromLocal = () => {
    getData('user').then((res) => {
      setProfile(res);
    });
  };

  const Submit = () => {
    const iduser = profile.id;
    const idkatalog = item.id;
    const data = {
      iduser,
      idkatalog,
      qty,
      status,
    };
    Axios.post('http://10.0.2.2:3004/pemesanan', data).then((res) => {
      console.log('result', res);
      setQty('');
      navigation.navigate('Cart');
    });
  };

  return (
    <View>
      <ListCheckout
        namamenu={item.namamenu}
        harga={item.harga}
        gambar={{uri: 'https://api.adorable.io/avatars/285/abott@adorasle.png'}}
        value={qty}
        onChangeText={(value) => setQty(value)}
      />
      <View style={styles.descbutton}>
        <Button title="Beli" onPress={Submit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  descbutton: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});
