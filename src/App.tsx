import { Admin, Resource, houseDarkTheme } from "react-admin";
import { dataProvider } from "./dataProvider";
import PostList from "./ui/posts/PostList";
import PostCreate from "./ui/posts/PostCreate";
import PostEdit from "./ui/posts/PostEdit";
import PostShow from "./ui/posts/PostShow";
import CommentList from "./ui/comments/CommentList";
import CommentCreate from "./ui/comments/CommentCreate";
import CommentEdit from "./ui/comments/CommentEdit";
import CommentShow from "./ui/comments/CommentShow";

export const App = () => (
  <Admin dataProvider={dataProvider} theme={houseDarkTheme}>
    <Resource
      name="posts"
      options={{ label: "publication" }}
      list={PostList}
      create={PostCreate}
      edit={PostEdit}
      show={PostShow}
    />
     <Resource
      name="comments"
      options={{ label: "commentaires" }}
      list={CommentList}
      create={CommentCreate}
      edit={CommentEdit}
      show={CommentShow}
    />
    <Resource name="users" recordRepresentation="name"  />
  </Admin>
);