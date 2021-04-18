import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Input from '../../atoms/Input';
import Gap from './../../atoms/Gap';
import Button from '../../atoms/Button';
import Axios from 'axios';

const App = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    const data = {
      email: email,
      first_name: first_name,
      last_name: last_name,
      avatar: `https://source.unsplash.com/user/erondu`,
    };
    Axios.post('http://10.0.2.2:3005/users', data);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.Regis}>Registration Page</Text>
        <Gap height={40} />
        <Text style={styles.labelInput}>E-mail :</Text>
        <Input
          value={email}
          placeholder="Masukan Email..."
          onChangeText={e => setEmail(e)}
        />
        <Text style={styles.labelInput}>Nama Depan :</Text>
        <Input
          value={first_name}
          placeholder="Masukan Nama Depan..."
          onChangeText={e => setFirstName(e)}
        />
        <Text style={styles.labelInput}>Nama Belakang :</Text>
        <Input
          value={last_name}
          placeholder="Masukan Nama Belakang..."
          onChangeText={e => setLastName(e)}
        />
        <Gap height={20} />
        <Button label="Simpan Data" onSbumit={() => handleSubmit()} />
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginVertical: 24,
  },
  Regis: {
    fontSize: 34,
    fontWeight: '500',
  },
  labelInput: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});