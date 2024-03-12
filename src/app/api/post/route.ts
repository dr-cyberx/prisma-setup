import prisma from "@/lib/prisma";

export async function GET() {
  const posts = await prisma.post.findMany({
    where: {
      author: {
        // isNot: {
        //   // name: {
        //   //   contains: "s",
        //   //   mode: "insensitive",
        //   // },
        //   name: "john",
        // },
        isNot: {
          name: "jack",
        },
        is: {
          email: {
            startsWith: "j",
          },
        },
      },
    },
    // include: {
    //   author: true,
    //   category: true,
    // },
    // select: {
    //   title: true,
    //   author: true,
    // },
    select: {
      title: true,
      author: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });
  // console.log(posts);
  return new Response(JSON.stringify(posts));
}
