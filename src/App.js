import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import ImgCart from './components/ImgCart';
import InputParts from './components/InputParts';
import ButtonParts from './components/ButtonParts';


const App = () =>{
  return(
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container} > 
        <ImgCart/>
        <InputParts/>
        <ButtonParts/>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({container:{
  backgroundColor: '#80CBC4',
  flex:1,
  justifyContent: 'center',
  alignItems:'center'
}})