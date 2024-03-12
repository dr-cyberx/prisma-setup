import prisma from "@/lib/prisma";

export async function GET() {
  const postByOrder = await prisma.post.findMany({
    select: {
      author: {
        select: {
          name: true,
          email: true,
        },
      },
      likeNum: true,
    },
    orderBy: {
      likeNum: "desc",
    },
  });
  console.log(postByOrder);

  return new Response(JSON.stringify(postByOrder));
}
