import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import Colors from '../constants/Colors';

function HomeScreen({ navigation }) {
  const [input, setInput] = useState('');

  function onSearchPress() {
    navigation.navigate("Movies", { searchTerm: input });
  }

  return (
      <View style={styles.container}>
        <TextInput
            value={input}
            onChangeText={setInput}
            style={styles.input}
            placeholder="Movie Title"
        />
        <Button title="Search" color={Colors.secondary} onPress={onSearchPress} />
      </View>
  );
}

const styles = {
  container: {
    backgroundColor: Colors.mainLight,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    backgroundColor: 'white',
    padding: 8,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: Colors.secondary,
    marginBottom: 20,
  }
};

export default HomeScreen;
