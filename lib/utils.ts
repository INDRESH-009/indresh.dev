import { format } from "date-fns";

export const fmtDate = (d?: string) => (d ? format(new Date(d), "PPP") : "—");

export const twoLine = (s?: string) =>
  (s ?? "").replace(/\s+/g, " ").trim();
