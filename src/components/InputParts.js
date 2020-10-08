import React from 'react';
import {View, TouchableOpacity, TextInput, StyleSheet} from 'react-native';


const InputParts = () =>{
    return(
        <View style={styles.container}>
            <TextInput style={styles.inputcontainer} placeholder='Enter your E-Mail ' keyboardType='email-address'/>
            <TextInput style={styles.inputcontainer} placeholder='Enter your Password' keyboardType='visible-password'/>
        </View>

    )
}

export default InputParts;

const styles = StyleSheet.create({inputcontainer:{
    backgroundColor:'white',
    borderRadius: 10,
    padding:10,
    marginBottom:30,
    width:320
   
},
container:{
    flex:1,
    justifyContent:"flex-end",
    alignItems:'center'
}
})