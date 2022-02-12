import React, { Component } from "react";
import { Image } from "react-native";
import Logo from 'C:/Users/PC/AndroidStudioProjects/test5/icon/notice.png';

class DetailScreen
extends Component {
   render() {
        return (
            <Image
                style={{ width:50, height:50 }}
                source={Logo}
                resizeMode='contain'
            />

        )

    }

}



export default DetailScreen;

