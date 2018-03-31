import { StyleSheet, Platform } from 'react-native';

export const SOFT_PURPLE = '#91508c';
export const DARK_PURPLE = '#961687';
export const RED = '#f95c69';
export const GREEN = '#03b5aa';
export const WHITE = '#ffffff';
export const BLACK = '#000000';
export const DARK_GREY = '#333333';
export const LIGHT_GREY = '#e6e6e6';
export const GREY = '#8C8C8C';

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  innerContainer: {
    padding: '5%',
  },
  input: {
    borderBottomColor: SOFT_PURPLE,
    alignItems: 'flex-start',
    borderWidth: 0,
    ...Platform.select({
      ios: {
        borderBottomWidth: 1,
        margin: 0,
        marginBottom: 10,
        marginTop: 10,
        height: 30,
      },
    }),
  },
  multilineInput: {
    height: 'auto',
    minHeight: 30,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  link: {
    marginTop: 10,
    marginBottom: 10,
    color: SOFT_PURPLE,
    alignSelf: 'flex-end',
  },
});

export default appStyles;
