import {StyleSheet} from 'react-native';
import {COLORS} from '../../common/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: COLORS.btnColor,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
  },
  timerNumber: {
    fontSize: 18,
    color: 'black',
  },
  timerContainer: {
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    borderStyle: 'dashed',
  },
  lablel: {
    fontSize: 15,
    color: COLORS.btnColor,
    marginVertical: 5,
  },
});

export default styles;
