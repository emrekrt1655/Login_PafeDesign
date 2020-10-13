import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

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
    width: Dimensions.get('window').width * 0.40,
    height: Dimensions.get('window').height * 0.30,
    resizeMode: 'cover'    
},
container:{
    flex:1,
    justifyContent:'flex-end'
}
})