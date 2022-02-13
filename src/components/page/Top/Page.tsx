import Head from "next/head";

import { TopPageView } from "./View";

import type { NextPage } from "next";

export const TopPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>シンオウで育った同士へ</title>
        <meta
          name="description"
          content="聞こえてくる... おんみょ〜んの鐘の音が"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:image" content="/og.png" />
      </Head>

      <TopPageView />
    </>
  );
};
