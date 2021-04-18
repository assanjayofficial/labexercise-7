import React from 'react';
import {Text, View} from 'react-native';
import RegisterPage from './components/pages/Registrasi';
import UserList from './components/pages/UserList';

const App = () => {
  return (
    <View>
        {/*Disini kita akan menampilkan Halaman Registrasi beserta UserList*/}
       <RegisterPage /> 
      {/*<HalamanUserList/>*/}
    </View>
  );
};

export default App;