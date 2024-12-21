import { cards } from "../data";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const card = cards.find((card) => card.id === parseInt(params.id));
  return Response.json(card);
}
