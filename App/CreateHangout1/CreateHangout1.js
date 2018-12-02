//
//  CreateHangout1.js
//  circlez
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import { StyleSheet, TextInput, TouchableOpacity, View, Image, Text } from "react-native"
import React from "react"


export default class CreateHangout1 extends React.Component {

	static navigationOptions = ({ navigation }) => {

		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	onNextButtonPressed = () => {

		const { navigate } = this.props.navigation
		navigate("CreateHangout2")
	}

	render() {

		return <View
				pointerEvents="box-none"
				style={styles.createhangout1View}>
				<Image
					source={require("./../../assets/images/logo.png")}
					style={styles.logoImage}/>
				<Text
					style={styles.nameYourHangoutText}>name your hangout</Text>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						width: "100%",
						height: "100%",
						justifyContent: "center",
					}}>
					<TextInput
						style={styles.rectangleTextInput}/>
					<TouchableOpacity
						onPress={this.onNextButtonPressed}
						style={styles.nextbuttonButton}>
						<Text
							style={styles.nextbuttonButtonText}>
							next</Text>
					</TouchableOpacity>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	createhangout1View: {
		backgroundColor: 'rgb(255, 167, 179)',
		flex: 1,
	},
	logoImage: {
		resizeMode: "center",
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		width: 73,
		height: 82,
		marginTop: 112,
		alignSelf: "center",
	},
	nameYourHangoutText: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(0, 0, 0)',
		fontFamily: "Nunito-Light",
		fontSize: 30,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.94,
		marginTop: 75,
		alignSelf: "center",
	},
	rectangleTextInput: {
		backgroundColor: 'rgb(255, 255, 255)',
		borderRadius: 4,
		shadowColor: 'rgba(0, 0, 0, 0.11)',
		shadowRadius: 5,
		shadowOpacity: 1,
		color: 'rgb(0, 0, 0)',
		fontFamily: "Nunito-Regular",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
		width: 355,
		height: 45,
		alignSelf: "center",
		marginTop:100,
		marginBottom:50,
	},
	nextbuttonButton: {
		backgroundColor: 'rgb(153, 153, 153)',
		borderRadius: 25,
		shadowColor: 'rgba(0, 0, 0, 0.11)',
		shadowRadius: 5,
		shadowOpacity: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		width: 250,
		height: 52,
		alignSelf: "center",
	},
	nextbuttonButtonText: {
		color: 'white',
		fontFamily: "Nunito-Bold",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		lineHeight: 0,
		letterSpacing: 0,
	},
	nextbuttonButtonImage: {
		resizeMode: "contain",
	},
})
