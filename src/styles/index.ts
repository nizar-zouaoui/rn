import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    color: '#000',
  },
  errorText: {
    fontSize: 16,
    color: '#ff3333',
  },
  errorMessageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorIcon: {
    fontSize: 16,
    color: '#ff3333',
    marginRight: 4,
  },
  'flex-1': {
    flex: 1,
  },
  'align-items-center': {
    alignItems: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#d3d3d3',
    paddingHorizontal: 12,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
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
