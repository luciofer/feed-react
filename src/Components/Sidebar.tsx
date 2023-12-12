import { PencilSimpleLine } from '@phosphor-icons/react'
import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'


export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className={styles.profile}>
            <Avatar src="https://media.licdn.com/dms/image/D4D03AQHpQ13Iz9Ps0w/profile-displayphoto-shrink_800_800/0/1692132894255?e=1707350400&v=beta&t=mzgF0v59NcabLRk_aYK0-s9qhtB6GVpbfwSuIFaAljw" />
                <strong>Lucio Araujo</strong>
                <span>Software Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilSimpleLine size={20}/> 
                    Edit profile
                </a>
            </footer>
        </aside>
    )
}