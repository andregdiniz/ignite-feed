import { Header } from "./components/Header";

import "./global.css";
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper} >
        <Sidebar />

        <main>
          <Post
            author="André Diniz."
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolore reprehenderit nobis ipsum odit. Similique veritatis dolor dolore, repudiandae distinctio laboriosam laborum dolorum! Nemo quisquam quam aperiam recusandae neque earum."
          />
          <Post
            author="Diego Fernandes."
            content="Post muito Legal."
          />
        </main>
      </div>
    </>
  )
}

export default App
