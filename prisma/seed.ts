// import { PrismaClient } from '@prisma/client'

// import { faker } from '@faker-js/faker'

// const prisma = new PrismaClient()

// async function main() {
//   const fakerRounds = 100

//   // --------- Deleteting  property  Records ---------------

//   console.log('Deleting Property Record ....')

//   await prisma.property.deleteMany()
//   console.log('Deleted records in category table')
//   console.log('Databse Seeding...')
//   for (let i = 0; i < fakerRounds; i++) {
//     await prisma.property.create({
//       data: {
//         name: faker.commerce.product(),
//         place: faker.address.cityName(),
//         description: faker.commerce.productDescription(),
//         price: faker.datatype.number(1000),
//         bed: faker.datatype.number(5),
//         bath: faker.datatype.number(5),
//         parking: faker.datatype.boolean(),
//         furnished: faker.datatype.boolean(),
//         isFeatured: faker.datatype.boolean(),
//         imageUrls: Array.from({ length: 5 }, () => faker.image.imageUrl()),
//       },
//     })
//   }
// }

// main().catch().finally()
