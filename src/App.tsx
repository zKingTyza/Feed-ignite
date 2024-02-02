import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

// author : { avatar_url: "", name: "",  role: "" }
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      AvatarUrl: "https://avatars.githubusercontent.com/u/105763970?v=4",
      name: "Alex Cabral",
      role: "CTO Zaleskis",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
    ],

    publisedAt: new Date("2024-01-12 11:00:00"),
  },
  {
    id: 2,
    author: {
      AvatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      name: "Diego Fernandes",
      role: "CTO RockeatSeat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
    ],

    publisedAt: new Date("2024-01-05 11:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content.map((item) => ({
                type: item.type as "paragraph" | "link",
                content: item.content,
              }))}
              publisedAt={post.publisedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
