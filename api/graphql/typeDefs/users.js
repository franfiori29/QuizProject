const { gql } = require('apollo-server');

module.exports = gql`
	enum Role {
		USER
		ORG
		ADMIN
	}

	type User {
		_id: ID!
		firstName: String!
		lastName: String!
		email: String!
		profilePic: String!
		accountId: String
		socialAccount: String
		countryCode: Int!
		role: Role!
	}

	input UserInput {
		_id: ID!
		firstName: String!
		lastName: String!
		email: String!
		password: String
		profilePic: String!
		accountId: String
		socialAccount: String
		countryCode: Int!
		role: Role!
	}

	type Query {
		getUsers: [User]!
	}

	type Mutation {
		updateUser(user: UserInput): User!
	}
`;