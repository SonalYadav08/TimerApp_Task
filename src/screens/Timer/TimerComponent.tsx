import React, {useState, useEffect} from 'react';
import {View, Alert, TouchableOpacity, Text} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import styles from './style';
import {TimerProps} from '.';
import {COLORS} from '../../common/color';

const Timer = ({id, initialTime, onRemove}: TimerProps) => {
  const [isRunning, setIsRunning] = useState(false);
  const [key, setKey] = useState(0); // Used to reset the timer

  const handleComplete = () => {
    Alert.alert(`Timer ${id} reached zero!`);
    setIsRunning(false);
    return {shouldRepeat: false};
  };

  return (
    <View style={styles.timerContainer}>
      <View style={{alignItems: 'center', marginBottom: 10}}>
        <CountdownCircleTimer
          key={key}
          isPlaying={isRunning}
          duration={initialTime} // Total duration of the timer
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[initialTime, initialTime / 2, initialTime / 4, 0]}
          onComplete={handleComplete}>
          {({remainingTime}) => (
            <Text style={styles.timerNumber}>
              {new Date(remainingTime * 1000).toISOString().substr(11, 8)}
            </Text>
          )}
        </CountdownCircleTimer>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => setIsRunning(!isRunning)}
          style={{...styles.button, backgroundColor: COLORS.okColor}}>
          <Text style={styles.buttonText}>{isRunning ? 'Pause' : 'Start'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setIsRunning(false);
            setKey(prevKey => prevKey + 1);
          }}
          style={{...styles.button, backgroundColor: COLORS.btnLightBlue}}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setIsRunning(false); // Stop timer when removed
            onRemove(id);
          }}
          style={{...styles.button, backgroundColor: COLORS.redColor}}>
          <Text style={styles.buttonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Timer;
