import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMessages} from '../redux/messagesSlice';

const TextListScreen = () => {
  const dispatch = useDispatch();
  // This would be fetched from your backend or state management library
  const texts = ['Example Text 1', 'Example Text 2'];
  // const {items: texts, status, error} = useSelector(state => state.messages);

  // console.log('check messages', items);

  // useEffect(() => {
  //   if (status === 'idle') {
  //     dispatch(fetchMessages());
  //   }
  // }, [status, dispatch]);

  return (
    <View style={styles.container}>
      {/* {status === 'loading' && <Text>Loading...</Text>}
      {status === 'succeeded' &&
        texts.map((text, index) => (
          <Text key={index} style={styles.textItem}>
            {text}
          </Text>
        ))}
      {status === 'failed' && <Text>Error: {error}</Text>} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  textItem: {
    marginBottom: 10,
  },
});

export default TextListScreen;
