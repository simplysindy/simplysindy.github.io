import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type ProjectLink = {
  label: string;
  url: string;
};
