import { faker } from '@faker-js/faker';


const rows = [
    {
        id: 1,
        username: faker.internet.userName(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(), 
        role: "admin",     
        status: "active",
        email: faker.internet.exampleEmail(),
        password: faker.date.recent(),
        age : 35
    },
    {
        id: 2,
        username: faker.internet.userName(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),  
        role: "agent",      
        status: "active",
        email: faker.internet.exampleEmail(),
        age :40
    },
    {
        id: 3,
        username: faker.internet.userName(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(), 
        role: "admin",       
        status: "active",
        email: faker.internet.exampleEmail(),
        age :65
    },
    {
        id: 4,
        username: faker.internet.userName(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(), 
        role: "agent",       
        status: "active",
        email: faker.internet.exampleEmail(),
        age :20
    },
    {
        id: 5,
        username: faker.internet.userName(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),  
        role: "agent",      
        status: "active",
        email: faker.internet.exampleEmail(),
        age :19
    },
    {
        id: 6,
        username: faker.internet.userName(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(), 
        role: "agent",       
        status: "active",
        email: faker.internet.exampleEmail(),
        age :45
    },
    {
        id: 7,
        username: faker.internet.userName(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),  
        role: "agent",      
        status: "active",
        email: faker.internet.exampleEmail(),
        age :40
    },
    {
        id: 8,
        username: faker.internet.userName(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(), 
        role: "agent",       
        status: "active",
        email: faker.internet.exampleEmail(),
        age :65
    },
    {
        id: 9,
        username: faker.internet.userName(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),  
        role: "agent",      
        status: "active",
        email: faker.internet.exampleEmail(),
        age :20
    },
    {
        id: 10,
        username: faker.internet.userName(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(), 
        role: "agent",       
        status: "active",
        email: faker.internet.exampleEmail(),
        age :19
    }
  ];


export { rows }