import React from 'react';
import {View,Text} from 'react-native';

const App=()=>{
return(
  <View style={{flex:1,margin:20,marginRight:20}}>
    <View style={{flex:1,backgroundColor:'darkseagreen'}}>
    <Text style={{color:'indigo'}}>Hello World</Text>
    </View>
    <View style={{flex:2,backgroundColor:'darkorchid'}}></View>
    <View style={{flex:3,backgroundColor:'lightpink'}}></View>
  </View>
 )
}
export default App