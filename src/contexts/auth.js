import React, { createContext, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import * as Auth from '../services/auth'

const objectFormat = {
	signed: Boolean,
	user: Object,
	loading: Boolean,
	signIn: Promise,
	SingOut: Function
}

const AuthContext = createContext(objectFormat)

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)


	useEffect(() => {
		async function loadStorage() {
			const storagedUser = await AsyncStorage.getItem('@RNAuth:user') //multiGet
			const storagedToken = await AsyncStorage.getItem('@RNAuth:user')

			// simulando um banco de dados lento...
			await new Promise(resolve => setTimeout(resolve, 1000))

			if (storagedUser && storagedToken) {
				setUser(JSON.parse(storagedUser))
				//api.defaults.headers.Authorization = `Bearer ${storagedToken}`
			}
			setLoading(false)
		}
		loadStorage()
	}, [])

	async function signIn() {
		const { user, token } = await Auth.signIn();

		setUser(user)
		//api.defaults.headers.Authorization = `Bearer ${token}
		await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(user))
		await AsyncStorage.setItem('@RNAuth:token', token)
	}


	function SingOut() {
		AsyncStorage.clear().then(() => {
			setUser(null)
			// setLoading(true)
		})
	}
	return (
		<AuthContext.Provider value={{ signed: !!user, user: user, loading, signIn, SingOut }}>
			{children}
		</AuthContext.Provider>
	)
}

// custom Hook ! ! !

export function useAuth() {
	return useContext(AuthContext)
}
