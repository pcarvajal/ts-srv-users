export const options = {
	definition:{
		openapi: "3.0.0",
		info:{
			title: "User service codominium",
			version: "1.0.0",
			description: "Maneja usuarios de condominio"
		},
		servers: [
			{
				url:"http://localhost:3000"
			}
		]
	},
	apis: ["./src/config/routes/*.ts"]
};