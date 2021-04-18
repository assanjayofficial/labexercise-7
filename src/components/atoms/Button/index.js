import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const IndexButton = ({label, onSbumit}) => {
  return (
    <TouchableOpacity onPress={onSbumit} style={styles.button}>
      <Text style={styles.labelButton}>{label}</Text>
    </TouchableOpacity>
  );
};

export default IndexButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    borderRadius: 10,
    paddingVertical: 10,
  },
  labelButton: {
    textAlign: 'center',
    fontSize: 17,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'roboto',
  },
});