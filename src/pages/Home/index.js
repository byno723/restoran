import Axios from 'axios';
import React, {useState} from 'react';
import {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ListMenu, Menu} from '../../component';
import {getData} from '../../utils';

export default function index({navigation}) {
  const [profile, setProfile] = useState({
    fullname: '',
  });

  const [katalog, setKatalog] = useState(['']);

  useEffect(() => {
    //membaca dari local server
    getDataUserFromLocal();
    getDataKatalog();
  }, []);

  //mendapatkan data katalogo
  const getDataKatalog = () => {
    Axios.get('http://10.0.2.2:3004/katalog?_limit=5').then((res) => {
      console.log('hasil', res);
      setKatalog(res.data);
    });
  };

  //fungsi data local
  const getDataUserFromLocal = () => {
    getData('user').then((res) => {
      setProfile(res);
    });
  };

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profile}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Detailprofile')}>
            <Image
              source={{
                uri: 'https://api.adorable.io/avatars/285/abott@adorable.png',
              }}
              style={styles.avatar}
            />
          </TouchableOpacity>
          <Text style={styles.nama}>{profile.fullname}</Text>
        </View>
        <View style={{marginHorizontal: 17, marginTop: 8}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#2c5fbb',
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
              padding: 16,
            }}>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
              Dashboard
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 20,
              paddingBottom: 14,
              backgroundColor: '#2f65bd',
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
            }}>
            <Menu
              img={{
                uri:
                  'https://www.iconfinder.com/data/icons/online-shopping-flat-round/550/cart-512.png',
              }}
              title="Cart"
              onPress={() => navigation.navigate('Cart')}
            />
            <Menu
              img={{
                uri:
                  'https://freeiconshop.com/wp-content/uploads/edd/list-round-flat.png',
              }}
              title="List Menu"
              onPress={() => navigation.navigate('Katalog')}
            />
            <Menu
              img={{
                uri:
                  'https://cdn0.iconfinder.com/data/icons/ui-essential-filled-line/32/plus-add-navigation-menu-512.png',
              }}
              title="Tambah Menu"
              onPress={() => navigation.navigate('DaftarMenu')}
            />
          </View>
          <View style={styles.gap}>
            {katalog.map((item) => {
              return (
                <ListMenu
                  key={item.id}
                  namamenu={item.namamenu}
                  harga={item.harga}
                  onPress={() => navigation.navigate('Checkout', item)}
                  gambar={{
                    uri:
                      'https://api.adorable.io/avatars/285/abott@adorable.png',
                  }}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
  gap: {
    marginBottom: 16,
  },
});
