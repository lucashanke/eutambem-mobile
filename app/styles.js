import { StyleSheet, Platform } from 'react-native';

export const SOFT_PURPLE = '#91508c';
export const DARK_PURPLE = '#961687';
export const RED = '#f95c69';
export const GREEN = '#03b5aa';
export const WHITE = '#ffffff';

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    margin: '5%',
  },
  button: {
    fontSize: 10,
  },
  input: {
    borderBottomColor: DARK_PURPLE,
    alignItems: 'flex-start',
    borderWidth: 0,
    ...Platform.select({
      ios: {
        borderBottomWidth: 1,
        margin: 0,
        marginBottom: 15,
        marginTop: 10,
        height: 30,
      },
      android: {
        borderBottomWidth: 0,
      },
    }),
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#eeeeee',
    borderWidth: 1,
    padding: 3,
  },
  loading: {
    opacity: 0.5,
    backgroundColor: WHITE,
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
