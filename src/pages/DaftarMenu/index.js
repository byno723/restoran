import React, {useEffect, useState} from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {ListMenu} from '../../component';
import Axios from 'axios';

export default function index({navigation}) {
  const [button, setButton] = useState('Simpan');
  const [namamenu, setNamaMenu] = useState('');
  const [harga, setHarga] = useState('');
  const [kategori, setKategori] = useState('');
  const [selectedkatalog, setselectedkatalog] = useState({});

  const [katalog, setKatalog] = useState(['']);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    Axios.get('http://10.0.2.2:3004/katalog').then((res) => {
      console.log('hasil', res);
      setKatalog(res.data);
    });
  };

  const selectItem = (item) => {
    setNamaMenu(item.namamenu);
    setHarga(item.harga);
    setKategori(item.kategori);
    setselectedkatalog(item);
    setButton('Update');
  };

  const Submit = () => {
    const data = {
      namamenu,
      harga,
      kategori,
    };
    if (button === 'Simpan') {
      Axios.post('http://10.0.2.2:3004/katalog', data).then((res) => {
        console.log('result', res);
        setNamaMenu('');
        setHarga('');
        setKategori('');
        getData();
      });
    } else if (button === 'Update') {
      Axios.put(
        `http://10.0.2.2:3004/katalog/${selectedkatalog.id}`,
        data,
      ).then((res) => {
        console.log('Hasil Update', res);
        setNamaMenu('');
        setHarga('');
        setKategori('');
        getData();
        setButton('Simpan');
      });
    }
  };

  const deleteitem = (item) => {
    Axios.delete(`http://10.0.2.2:3004/katalog/${item.id}`).then((res) => {
      console.log('hasil delete', res);
      setNamaMenu('');
      setHarga('');
      setKategori('');
      getData();
      setButton('Simpan');
      getData();
    });
  };

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.texttitle}>Tambah Menu</Text>
        <Text style={styles.label}>Nama Menu</Text>
        <TextInput
          style={styles.input}
          value={namamenu}
          onChangeText={(value) => setNamaMenu(value)}
        />
        <Text style={styles.label}>Harga</Text>
        <TextInput
          style={styles.input}
          value={harga}
          onChangeText={(value) => setHarga(value)}
        />
        <Text style={styles.label}>Kategori</Text>
        <TextInput
          style={styles.input}
          value={kategori}
          onChangeText={(value) => setKategori(value)}
        />
        <Button title={button} onPress={Submit} />
        <View style={styles.gap}>
          {katalog.map((item) => {
            return (
              <ListMenu
                key={item.id}
                namamenu={item.namamenu}
                harga={item.harga}
                gambar={{
                  uri: 'https://api.adorable.io/avatars/285/abott@adorable.png',
                }}
                iconx="X"
                onDelete={() =>
                  Alert.alert(
                    'Peringatan',
                    'Yakin Ingin Menghapus Data Ini ?',
                    [
                      {text: 'Tidak', onPress: console.log('Button Tidak')},
                      {text: 'Ya', onPress: () => deleteitem(item)},
                    ],
                  )
                }
                onPress={() => selectItem(item)}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 16,
  },
  texttitle: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    color: 'grey',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
  },
  picker: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    paddingHorizontal: 4,
  },
});
