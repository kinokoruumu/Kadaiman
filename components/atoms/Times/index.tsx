import * as React from "react";
import {Image, TouchableOpacity, View, StyleSheet} from "react-native";

export default class Times extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<TouchableOpacity>
				<View style={styles.button}>
					<Image source={require('./img/times.png')} />
				</View>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	button: {
		paddingVertical: 10,
		paddingHorizontal: 20,
	}
})