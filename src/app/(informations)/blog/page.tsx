import Link from "next/link";
import { articles } from "@/app/data";
import { Article } from "@/app/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Antoine Fouga - Blog",
  description: "Bienvenue sur mon blog",
};

export default function Blog() {
  return (
    <>
      <h1 className="text-4xl">Bienvenue sur mon blog !</h1>
      {articles.map((article: Article) => {
        const link = `blog/${article.id}`;
        return (
          <div
            key={article.id}
            style={{
              padding: "1rem",
            }}
          >
            <h2>{article.title}</h2>

            <p>
              rédigé par {article.author} le {article.date}
            </p>
            <Link style={{ color: "blue" }} href={link}>
              Voir l`article
            </Link>
          </div>
        );
      })}
    </>
  );
}
