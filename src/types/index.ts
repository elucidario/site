export type Email = string;
export type Name = string;
export type Title = string;
export type Description = string;
export type Keywords = string[];
export type Image = string;

export type Author = {
    name: Name;
    email: Email;
    description: Description;
    image: Image;
};

export type Authors = Record<Email, Author>;
