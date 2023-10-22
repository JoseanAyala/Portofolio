export type Content = {
  title: string;
  subTitle: string;
  href: string;
  date: string;
  description: string;
  tags: string[];
};

export type ContentList = Content[];

export type User = { name: string; email: string; img: string; token: string };

export type Articles = {
  id: string;
  title: string;
  body: string;
  dateCreated: string;
  dateUpdated: string;
};
