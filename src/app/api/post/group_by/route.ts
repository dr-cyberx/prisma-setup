import prisma from "@/lib/prisma";

export async function GET() {
  const groupByData = await prisma.post.groupBy({
    by: ["authorId"],
    _max: {
      likeNum: true,
    },
    _min: {
      likeNum: true,
    },
    _avg: {
      likeNum: true,
    },
    _sum: {
      likeNum: true,
    },
  });

  return new Response(JSON.stringify(groupByData));
}
