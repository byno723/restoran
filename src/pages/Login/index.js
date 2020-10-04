import React from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Fire from '../../config/Fire';
import {storeData, UseForm} from '../../utils';

export default function index({navigation}) {
  const [form, setForm] = UseForm({email: '', password: ''});

  const Login = () => {
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        Fire.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then((resDB) => {
            if (resDB.val()) {
              storeData('user', resDB.val());
              navigation.replace('Home');
            }
          });
      })
      .catch((err) => {
        Alert.alert('Data Tidak Benar !', err.message);
      });
  };

  return (
    <View style={styles.page}>
      <Text style={styles.texttitle}>Login</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={form.email}
        onChangeText={(value) => setForm('email', value)}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={form.password}
        secureTextEntry
        onChangeText={(value) => setForm('password', value)}
      />
      <Button title="Login" onPress={Login} />
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
