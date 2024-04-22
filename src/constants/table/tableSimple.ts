export type typecol = [keyof typeof typeColumn];

export const typeColumn = {
  user: 1,
  Country: 2,
  Status: 3,
  Score: 4,
} as const;
