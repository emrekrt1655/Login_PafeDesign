import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Platform } from 'react-native';


const ButtonParts = () =>{
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttoncontainer}>
                <Text style={styles.text}>Login</Text> 
            </TouchableOpacity>
            <TouchableOpacity  style={styles.buttoncontainer}>
                <Text style={styles.text}>Sign Up</Text> 
            </TouchableOpacity>
        </View>
    )
}

export default ButtonParts;

const styles = StyleSheet.create({buttoncontainer:{
    backgroundColor: '#546E7A',
    padding: Platform.OS === 'android' ? 10 : 15,
    borderRadius:5,
    alignItems: 'center',
    width:200,
    marginBottom:10
    
},
text:{
    color:'white',
    fontWeight:'bold'
    
},
container:{
    flex:1,
    justifyContent:'flex-start'
}
})