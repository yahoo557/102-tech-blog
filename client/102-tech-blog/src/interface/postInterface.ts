import type Tag from "@/interface/tagInterface"

export default interface Post {
  id?: number;
  title?: string;
  body?: string;
  createdAt?: string;
  updatedAt?: string;
  tags?:Tag[]
  visibility?:boolean;
}


