import { AsyncStorage } from 'react-native';

export const retrieveOptions = async () => {
  try {
    return JSON.parse(await AsyncStorage.getItem('@EuTambemStore:options'));
  } catch (error) {
    return null;
  }
};

export const storeOptions = async (options) => {
  try {
    await AsyncStorage.setItem('@EuTambemStore:options', JSON.stringify(options));
  } catch (error) {
    console.log(error);
  }
};
