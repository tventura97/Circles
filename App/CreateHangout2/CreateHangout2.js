//
//  CreateHangout2.js
//
//
//  Created by .
//  Copyright © 2018 . All rights reserved.
//

import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native"
import React from "react"


export default class CreateHangout2 extends React.Component {

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

	onForwardButtonPressed = () => {

		const { navigation } = this.props;
		const name = navigation.getParam("name", "No Name")
		this.props.navigation.navigate("CreateHangout3", {name: name})

	}

	render() {


		return <View
				pointerEvents="box-none"
				style={styles.createhangout2View}>
				<Text
					style={styles.pickYourHangoutSText}>pick your hangout’s location</Text>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						width: "100%",
						height: "100%",
					}}>
					<View
						pointerEvents="box-none"
						style={{
							flexDirection: "row",
							alignSelf: "stretch",
						}}>
						<TouchableOpacity
							onPress={this.onBackButtonPressed}
							style={styles.backbuttonButton}>
							<Image
								style={styles.backbuttonButtonImage}
								source={require("./../../assets/images/backButton.png")}/>
						</TouchableOpacity>
						<View
							pointerEvents="box-none"
							style={{
								flexDirection: "row",
								flex: 1,
								justifyContent: "flex-end",
							}}>
							<TouchableOpacity
								onPress={this.onForwardButtonPressed}
								style={styles.forwardbuttonButton}>
								<Image
									style={styles.forwardbuttonButtonImage}
									source={require("./../../assets/images/forwardButton.png")}/>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	createhangout2View: {
		backgroundColor: 'rgb(250, 250, 250)',
		flex: 1,
	},
	pickYourHangoutSText: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(0, 0, 0)',
		fontFamily: "Nunito-Light",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.62,
		marginTop: 51,
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
	forwardbuttonButtonText: {
		color: 'rgb(0, 0, 0)',
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0,
	},
	forwardbuttonButtonImage: {
		width:10,
		height:14,
	},
	forwardbuttonButton: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		width: 31,
		height: 31,
		marginTop: 48,
		marginRight: 30,
	},
})
