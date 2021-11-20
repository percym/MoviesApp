import React, { useEffect, useState } from "react";
import { SafeAreaView, Text , View, TextInput, StyleSheet, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const Search =({navigation})=>{
    const [text,onChangeText]=useState('');
    const onSubmit=(query)=>{
        console.log(query);
    }
   
    return(
        <React.Fragment>
            <SafeAreaView>
            <View style={styles.contianer}>
              <View style={styles.form} >
                    <TextInput style={styles.input} onChangeText={onChangeText} value={text} placeholder={'Search movie or tv show'}/> 
             </View>
            <TouchableOpacity onPress={()=>{
                    onSubmit(text)
            }}>
            <Icon name={'search-outline'} size={30} ></Icon>
            </TouchableOpacity>
            </View>
            </SafeAreaView>
        </React.Fragment>
    )
}

const styles=StyleSheet.create({
    input:{
       borderRadius:15,
       borderWidth:0.5,
       height:50,
       padding:8
    },
    contianer:{
        padding:10,
        paddingTop:60,
        flexDirection:"row",
        alignItems:"center"
    
    },
    form:{
        flexBasis:'auto',
        flexGrow:1,
        paddingRight:8
    }
})
export default Search;