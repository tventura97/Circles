//
//  CreateHangout3.js
//
//
//  Created by .
//  Copyright © 2018 . All rights reserved.
//

import { StyleSheet, TextInput, TouchableOpacity, View, Image, Text, Keyboard} from "react-native"
import React from "react"


export default class CreateHangout3 extends React.Component {

	static navigationOptions = ({ navigation }) => {

		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props);
	 	this.state = {
			description: '',
			text: '',
			height: 0}
	}

	componentDidMount() {

	}

	onBackButtonPressed = () => {

		this.props.navigation.goBack()
	}

	render() {

		return <View
				pointerEvents="box-none"
				style={styles.createhangout3View}>
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
					style={styles.giveYourHangoutAText}>give your hangout a description</Text>
				<TextInput
				{...this.props}
				multiline={true}
				blurOnSubmit={true}
     		onSubmitEditing={()=>{Keyboard.dismiss()}}
				onChangeText={(description, text) => {
            this.setState({ description, text })
        }}
				value={this.state.description}
        onContentSizeChange={(event) => {
            this.setState({ height: event.nativeEvent.contentSize.height })
        }}
        style={[styles.rectangleTextInput, {height: Math.max(100, this.state.height)}]}
/>
				<TouchableOpacity
					onPress={() =>{
						const { navigation } = this.props;
						const name = navigation.getParam("name", "No Name")
						this.props.navigation.navigate("CreateHangout4", {name: name, description: this.state.description})

					}}
					style={styles.nextbuttonButton}>
					<Text
					style={styles.nextbuttonButtonText}>next</Text>
				</TouchableOpacity>
			</View>
	}
}

const styles = StyleSheet.create({
	createhangout3View: {
		backgroundColor: 'rgb(213, 246, 199)',
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
		height: 82,
		marginTop: 26,
		alignSelf: "center",
	},
	rectangleTextInput: {
		backgroundColor: 'rgb(250, 250, 250)',
		borderRadius: 10,
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
		width: 301,
		height: 100,
		marginTop: 90,
		alignSelf: "center",
		paddingTop:10,
		paddingLeft:10,
		paddingBottom:10,
		paddingRight:10,
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
		marginTop: 90,
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
