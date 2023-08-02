interface User {
  username: string,
  profile_pic: string
}

export interface postInterface {
  id: int,
  title: string,
  body: string,
  created_at: string,
  updated_at: string,
  user_id: int,
  photos: Array,
  user: User
}