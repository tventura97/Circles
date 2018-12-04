//
//  App.js
//  circlez
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import { Font, DangerZone } from "expo"
import CreateHangout4 from "./App/CreateHangout4/CreateHangout4"
import CreateHangout3 from "./App/CreateHangout3/CreateHangout3"
import CreateHangout5 from "./App/CreateHangout5/CreateHangout5"
import React from "react"
import CreateHangout1 from "./App/CreateHangout1/CreateHangout1"
import { createStackNavigator, createAppContainer } from "react-navigation"
import CreateHangout2 from "./App/CreateHangout2/CreateHangout2"
const PushRouteOne = createStackNavigator({
	CreateHangout1: {
		screen: CreateHangout1,
		name: ''
	},
	CreateHangout2: {
		screen: CreateHangout2,
	},
	CreateHangout3: {
		screen: CreateHangout3,
	},
	CreateHangout4:{
		screen: CreateHangout4,
	},
	CreateHangout5:{
		screen: CreateHangout5,
	}
}, {
	initialRouteName: "CreateHangout1",
})
const RootNavigator = createStackNavigator({
	PushRouteOne: {
		screen: PushRouteOne,
	},
}, {
	mode: "modal",
	headerMode: "none",
	initialRouteName: "PushRouteOne",
})

const AppContainer = createAppContainer(RootNavigator)



export default class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			fontsReady: false,
		}
	}

	componentDidMount() {
		this.initProjectFonts()
	}

	async initProjectFonts() {

		await Font.loadAsync({
			"Nunito-Light": require("./assets/fonts/NunitoLight.ttf"),
			"Nunito-Regular": require("./assets/fonts/NunitoRegular.ttf"),
			"Nunito-Bold": require("./assets/fonts/NunitoBold.ttf"),
		})
		this.setState({
			fontsReady: true,
		})
	}
	
	render() {

		if (!this.state.fontsReady) { return (<Expo.AppLoading/>); }
		return <AppContainer/>
	}
}
