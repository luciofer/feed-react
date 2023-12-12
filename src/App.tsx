import './global.css'
import styles from './App.module.css'

import { Header } from './Components/Header'
import { Sidebar } from './Components/Sidebar'
import { Post } from './Components/Post'

export interface Author {
  name: string
  role: string
  avatarUrl: string
}

export interface Content {
  type: 'paragraph' | 'link'
  content: string
}

interface Post {
  id: number
  author: Author
  content: Content[]
  publishedAt: Date
}


const posts: Post[] = [
    {
      id: 1,
      author: {
        avatarUrl:"https://media.licdn.com/dms/image/D4D03AQHpQ13Iz9Ps0w/profile-displayphoto-shrink_800_800/0/1692132894255?e=1707350400&v=beta&t=mzgF0v59NcabLRk_aYK0-s9qhtB6GVpbfwSuIFaAljw",
        name: "Lucio Araujo",
        role: "Software Developer"
      },
      content: [
        {type: 'paragraph', content: 'Hey there 👋'},
        {type: 'paragraph', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate molestias sint numquam quidem, corporis, ipsa magni ducimus vel pariatur officia architecto maiores nostrum voluptas nisi non voluptates animi consectetur adipisci. 🚀'},
        {type: 'link', content: 'lf.dev/newproject'},
      ],
      publishedAt: new Date('2023-12-07 17:00:00')
    },
    {
      id: 2,
      author: {
        avatarUrl:"https://media.licdn.com/dms/image/D4D03AQFUIaMMNRQG7Q/profile-displayphoto-shrink_800_800/0/1686611375662?e=1707350400&v=beta&t=EYdp8K0HfBGLqEKPVM46M9Wggj57QMAmTYAzAEkJJ6g",
        name: "John Doe",
        role: "Software Engineer"
      },
      content: [
        {type: 'paragraph', content: 'Hey there 2 👋'},
        {type: 'paragraph', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate molestias sint numquam quidem, corporis, ipsa magni ducimus vel pariatur officia architecto maiores nostrum voluptas nisi non voluptates animi consectetur adipisci. 🚀'},
        {type: 'link', content: 'lf.dev2/newproject'},
      ],
      publishedAt: new Date('2023-12-08 11:00:00')
    },
];

export function App() {
  return (
    <>
    <Header />

    <div className={styles.wrapper}>

      <Sidebar />
      <main>
        {posts.map(post => {
          return (
            <Post
              key={post.id} 
              author={post.author}
              postContent={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}
      </main>

    </div>

    </>
  )
}
