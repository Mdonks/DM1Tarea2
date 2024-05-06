import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert } from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [contacts, setContacts] = useState([]);

  const handleAddContact = () => {
    if (name.length < 3) {
      Alert.alert('Error', 'El nombre debe tener al menos 3 caracteres');
      return;
    }

    if (phone.length < 8) {
      Alert.alert('Error', 'El número de teléfono debe tener al menos 8 dígitos');
      return;
    }

    setContacts([...contacts, { name, phone }]);
    setName('');
    setPhone('');
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Nombre:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <Text>Teléfono:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={(text) => setPhone(text)}
        value={phone}
        keyboardType="numeric"
      />
      <Button title="Agregar" onPress={handleAddContact} />
      <Text style={{ marginTop: 20, fontSize: 20 }}>Lista de contactos:</Text>
      <FlatList
        data={contacts}
        renderItem={({ item }) => (
          <Text>{`${item.name}: ${item.phone}`}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default App;

