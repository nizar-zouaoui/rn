import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: '#000',
  },
  inputStyle: {
    borderRadius: 20,
    backgroundColor: '#d3d3d3',
    width: '100%',
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexGrow: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexGrow: 1,
  },
  imgContainer: {
    paddingTop: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ffc463',
    padding: 10,
  },
  'width-80': {
    width: '80%',
  },
  'width-60': {
    width: '60%',
  },
  img: {
    width: 150,
    height: 150,
  },
  clickableText: {
    color: '#ffc463',
    fontWeight: 'bold',
  },
  noAccountText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
