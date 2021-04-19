import React from 'react';
import {View, Text, TextInput as Input, StyleSheet} from 'react-native';

const App = ({label, placeholder, ...rest}) => {
  return (
    <View>
      <Text style={styles.labelInput}>{label}</Text><Input style={styles.input} placeholder={placeholder} {...rest} />
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  labelInput: {
    fontSize: 14,
    marginEnd: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#969696',
    borderRadius: 10,
    marginBottom: 5,
  },
});
