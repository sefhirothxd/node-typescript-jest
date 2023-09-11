interface Users {
	id:number,
	name:string
}

const users:Users[] = [
	{
		id: 1,
		name: 'Jhon Doe',
	},
	{
		id: 2,
		name: 'Jane Doe',
	},
];

export const  getUserById = (id:number, cb:(err?:string, user?:Users)=>void)=> {
	const user = users.find((user) => user.id === id);

	user ? cb(undefined,user) : cb(`User not found with id ${id}`)
}

