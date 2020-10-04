import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ListMenu} from '../../component';

export default function index() {
  return (
    <View>
      <ListMenu
        namamenu="nasi gorang"
        harga="10000"
        gambar={{
          uri: 'https://api.adorable.io/avatars/285/abott@adorable.png',
        }}
        status="belum Bayar"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
