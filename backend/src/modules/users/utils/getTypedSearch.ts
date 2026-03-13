import type { Request } from "express";
import z from "zod";

const scheme = z.string();

export function getTypedSearch(req: Request) {
  const search = req.query.search;
  if (!search) return;
  const typedSearch = scheme.parse(search);
  return typedSearch;
}
