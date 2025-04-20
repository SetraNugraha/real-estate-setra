export const getImage = (path: string, image: string) => {
  return new URL(`../assets/${path}/${image}`, import.meta.url).href
}
