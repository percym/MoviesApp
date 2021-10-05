import React from 'react';
import {PureComponent} from 'react';
import {View, Text, FlatList, Dimensions, StyleSheet} from 'react-native';

class List extends PureComponent {
  render() {
    const {title, content} = this.props;

    return (
      <View style={styles.list}>
        <View>
            <Text style={styles.text}>{title}</Text>
        </View>  
        <View>
            <FlatList
            data={content}
            horizontal={true}
            renderItem={({item}) => <Text>{item.title}</Text>}></FlatList>
        </View>
      </View>  
    );
  }
}
const styles=StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        paddingBottom:10
    },
    list:{
        marginTop:20
    }
})
export default List;
