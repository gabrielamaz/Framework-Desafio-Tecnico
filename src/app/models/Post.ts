export interface Post {
  id: number,
  userId: number,
  username: string,
  title: string,
  body: string,
  hide?: boolean
}