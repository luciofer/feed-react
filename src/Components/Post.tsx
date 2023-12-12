import { format, formatDistanceToNow } from 'date-fns'
// import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import {Author, Content } from '../App'


interface PostProps {
    author: Author
    publishedAt: Date
    postContent: Content[]
}

export function Post({ author, publishedAt, postContent }: PostProps){

    const [comments, setComments] = useState([
        'Awsome Post',
    ])

    const [newCommentText, setNewCommentText] = useState('')


    const publishedDateFormatted = format(publishedAt, "MMMM dd 'at' hh:mm a")

    // const publishedDateFormatted = format(publishedAt, "MMMM dd 'at' hh:mm a", {
    //     locale: ptBR,
    // })

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()

        setComments([...comments, newCommentText])

        setNewCommentText('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('This field is required.')
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })
        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentText.length === 0

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        addSuffix: true
    })

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src= {author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow} 
                </time>

            </header>

            <div className={styles.content}>
                {postContent.map( item => {
                    if (item.type === 'paragraph') {
                        return <p key={item.content}>{item.content}</p>
                    } else if (item.type === 'link') {
                        return <p key={item.content}><a href="#">{item.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong> Leave a comment!</strong>
                <textarea
                    name='comment'
                    placeholder='Send a comment...'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>
                            Publish
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                    <Comment 
                        key = {comment} 
                        content = {comment} 
                        onDeleteComment={deleteComment} 
                    />)
                })}
            </div>

        </article>
    )
}

