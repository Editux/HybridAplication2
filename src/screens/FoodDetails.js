import React from 'react';
import { StyleSheet, Text, View, Button,Image,TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const FoodDetails = ({route, navigation})=>{
    
      const { name,image,time,description } = route.params;
      const [username,setUsername]= useState('admin') 
      const [comment,setComment]=useState([
          {name: 'user123', text: 'Best Recipe Ever!', key:'1'},
          {name:'best_user',text: 'Very Nice!', key:'2'},
        ])
        const[val, setText] = useState('');
        //Get input from TextInput
    const changeHandler = (val)=>{
        setText(val);
    }
    // Save to array
        const submitHandler = (text) =>{
            setComment((prevComment)=>{
              return [
                {name:username ,text:text, key:Math.random().toString()},
                ...prevComment
              ]
            })}
    //Delete comment
    const pressHandler =(key)=>{
        setComment((prevComment)=>{
          return prevComment.filter(comment =>comment.key !=key);
        })
      }        
       


return (
    <View style={styles.container}>
        <Image style={styles.image_style} source={image}/>
        <Text style={styles.textstyle_1} > {name}</Text>
        <Text style={styles.textstyle_2}> Cooking time: {time}</Text>
        <Text style={styles.textstyle_3}>{description}</Text>
        <TextInput
        placeholder='Write a comment'
        onChangeText={changeHandler}
        />
        <Button title='Sumbit a Comment'
        color='#04d9ff'
        onPress={()=>{submitHandler(val)}}/>
       <FlatList
       data={comment}
       renderItem = {({item})=>(
           <TouchableOpacity onPress={()=>pressHandler(item.key)}>
           <View style={styles.container_2}>
               <Text style={styles.textstyle_4}>{item.name}:</Text>
                <Text>{item.text}</Text>
           </View>
           </TouchableOpacity>
       )}
        />
        

    </View>
);
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 700,
        width: 500,
        flex:1},
    image_style:{
        height:250,
        width:300,
        marginTop:20,
        marginLeft: 40,
        marginBottom:5} , 
    textstyle_1:{
        fontSize:20,
        fontWeight:'700',
    },
    textstyle_2:{
        color: 'grey',
        marginBottom:5,
    },
    textstyle_3:{
        marginLeft:10,
        marginRight:10,
        paddingBottom:10,
        borderBottomWidth:1,
        borderBottomColor: '#04d9ff'
        
    },
    input:{
        marginTop:5,
        marginBottom:10

    },
    container_2:{
        borderColor:'#04d9ff',
        borderLeftWidth:1,
        borderRightWidth:1,
        borderTopWidth:1,
        borderBottomWidth:1,
        marginBottom:10,
        marginTop:10,
        padding:5

    },
    textstyle_4:{
        color:'#04d9ff',
        fontWeight:'700'
    },  
    })


export default FoodDetails;