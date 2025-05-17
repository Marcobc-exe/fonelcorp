import type { FC } from "react";
import type { seo } from "../../const/const";
import { useSeoHelmet } from "../../hooks/useSeoHelmet";

type SeoHelmetProps = {
  pageKey: keyof typeof seo.services;
};

export const SeoHelmet: FC<SeoHelmetProps> = ({ pageKey }) => {
  return useSeoHelmet(pageKey);
};
