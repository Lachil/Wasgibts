
import AsyncStorage from '@react-native-async-storage/async-storage';

//export const loginWithToken = async () => {
export const getToken = async () => {
    const token = await AsyncStorage.getItem('TOKEN');
    console.log('token: ' +  token );
    this.setState({"token": token});
    return token;
}
