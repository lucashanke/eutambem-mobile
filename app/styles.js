import { StyleSheet, Platform } from 'react-native';

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    margin: '5%',
  },
  button: {
    color: '#961687',
  },
  input: {
    borderBottomColor: '#91508C',
    ...Platform.select({
      ios: {
        borderBottomWidth: 1,
        marginBottom: 10,
        height: 30,
      },
      android: {
        borderBottomWidth: 0,
      },
    }),
  },
  loading: {
    opacity: 0.5,
    backgroundColor: 'white',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default appStyles;
