import React, {Component} from 'react';
import { Image } from 'react-native';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import CustomButton from './CustomButton';
import Logo from 'C:/Users/PC/AndroidStudioProjects/test5/icon/notice.png';
import Earth from 'C:/Users/PC/AndroidStudioProjects/test5/icon/earth.png';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:'white',
  },
/*  header: {
    width:'100%',
    height:'9%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff9a9a',
  },
*/
  notice: {
   height: '20%',
   flexDirection:'column',
   alignItems:'flex-end',
   },

  logo: {
    width:'100%',
    height:'18%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'white',
},

  content: {
    width:'100%',
    height:'30%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
/*
  f: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#d6ca1a',
  },
*/
  footer: {
    width:'100%',
    height:'13%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  navi: {
  backgroundColor:'black',
  top:'5%',
  width:'100%',
  height:'20%',

  },

});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.notice}>
         <Image style={{ width:50, height:50 }} source={Logo} resizeMode='contain'/>
         </View>

        <View style={styles.logo}>
        <Image source ={require('C:/Users/PC/AndroidStudioProjects/test5/icon/nodelogo.png'   )}/>
        </View>

        <View style={styles.content}>
        </View>

        <View style={styles.footer}>
        <CustomButton
        buttonColor={'blue'}
        title={'카페'}
        onPress={() => this.goMainScreen()} />
        <CustomButton
        buttonColor={'red'}
        title={'둘러보기'}
        onPress={() => this.goAroundScreen()} />
        </View>

        <View style={styles.navi}>
        <Image style={{ width:50, height:50, flexDirection:'row', alignItems:'flex-end' }} source={Earth} resizeMode='contain'/>
        </View>

      </View>
    );
  }

 goMainScreen(){
 // DetailScreen으로 화면 이동
  this.props.navigation.navigate('RU');
  }
 goAroundScreen(){
 // AroundScreen으로 화면 이동
  this.props.navigation.navigate('CAFE2');
  }
}





