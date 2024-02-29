import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TextListScreen = () => {
  // This would be fetched from your backend or state management library
  const texts = ['Example Text 1', 'Example Text 2'];

  return (
    <View style={styles.container}>
      {texts.map((text, index) => (
        <Text key={index} style={styles.textItem}>
          {text}
        </Text>
      ))}
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
