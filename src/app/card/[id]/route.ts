import { cards } from "../data";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const card = cards.find((card) => card.id === parseInt(params.id));
  return Response.json(card);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const title = body.title;
  const index = cards.findIndex((card) => card.id === parseInt(params.id));

  cards[index].title = title;
  return Response.json(cards[index].title);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const index = cards.findIndex((card) => card.id === parseInt(params.id));
  const deleteCard = cards[index];
  cards.splice(index, 1);
  return Response.json(deleteCard);
}
