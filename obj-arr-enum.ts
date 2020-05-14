enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Jolyne Cujoh',
    age: 18,
    hobbies: ['Sewing', 'Punching'],
    role: Role.ADMIN
};

console.log(person.name);

for(const hobby of person.hobbies) {
    console.log(hobby);
}

if(person.role === Role.AUTHOR) {
    console.log("is author");
}