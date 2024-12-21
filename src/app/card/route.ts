import { card } from "./data";

export async function GET() {
  return Response.json(card);
}
