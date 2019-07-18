import React, { Component } from "react";
import { Image, View } from "react-native";

export class Kodok extends Component {
  state = {
    muncul: false,
    urlKodok:
      "https://4.bp.blogspot.com/-1jTAdttD9BA/T_E659wgAII/AAAAAAAAAuM/3kag_IGSUBU/s1600/Keroppi.gif",
    urlMonyet:
      "https://as1.ftcdn.net/jpg/01/20/13/80/500_F_120138029_ENxUvcVHadpD8f0rwa7K7iIb5vk9hvYl.jpg"
  };

  componentDidMount() {
    if (this.props.i === this.props.muncul) {
      this.setState({
        muncul: true
      });
    } else {
      this.setState({
        muncul: false
      });
    }
  }

  render() {
    return this.props.muncul === this.props.i ? (
      <Image
        style={{ width: 30, height: 30 }}
        source={{
          uri: this.state.urlKodok
        }}
      />
    ) : (
      <Image
        style={{ width: 30, height: 30 }}
        source={{
          uri: this.state.urlMonyet
        }}
      />
    );
  }
}

export default Kodok;
