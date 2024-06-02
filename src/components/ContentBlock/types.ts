import { TFunction } from "react-i18next";
export interface ContentBlockProps {
  icon: string;
  videoId?: string;
  title: string;
  content: string;
  section?: {
    title: string;
    content: string;
    icon: string;
    videoId: string;
  }[];
  button?: (
    | {
        title: string;
        color?: undefined;
      }
    | {
        title: string;
        color: string;
      }
  )[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
}
