const person: {
    name:string,
    age:number,
    hobbies:string[],
    role:[number, string]
} = {
    name: 'Jolyne Cujoh',
    age: 18,
    hobbies: ['Sewing', 'Punching'],
    role: [2, 'Prisoner']
};

console.log(person.name);

for(const hobby of person.hobbies) {
    console.log(hobby);
}