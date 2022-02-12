import React, {Component} from 'react';
import {ScrollView, View, Text, StyleSheet, FlatList, TouchableOpacity, TouchableWithoutFeedback, Image} from 'react-native';

export default class Main extends Component{

    // RN에서 ListView 용도의 컴포넌트
    // 1. FlatList
    // 2. SectionList

    constructor(){
        super();

        this.state={
            // 리스트에 보여줄 대량의 데이터
            datas: ["aaa","bbb","ccc","ddd"],

            // key 프로퍼티를 가진 대량의 데이터
            datas2:[
                {key:"0",data:"aaa"},
                {key:"1",data:"bbb"},
                {key:"2",data:"ccc"},
                {key:"3",data:"ddd"},
                {key:"4",data:"aaa"},
                {key:"5",data:"bbb"},
                {key:"6",data:"ccc"},
                {key:"7",data:"ddd"},
                {key:"8",data:"aaa"},
                {key:"9",data:"bbb"},
                {key:"10",data:"ccc"},
                {key:"11",data:"ddd"},
            ],

            // 08ListLayout2 예제 다시 만들어 보기
            datas3: [
                {name:"소담카페", message:"",img: require('C:/Users/PC/AndroidStudioProjects/test5/images/1.jpg')},
                {name:"앤로스터리", message:"",img: require('C:/Users/PC/AndroidStudioProjects/test5/images/2.jpg')},
            ],
            datas4: [
                {name1:"C카페", message1:"", img1: require('C:/Users/PC/AndroidStudioProjects/test5/images/1.jpg')},
                {name1:"D앤로스터리", message1:"", img1: require('C:/Users/PC/AndroidStudioProjects/test5/images/2.jpg')},
            ],


        };
    }

    render(){

        // 대량의 데이터의 각 아이템에 [key]라는 이름의 프로퍼티가 존재해야만 함.
        // 기존의 배열 요소 객체들의 key라는 이름의 프로퍼티(멤버 변수)를 추가하기
        // 배열의 요소 개수만큼 요소들을 순회하면서 파라미터로 전달된 콜백함수 호출하는 forEach()
        // this.state.datas3.forEach((element, index)=>{
        //     element.key= index; //배열요소에 새로운 멤버 key 추가하기!!
        // });


        return(
            <View style={style.root}>

                <Text style={style.titleText}>잔잔한 음악이 있는 곳</Text>
                <FlatList
                    data={this.state.datas3}
                    horizontal = {true}
                    renderItem={this.renderItem}
                    // FlatList의 속성: 각 요소에 키를 추출해주는 콜백함수 지정
                    keyExtractor={ item=> item.name }>

                </FlatList>

               <Text style={style.SecondText}> 콘센트가 많아요 </Text>
                <FlatList
                    data={this.state.datas4}
                    horizontal = {true}
                    renderItem={this.renderItem}
                    // FlatList의 속성: 각 요소에 키를 추출해주는 콜백함수 지정
                    keyExtractor={ item=> item.name }>
                </FlatList>


            </View>

        );
    }//render method ..

    //멤버 메소드 - FlatList의 renderItem용
    renderItem=({item})=>{
        return(
            <TouchableOpacity style={style.itemView} onPress={()=>{alert(item.name);}}>
                <Image source={item.img} style={style.itemImg}></Image>
                <View style={{flexDirection:'column'}}>
                    <Text style={style.itemName}>{item.name}</Text>
                    <Text style={style.itemMsg}>{item.message}</Text>
                  </View>

                <Image source={item.img1} style={style.itemImg1}></Image>
                <View style={{flexDirection:'column'}}>
                    <Text style={style.itemName1}>{item.name1}</Text>
                    <Text style={style.itemMsg1}>{item.message1}</Text>
                  </View>
            </TouchableOpacity>





        );
    }

}//Main class..

const style= StyleSheet.create({
    /* 잔잔한 음악이 있는 곳 */
    root:{flex:1, padding:16,},
    titleText:{
        fontSize:24,
        color:'black',
        fontWeight:'bold',
        textAlign:'left',
        paddingBottom:16,
    },
    itemView:{
        flexDirection:'column',
        borderWidth:0,
        borderRadius:10,
        padding:1,
        marginBottom:400,
    },
    itemImg:{
        width:150,
        height:200,
        resizeMode:'cover',
        marginRight:8,
    },
    itemName:{
        fontSize:15,
        fontWeight:'bold',
        fontStyle:'italic'
    },
    itemMsg:{
        fontSize:16,
        fontStyle:'italic',
    },

    /* 콘센트가 많아요 */
    SecondText:{
        fontSize:24,
        color:'black',
        fontWeight:'bold',
        textAlign:'left',
        paddingBottom:16,
        top:0,
    },
    itemView1:{
        flexDirection:'column',
        borderWidth:0,
        borderRadius:10,
        padding:1,
        marginBottom:400,
    },
    itemImg1:{
        width:150,
        height:200,
        resizeMode:'cover',
        marginBottom:200,
        marginRight:8,
    },
    itemName1:{
        fontSize:15,
        fontWeight:'bold',
        fontStyle:'italic'
    },
    itemMsg1:{
        fontSize:16,
        fontStyle:'italic',
    },
});
