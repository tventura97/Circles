//
//  CreateHangout4.js
//  circlez
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native"
import React from "react"


export default class CreateHangout4 extends React.Component {

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

	onBackButtonPressed = () => {

		this.props.navigation.goBack()
	}
	onNextButtonPressed = () => {

		const { navigate } = this.props.navigation

		navigate("CreateHangout5")
	}

	render() {

		return <View
				pointerEvents="box-none"
				style={styles.createhangout4View}>
				<TouchableOpacity
					onPress={this.onBackButtonPressed}
					style={styles.backbuttonButton}>
					<Image
						style={styles.backbuttonButtonImage}
						source={require("./../../assets/images/backButton.png")}/>
				</TouchableOpacity>
				<Image
					source={require("./../../assets/images/logo.png")}
					style={styles.logoImage}/>
				<Text
					style={styles.giveYourHangoutAText}>give your hangout a date & time</Text>
				<View
					pointerEvents="box-none"
					style={{
						flex: 1,
						flexDirection: "column",
						justifyContent: "flex-end",
					}}>
					<TouchableOpacity
						onPress={this.onNextButtonPressed}
						style={styles.nextbuttonButton}>
						<Text
						style={styles.nextbuttonButtonText}>next</Text>
					</TouchableOpacity>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	createhangout4View: {
		backgroundColor: 'rgb(195, 203, 233)',
		flex: 1,
	},
	logoImage: {
		resizeMode: "stretch",
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		width: 73,
		height: 82,
		marginTop: -30,
		alignSelf: "center",
	},
	backbuttonButtonImage: {
		width:10,
		height:14,
	},
	backbuttonButtonText: {
		color: 'rgb(0, 0, 0)',
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0,
	},
	backbuttonButton: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		width: 31,
		height: 31,
		marginLeft: 30,
		marginTop: 48,
	},

	giveYourHangoutAText: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(0, 0, 0)',
		fontFamily: "Nunito-Light",
		fontSize: 30,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.94,
		width: 287,
		marginTop: 26,
		alignSelf: "center",
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
		marginBottom: 86,
		alignSelf: "center",
	},
	nextbuttonButtonText: {
		color: 'rgb(255, 255, 255)',
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
