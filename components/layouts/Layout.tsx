import { FC } from "react";
import Head from "next/head";
import { NavBar } from "../ui";

interface Props {
  title?: string;
}
const origin = typeof window === "undefined" ? "" : window.location.origin;
export const Layout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Jc Ayala" />
        <meta name="description" content="Informacion sobre el pokemon XXXX" />
        <meta name="keywords" content="pokemon, pokedex" />
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la página sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <NavBar />
      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
