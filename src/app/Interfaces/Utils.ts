export interface PostData {
  currentUser: User;
  comments:    Comment[];
}

/*export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies?: Comment[];
  replyingTo?: string;
}*/

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
  replies?: Comment[];
  replyingTo?: string;
}

export interface Reply{
  content: string;
  createdAt: string;
  id: number;
  replyingTo?: string;
  score: number;
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
  replies?: Comment[];
}

export interface User {
  image:    Image;
  username: string;
}

export interface Image {
  png:  string;
  webp: string;
}
