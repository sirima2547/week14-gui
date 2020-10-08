
import React from 'react';
import {View,Text} from 'react-native';

const App=()=>{
return(
  <View style={{flex:1,
  flexDirection:'column',
  justifyContent:'space-between',
  alignItems:'stretch'
  }}>
   <View style={{width:50,height:50,backgroundColor:'royalblue'}}></View>
    <View style={{width:50,height:50,backgroundColor:'seagreen'}}></View> 
    <View style={{width:50,height:50,backgroundColor:'sienna'}}></View > 
  </View>
 )
}
export default App