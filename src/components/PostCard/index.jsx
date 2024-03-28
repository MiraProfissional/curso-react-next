// export default function PostCard (props) {
    
//     const {posts} = props

//     return (
//         <div className="post-card">
//             <img src={posts.cover} alt={posts.title}></img>
//             <div key={posts.id} className="post-content">
//                 <h1>{posts.title}</h1>
//                 <p>{posts.body}</p>
//             </div>
//         </div>
//     )
// }

// Coletando as props atraves do destructuring
export default function PostCard ({id,title,body,cover}) {

    return (
        <div className="post-card">
            <img src={cover} alt={title}></img>
            <div className="post-content">
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        </div>
    )
}
