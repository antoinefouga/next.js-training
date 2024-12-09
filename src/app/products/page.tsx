import Link from "next/link";

export default function ProductList() {
  return (
    <>
      <h1>Liste de produits</h1>
      <Link href="products/1">Produit 1</Link>
      <Link href="products/2">Produit 2</Link>
      <Link href="products/3">Produit 3</Link>
    </>
  );
}
