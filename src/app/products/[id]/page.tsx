export default function ProductDetails({ params }: { params: { id: string } }) {
  return <h1>Détails produit{params.id}</h1>;
}
