import React, {useState} from 'react';
import {
  FlatList,
  Alert,
  TouchableOpacity,
  Text,
  SafeAreaView,
  TextInput,
} from 'react-native';
import Timer from './TimerComponent';
import styles from './style';

export interface TimerProps {
  id: number;
  initialTime: number;
  onRemove: (id: number) => void;
}

const TimerManager = () => {
  const [timers, setTimers] = useState<TimerProps[]>([]);
  const [inputTime, setInputTime] = useState(60);
  const [timerCount, setTimerCount] = useState(1);

  const addTimer = () => {
    if (timers.length < 5) {
      setTimers([
        ...timers,
        {id: timerCount, initialTime: inputTime, onRemove: removeTimer},
      ]);
      setTimerCount(timerCount + 1);
    } else {
      Alert.alert('Maximum of 5 timers allowed');
    }
  };

  const removeTimer = (id: number) => {
    setTimers(timers.filter(timer => timer.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={addTimer} style={styles.button}>
        <Text style={styles.buttonText}>{`Add Timer`}</Text>
      </TouchableOpacity>
      <Text style={styles.lablel}>{'Enter timer duration (in seconds)'}</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter timer duration (in seconds)"
        keyboardType="numeric"
        value={inputTime === 0 ? '' : String(inputTime)}
        onChangeText={val => setInputTime(val === '' ? 0 : Number(val))}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={timers}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Timer
            id={item.id}
            initialTime={item.initialTime}
            onRemove={removeTimer}
          />
        )}
      />
    </SafeAreaView>
  );
};
export default TimerManager;
