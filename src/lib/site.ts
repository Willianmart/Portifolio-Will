/** Resolve public asset paths under optional basePath (GitHub Pages). */
export function withBasePath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path.startsWith("/")) return path;
  if (!base) return path;
  return `${base}${path}`;
}
