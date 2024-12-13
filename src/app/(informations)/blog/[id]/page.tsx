import { articles } from "@/app/data";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const article = articles.find(
    (element) => element.id === parseInt(params.id)
  );
  return {
    title: article?.title,
    description: article?.description,
  };
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = articles.find(
    (element) => element.id === parseInt(params.id)
  );
  const link = "/blog";

  if (parseInt(params.id) > articles.length) {
    notFound();
  }
  return (
    <>
      {article && (
        <div style={{ padding: "2rem" }}>
          <h2>{article.title}</h2>

          <p>{article.description}</p>
          <p>
            rédigé par {article.author} le {article.date}
          </p>
          <Link style={{ color: "blue" }} href={link}>
            Liste des articles
          </Link>
        </div>
      )}
    </>
  );
}
