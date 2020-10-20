import React from 'react';
import { StyleSheet, Text, View, Button,Image } from 'react-native';


const FoodList =({item})=>{
    
return(
  <View style={styles.container}>
      <Image style={styles.image_container} source={item.image_url}/>
        <Text style={styles.text_style1}>{item.name}</Text>
        <Text style={styles.text_style2}>{item.time}</Text>
  </View>  
);
}
const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
        height:200,
        width:200,
        borderBottomWidth:1,
        borderTopWidth:1,
        borderRightWidth:1,
        borderLeftWidth:1,
        borderColor:'#04d9ff',
        borderRadius:10,
        marginBottom:10,
        marginTop:10
    },
    image_container:{
        height:100,
        width:150,
    },
    text_style1:{
        fontSize:18,
        fontWeight: '600',
        marginBottom:10,
        marginTop:10
    },
    text_style2:{
        fontSize:10,
        color: 'grey'
    }
});
export default FoodList;