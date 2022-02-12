import React, {Component} from 'react';
import {AppRegistry,Image,FlatList,StyleSheet,Text,View} from 'react-native';
import flatListData from './flatListData'

class FlatListItem extends Component{
    render() {
        return(
          <View style ={{flex:1,marginRight: 30,justifyContent: 'center', alignItems: 'center'}}>
              <Image source={{uri:this.props.item.imageUrl, width : 300 , height: 300}}></Image>
              <Text>{this.props.item.key}</Text>
          </View>

        );imageUrl
    }
}
class BasicFlatList extends Component {
    render() {
        return (
           <View style={{flex: 1,  marginTop: 22 , justifyContent: 'center'}}>
               <FlatList
                    data ={flatListData}
                    horizontal = {true}
                    renderItem = {({item,index})=>{
                        // console.log(`Item=${JSON.stringify(item)}, index= ${index}`)
                        return(
                            <FlatListItem item={item} index = {index}/>
                        );
                    }}
               />
           </View>
        );
    }
}

export default BasicFlatList;