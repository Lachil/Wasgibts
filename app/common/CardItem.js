import React from 'react';
import {
  StyleSheet,
  View,
  Text} from 'react-native';

const CardItem = (prop) =>{
    return(
        <View style={styles.cardItem}>
            {prop.children}
        </View>
    );
}

  
const styles = StyleSheet.create({
    cardItem: {
      padding: 5,
      borderColor: '#ddd',
      borderBottomWidth: 1,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      flexDirection: 'row'
    }
  });
  
export {CardItem};
