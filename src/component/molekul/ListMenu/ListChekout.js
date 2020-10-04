import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

export default function index({
  namamenu,
  harga,
  gambar,
  onPress,
  value,
  onChangeText,
}) {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          <Image source={gambar} style={styles.avatar} />
        </TouchableOpacity>
        <View style={styles.section}>
          <Text style={styles.nama}>{namamenu}</Text>
          <Text style={styles.harga}>{harga}</Text>
        </View>
        <View>
          <TextInput
            placeholder="jumlah"
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 16,
    paddingHorizontal: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  nama: {fontSize: 20, fontWeight: 'bold', marginBottom: 8},
  section: {
    marginLeft: 16,
    flex: 1,
    alignSelf: 'center',
  },
  harga: {
    color: 'orange',
  },

  input: {
    borderBottomWidth: 1,
    borderColor: 'grey',
    padding: 12,
    marginTop: 8,
    width: 100,
    height: 50,
    borderRadius: 10,
    marginBottom: 16,
  },
});
