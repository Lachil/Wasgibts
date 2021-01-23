import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const styles = StyleSheet.create({
    menu:{
        flex: 1,
        flexDirection: 'row',
        alignItems : 'center',
        marginBottom: 0,
        backgroundColor: 'white',
        borderWidth:2,
        borderColor: 'black',
        borderTopLeftRadius: 25,
        borderTopRightRadius:25,
        padding: 10,
        paddingTop:0,
        paddingBottom:0,
    },button:{
        flex:1,
        marginRight: 5,
        marginLeft: 5,
        backgroundColor: 'white',
        padding: 5,
        paddingBottom:0,
        borderColor: 'black',
        borderWidth: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius:25,
        alignItems : 'center',
        height: 40
    }, menuText:{
        fontSize: 16
    }
});



export const MenuItem = (props) =>{
    return(
            <TouchableOpacity style={styles.button}
                onPress = {props.onPress}>
                {props.children}
                
            </TouchableOpacity>
        
    );
}

class BottomMenu  extends Component {
    render(){
        return (
            <View style={styles.menu}>
                {this.props.items}

                {(this.props.add) &&
                    <MenuItem onPress={() =>{
                        this.props.navigation.navigate('New')
                    } }> 
                        <Image source={require('../assets/addIcon.png')}/>
                    </MenuItem>}
                    
                    {(this.props.edit) &&
                        <MenuItem onPress={()=>{
                            this.props.navigation.navigate('NewEntry')
                        }}>
                            <Image source={require('../assets/editIcon.png')}/>
                        </MenuItem>}
                    {(this.props.info) &&
                        <MenuItem onPress={() =>{
                            this.props.navigation.navigate('Info')}}>
                            <Image source={require('../assets/infoIcon.png')}/>
                        </MenuItem>}

                        {(this.props.newEntry) &&
                        <MenuItem onPress={() =>{
                            this.props.navigation.navigate('NewEntry')}}>
                            <Text style={styles.menuText}>Eintrag einfügen !</Text>
                        </MenuItem>}

                        {(this.props.newCategory) &&
                        <MenuItem onPress={() =>{
                            this.props.navigation.navigate('NewCategory')}}>
                            <Text style={styles.menuText}>Kategorie einfügen !</Text>
                        </MenuItem>}


            </View>
        );
    }
};


  
  export {BottomMenu};