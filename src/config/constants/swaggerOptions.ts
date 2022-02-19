export const options = {
	definition:{
		openapi: "3.0.0",
		info:{
			title: "User service",
			version: "1.0.0",
			description: "Manage users service "
		},
		servers: [
			{
				url:"http://localhost:3000"
			}
		]
	},
	apis: ["./src/config/routes/*.ts"]
};