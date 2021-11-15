import React from 'react';
import {PureComponent} from 'react';
import {Text, TouchableOpacity,View,SafeAreaView, Image, StyleSheet} from 'react-native'
import Icon  from "react-native-vector-icons/Ionicons";
import PropTypes from 'prop-types'


const propTypes= {
    main:PropTypes.bool
}
const defaultProps={
    main:false
}
class Navbar extends PureComponent {
    state = {  }
    
    render() {
        const {navigation, main}= this.props
        return (
            <SafeAreaView >
                {main ?
                <View style={styles.mainNav}>
                    <Image style={styles.logo}
                        source ={require('../assets/images/movies.png')}/>
                          <TouchableOpacity onPress={()=>{
                        navigation.navigate('Search')
                    }}>
                      <Icon name={'search-outline'} size={30} color={'#fff'}></Icon>  
                    </TouchableOpacity>
                </View>
            :
            <View>
                    <TouchableOpacity onPress={()=>{
                        navigation.goBack()
                    }}>
                      <Icon name={'chevron-back'} size={40} color={'#fff'}></Icon>  
                    </TouchableOpacity>
                </View>
              
            }
              </SafeAreaView> 
            
                
        );
    
    }
}

Navbar.propTypes=propTypes;
Navbar.defaultProps =defaultProps;

const styles = StyleSheet.create({
    logo:{
        width:50,
        height:50
    },
    mainNav:{
        flex:1,
        justifyContent:'space-between',
        flexDirection:'row',
        padding:10,
        alignItems:'center'
    }
})
export default Navbar;