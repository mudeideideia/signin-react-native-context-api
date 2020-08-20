export function signIn() {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve({
				token: 'iuyt8o65aser9t8u6a6axcasb6.a87h8s4tj8s7asger.ioadfvioi',
				user: {
					name: 'User',
					email: 'user@email.com'
				}
			})
		}, 2000)
	})
}