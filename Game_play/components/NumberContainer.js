import { View, Text, StyleSheet } from 'react-native';

import {Colors} from '../util/color';

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.colorPrimary_4,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.colorPrimary_4,
    fontSize: 36,
    fontWeight: 'bold',
  },
});