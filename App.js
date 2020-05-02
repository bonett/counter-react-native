import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './header';
import Counter from './counter';
import ActionButton from './Button';

const App = () => {

  const [count, setCounter] = useState(0);

  const handleIncrease = () => {
    setCounter(count + 1);
  }

  const handleDecrease = () => {
    setCounter(count - 1);
  }

  return (
    <View style={styles.container}>
      <Header title={'Countdown'} />
      <Counter number={count} />
      <View style={styles.actionButton}>
        <ActionButton title="Decrease" isDisabled={count === 0} action={handleDecrease} />
        <ActionButton title="Increase" action={handleIncrease} />
      </View>
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});
