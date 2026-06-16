import { Helmet } from "react-helmet";
import { seo } from "../const/const";

type ServiceKey = keyof typeof seo.services;

export const useSeoHelmet = (pageKey: ServiceKey) => {
  const s = seo.services[pageKey];

  return (
    <Helmet>
      <title property="title" content={s.title}>
        {s.title}
      </title>
      <meta name="description" content={s.desc} />
      <meta property="og:title" content={s.title} />
      <meta property="og:description" content={s.desc} />
      <meta property="og:image" content={`https://www.fonel.ca/${s.img}`} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={s.title} />
      <meta name="twitter:description" content={s.desc} />
      <meta name="twitter:image" content={`https://www.fonel.ca/${s.img}`} />
    </Helmet>
  );
};
