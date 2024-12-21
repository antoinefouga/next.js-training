"use client";
import { useRouter } from "next/navigation";

export default function CV() {
  const router = useRouter();

  const handleSendContact = () => {
    console.info("formulaire de contact envoyé");
    router.push("/");
  };

  return (
    <>
      <h1>Contactez moi </h1>
      <button onClick={handleSendContact}>Valider le formulaire</button>
    </>
  );
}
