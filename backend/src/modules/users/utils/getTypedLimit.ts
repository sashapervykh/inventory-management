import type { Request } from "express";
import z from "zod";

const scheme = z.number();

export function getTypedLimit(req: Request) {
  const limit = req.query.limit;
  if (!limit) return;
  const typedLimit = scheme.parse(Number(limit));
  return typedLimit;
}
