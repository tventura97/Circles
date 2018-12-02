//
//  CreateHangout5.js
//  circlez
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native"
import React from "react"


export default class CreateHangout5 extends React.Component {

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

	onDoneButtonPressed = () => {

	}

	render() {

		return <View
				pointerEvents="box-none"
				style={styles.createhangout5View}>
				<TouchableOpacity
					onPress={this.onBackButtonPressed}
					style={styles.backbuttonButton}>
					<Image
						style={styles.backbuttonButtonImage}
						source={require("./../../assets/images/backButton.png")}/>
				</TouchableOpacity>
				<Image
					source={require("./../../assets/images/logo-2.png")}
					style={styles.logoImage}/>
				<Text
					style={styles.reviewYourHangoutText}>review your hangout agenda</Text>
				<View
					pointerEvents="box-none"
					style={styles.agendaView}>
					<View
						pointerEvents="box-none"
						style={styles.googleMapsInfoView}>
						<View
							pointerEvents="box-none"
							style={styles.groupView}>
							<View
								pointerEvents="box-none"
								style={{
									flex: 1,
									flexDirection: "column",
									justifyContent: "flex-end",
								}}/>
						</View>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						flex: 1,
						flexDirection: "column",
						justifyContent: "flex-end",
					}}>
					<TouchableOpacity
						onPress={this.onDoneButtonPressed}
						style={styles.donebuttonButton}>
						<Text
						style={styles.donebuttonButtonText}>done</Text>
					</TouchableOpacity>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	createhangout5View: {
		backgroundColor: 'rgb(250, 250, 250)',
		flex: 1,
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
	logoImage: {
		resizeMode: "stretch",
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		width: 73,
		height: 82,
		marginTop: -30,
		alignSelf: "center",
	},
	reviewYourHangoutText: {
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
	agendaView: {
		backgroundColor: 'rgb(255, 255, 255)',
		borderRadius: 10,
		shadowColor: 'rgba(0, 0, 0, 0.11)',
		shadowRadius: 5,
		shadowOpacity: 1,
		width: 301,
		height: 444,
		marginTop: 26,
		alignSelf: "center",
	},
	donebuttonButton: {
		backgroundColor: 'rgb(250, 250, 250)',
		borderRadius: 32.5,
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
	donebuttonButtonImage: {
		resizeMode: "contain",
	},
	donebuttonButtonText: {
		color: 'rgb(0, 0, 0)',
		fontFamily: "Nunito-Bold",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		lineHeight: 0,
		letterSpacing: 0,
	},
	googleMapsInfoView: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		width: 256,
		height: 72,
		marginTop: 147,
		alignSelf: "center",
		justifyContent: "center",
	},
	groupView: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		width: 130,
		height: 50,
		marginRight: 12,
		alignSelf: "flex-end",
	},
})
