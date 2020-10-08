import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImgCart = () =>{
    return(
        <View style={styles.container}>
            <Image
            style={styles.img}
            source={require('../images/shoppingCart.png')}/>
        </View>
    )
}

export default ImgCart;

const styles = StyleSheet.create({img:{
    width:200,
    height: 150,
    resizeMode: 'cover'    
},
container:{
    flex:1,
    justifyContent:'flex-end'
}
})