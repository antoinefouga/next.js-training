export default function ProductComment({
  params,
}: {
  params: { id: string; commentId: string };
}) {
  return (
    <h1>
      Comment {params.commentId} for product {params.id}
    </h1>
  );
}
