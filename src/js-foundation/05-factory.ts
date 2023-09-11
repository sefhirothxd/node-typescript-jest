
interface BuildMakerPersonOption {
	getId:()=>string;
	getAge: (birthDate:string)=>number;
}

interface PersonOptions{
	name:string;
	birthDate:string;
}

export const buildMakePerson = ({ getId, getAge }:BuildMakerPersonOption) => {
	return ({ name, birthDate }:PersonOptions) => {
		return {
			id: getId(),
			name,
			birthDate,
			age: getAge(birthDate),
		};
	};
};

// const jhon = buildPerson(obj);

// console.log(jhon);


