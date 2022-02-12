import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require("C:/Users/PC/AndroidStudioProjects/test5/images/1.jpg"),
        ("C:/Users/PC/AndroidStudioProjects/test5/images/2.jpg"),

      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          images={this.state.images}
          sliderBoxHeight={200}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
        />
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});