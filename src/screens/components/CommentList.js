import React from 'react';
import { StyleSheet, Text, View,  } from 'react-native';

const CommentList= ({item})=>{
return(
    <View>
        <Text> {item.name}</Text>
        <Text>{item.text}</Text>
    </View>
);
}

export default CommentList;