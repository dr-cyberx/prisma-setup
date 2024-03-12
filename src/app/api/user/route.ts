import prisma from "@/lib/prisma";

export async function GET() {
  //   const users = await prisma.user.findMany({
  //     where: {
  //       // Combine CONTAINS and UPPER/LOWER functions for case-insensitive matching
  //       name: {
  //         // startsWith: 'J'
  //         contains: 'a',
  //         mode:'insensitive'
  //       }
  //     },
  //   });

  const users = await prisma.user.findMany({
    where: {
      posts: {
        // every: {
        //   published: true,
        // },
        // some: {
        //   published: false,
        // },
        none: {
          published: false,
        },
      },
    },
  });
  // console.log(users);
  return new Response(JSON.stringify(users));
}
