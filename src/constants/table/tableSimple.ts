export type typecol = [keyof typeof typeColumn];

export const typeColumn = {
  id: 0,
  user: 1,
  Score: 2,
  Country: 3,
  Status: 4,
} as const;
