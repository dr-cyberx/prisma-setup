// import { PrismaClient, Prisma } from "@prisma/client";
// import { faker } from "@faker-js/faker";
// import { techTerms } from "../src/lib/dummy-data";

// const prisma = new PrismaClient();

// function getRandomItemFromArray(array: any[]) {
//   // Generate a random index
//   const randomIndex = Math.floor(Math.random() * array.length);

//   // Return the random item from the array
//   return array[randomIndex];
// }

// // const category1 = getRandomItemFromArray(techTermsDataJson.techTerms)
// // const category2 = getRandomItemFromArray(techTermsDataJson.techTerms)
// // const category = getRandomItemFromArray(techTermsDataJson.techTerms)

// const userData: Prisma.UserCreateInput[] = Array.from({ length: 100 }, () => {
//   const name = faker.person.firstName();
//   const email = `${name}@prisma.io`;
//   return {
//     name,
//     email,
//     posts: {
//       create: [
//         {
//           title: faker.lorem.sentence(),
//           likeNum: faker.number.int({ max: 5000, min: 200 }), // Corrected property name
//           published: faker.datatype.boolean(),
//           category: {
//             create: [
//               ...techTerms.map((item: any) => ({ name: item })),
//               // {
//               //   // @ts-ignore
//               //   name: getRandomItemFromArray(techTermsDataJson.techTerms),
//               // },
//               // {
//               //   // @ts-ignore
//               //   name: getRandomItemFromArray(techTermsDataJson.techTerms),
//               // },
//             ],
//           },
//         },
//         {
//           title: faker.lorem.sentence(),
//           likeNum: faker.number.int({ max: 5000, min: 200 }), // Corrected property name
//           published: faker.datatype.boolean(),
//           category: {
//             // create: {
//             //   name: getRandomItemFromArray(techTermsDataJson.techTerms),
//             // },
//             connect: [
//               {
//                 id: faker.number.int({ max: 5000, min: 200 }),
//               },
//             ],
//           },
//         },
//       ],
//     },
//   };
// });

// async function main() {
//   console.log(`Start seeding ...`);
//   console.log(userData);
//   setTimeout(async () => {
//     for (const u of userData) {
//       try {
//         const user = await prisma.user.create({
//           data: u,
//         });
//         console.log(`Created user with id: ${user}`);
//       } catch (error) {
//         if (
//           error instanceof Prisma.PrismaClientKnownRequestError &&
//           error.code === "P2002"
//         ) {
//           console.error(`Failed to create user: ${error.message}`);
//           // Handle the error, such as logging or skipping the current user
//         } else {
//           throw error; // Re-throw other errors
//         }
//       }
//     }
//     console.log(`Seeding finished.`);
//   }, 2000);
// }

// ---current ----
import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function seed() {
  try {
    // Create 100 users
    for (let i = 0; i < 100; i++) {
      const user = await prisma.user.create({
        data: {
          name: faker.person.firstName(),
          email: faker.internet.email(),
          posts: {
            create: Array.from({
              length: Math.floor(Math.random() * 100) + 1,
            }).map(() => ({
              title: faker.lorem.sentence(),
              likeNum: faker.number.int({ min: 1, max: 53 }),
              published: faker.datatype.boolean(),
              category: {
                // create: [
                //   {
                //     name: "Data Base",
                //   },
                //   {
                //     name: "Big Data",
                //   },
                // ],
                connect: {
                  id: faker.number.int({ min: 1, max: 53 }),
                },
              },
            })),
          },
        },
      });
      console.log(`Created user with id: ${user.id}`);
    }
    console.log("Seeding finished.");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

// import { PrismaClient } from '@prisma/client';
// import { techTerms } from '../src/lib/dummy-data'; // Assuming the techTerms array is in a separate file

// const prisma = new PrismaClient();

// async function seed() {
//   try {
//     // Create categories based on techTerms
//     for (const term of techTerms) {
//       const category = await prisma.category.create({
//         data: {
//           name: term,
//         },
//       });
//       console.log(`Created category with name: ${category.name}`);
//     }
//     console.log('Seeding finished.');
//   } catch (error) {
//     console.error('Error seeding data:', error);
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// seed();

// ----- first code -----

// import { PrismaClient, Prisma } from "@prisma/client";

// const prisma = new PrismaClient();

// const userData: Prisma.UserCreateInput[] = [
//   {
//     name: "John",
//     email: "John@prisma.io",
//     posts: {
//       create: [
//         {
//           title: "Join the Prisma Slack",
//           published: true,
//           likeNum: 10,
//           category: {
//             create: [
//               {
//                 name: "Data Base",
//               },
//               {
//                 name: "Big Data",
//               },
//             ],
//           },
//         },
//         {
//           title: "Follow Prisma on Twitter",
//           category: {
//             connect: [
//               {
//                 id: 1,
//               },
//             ],
//           },
//           published: true,
//         },
//       ],
//     },
//   },
//   {
//     name: "Jack",
//     email: "jack@prisma.io",
//     posts: {
//       create: [
//         {
//           title: "Follow Prisma on Twitter",
//           category: {
//             connect: [
//               {
//                 id: 1,
//               },
//             ],
//           },
//           published: true,
//         },
//       ],
//     },
//   },
//   {
//     name: "sara",
//     email: "sara@prisma.io",
//     posts: {
//       create: [
//         {
//           title: "Ask a question about Prisma on GitHub",

//           published: true,
//           category: {
//             connect: [
//               {
//                 id: 2,
//               },
//             ],
//           },
//         },
//         {
//           title: "Prisma on YouTube",
//           category: {
//             connect: [
//               {
//                 id: 1,
//               },
//             ],
//           },
//         },
//       ],
//     },
//   },
// ];

// async function main() {
//   console.log(`Start seeding ...`);
//   for (const u of userData) {
//     const user = await prisma.user.create({
//       data: u,
//     });
//     console.log(`Created user with id: ${user.id}`);
//   }
//   console.log(`Seeding finished.`);
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
