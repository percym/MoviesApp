import React from "react";
import { PureComponent } from "react";
import {TouchableOpacity,StyleSheet, Image} from 'react-native';
const placeholderImage = require('../assets/images/placeholderimage.jpg');
import PropTypes from 'prop-types';

const propTypes = {
  item:PropTypes.object
}
class Card extends PureComponent{
    
   
    render(){
        const {navigation,item}= this.props;

        return(
            <TouchableOpacity  onPress={()=>navigation.navigate('Detail',{movieDetail:item})} style={styles.container}>
                    <Image style={styles.image}
                    resizeMode="cover" 
                    source={
                        item.poster_path?{uri:'https://images.tmdb.org/t/p/w500'+item.poster_path}: placeholderImage}/>
            </TouchableOpacity>

        );
    }
}

const styles=StyleSheet.create({
    container:{
        padding:5,
        position:"relative",

    },
    image:{
        height:200,
        width:120,
        borderRadius:20
    }
})
Card.propTypes= propTypes;
export default Card