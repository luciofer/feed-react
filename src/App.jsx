import './global.css'
import styles from './App.module.css'

import { Post } from './Post'
import { Header } from './Components/Header'
import { Sidebar } from './Components/Sidebar'



export function App() {
  return (
    <>
    <Header />

    <div className={styles.wrapper}>

    <Sidebar />
    
    <main>
    <Post 
      author = "LF"
      content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, blanditiis molestias nostrum ipsam temporibus commodi consequatur. Illo quibusdam ipsa atque itaque vitae. Sint accusamus eum non. Ducimus sint exercitationem ipsum."
    />
    <Post 
      author = "LF 2"
      content = "Lorem impsum 2"
    />
    </main>

    </div>

    </>
  )
}
