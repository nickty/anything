import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import {addMessage} from '../redux/authActions';
import {useDispatch, useSelector} from 'react-redux';

const SubmitTextScreen = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const accessToken = useSelector(state => state.auth.accessToken);

  const handleSubmit = () => {
    // Submit the text to your backend or state management library
    // console.log(text);

    try {
      dispatch(addMessage({messageContent: text, accessToken}));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter some text"
        value={text}
        onChangeText={setText}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default SubmitTextScreen;
