import React from "react";
import { Pressable , Text, StyleSheet} from "react-native";
import Icon  from "react-native-vector-icons/Ionicons";
import { Colors } from "react-native/Libraries/NewAppScreen";

class PlayButton extends React.PureComponent{

   
    render(){
        const {handlePress} = this.props;
        return(
            <Pressable onPress={()=>handlePress()} style={styles.button}>
                <Icon name={'play'} size={30}></Icon>
            </Pressable>
        );
    }
}

const styles=StyleSheet.create({
    button:{
    alignContent:'center',
    borderRadius:50,
    width:50,
    padding:10,
    backgroundColor:'blue'
    }
})
export default PlayButton