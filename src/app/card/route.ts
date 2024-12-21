import { cards } from "./data";

export async function GET() {
  return Response.json(cards);
}

export async function POST(request: Request) {
  const card = await request.json();
  const newCard = {
    id: cards.length + 1,
    title: card.title,
  };
  cards.push(newCard);
  return new Response(JSON.stringify(newCard), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
