import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import FoodList from './components/FoodList';



const RecipeScreen = ({navigation})=> {
    const [FoodObj, setFood] = useState([
        { name:'Zeppelins' , image_url:'https://xxxl.lt/wp-content/uploads/2018/06/cepelinai-600x450.jpg',time:'3 hours', key: '1', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
       {name:'Kibins', image_url:'https://kibinaivilniuje.lt/wp-content/uploads/2015/05/kibinai.trakuose.skaniausi.jpg', time:'2 hours', key:'2',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
       {name:'Potato Pancakes', image_url:'https://assets.epicurious.com/photos/5761d0d88accf290434553ab/2:1/w_1260%2Ch_630/classic-potato-pancakes.jpg', time: '30 min',key:'3', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      ]);
    
        return(
        <View style={styles.container}>
           <FlatList
           data={FoodObj}
           keyExtractor={(FoodObj)=>{FoodObj.key}}
           renderItem={({item})=>(
               <TouchableOpacity onPress={()=>{ navigation.navigate( 'Root' ,{screen:'Food', params:{name:item.name ,image:item.image_url,time:item.time,description:item.description}} ) }}>
           <FoodList item={item} />
           </TouchableOpacity>
           )}/>
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
                flex:1},
            })

export default RecipeScreen;
    
 

