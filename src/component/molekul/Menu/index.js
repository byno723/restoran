import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function index({img, title, onPress}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={onPress}>
        <Image source={img} style={styles.avatar} />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 13,
          fontWeight: 'bold',
          color: 'white',
          marginTop: 15,
        }}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
  },
});
