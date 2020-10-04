import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

export default function index({
  namamenu,
  harga,
  gambar,
  onPress,
  onDelete,
  iconx,
  status,
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
          <Text style={styles.status}>{status}</Text>
        </View>

        <TouchableOpacity onPress={onDelete}>
          <Text style={styles.delete}>{iconx}</Text>
        </TouchableOpacity>
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
  status: {
    color: 'red',
    marginTop:5,
    fontWeight:'bold'
  },
  delete: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
});
