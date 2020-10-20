import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
 const HomeScreen = ()=>{
         return(
        <View style={styles.container}>
            <View style={styles.container1}>
            <Text style ={styles.fontstyle}>Recipe App</Text>
            <Text style= {styles.fontstyle}>Made by Edita Komarova</Text>
            </View>
        </View>
         )
     }
     const styles = StyleSheet.create({
        container: {
            justifyContent:'center',
            alignItems:'center',
            backgroundColor: 'white',
            height: 700,
            width: 500,
            flex:1,
            
            

        },
        fontstyle:{
            color: '#04d9ff',
            fontSize : 16,
            fontWeight: '700' 

        },
        container1:{
            borderColor:'#04d9ff',
            borderTopWidth:1,
            borderLeftWidth:1,
            borderRightWidth:1,
            borderBottomWidth:1,
            padding:10
            
            
        }
    })
export default HomeScreen;

