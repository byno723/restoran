import React, {useState} from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Fire from '../../config/Fire';
import {storeData, UseForm} from '../../utils';

export default function index({navigation}) {
  const [form, setForm] = UseForm({
    fullname: '',
    email: '',
    password: '',
  });

  const Daftar = () => {
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      //proses firebase register
      .then((success) => {
        setForm('reset');

        const data = {
          fullname: form.fullname,
          email: form.email,
          uid: success.user.uid,
        };
        Fire.database()
          .ref('users/' + success.user.uid + '/')
          .set(data);

        //proses simpan di local storage
        storeData('user', data);
        Alert.alert('Register Berhasil !');
        //pindah halaman dengan parameter data yg dibawa dari fungsi /'data' yg ada diatas
        navigation.navigate('Login');
      })
      .catch((error) => {
        const errorMessage = error.message;
        Alert.alert('Gagal Masuk !', errorMessage);
      });
  };

  return (
    <View style={styles.page}>
      <Text style={styles.texttitle}>Register</Text>
      <Text style={styles.label}>Nama Lengkap</Text>
      <TextInput
        style={styles.input}
        value={form.fullname}
        onChangeText={(value) => setForm('fullname', value)}
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={form.email}
        onChangeText={(value) => setForm('email', value)}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={form.password}
        onChangeText={(value) => setForm('password', value)}
      />
      <Button title="Daftar" onPress={Daftar} />
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.texttitle}>Sudah Punya akun? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 20,
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
});
