import PostCard from "../PostCard"

export const Posts = ({posts}) => (
    <div className="posts">
          {posts.map((posts) => ( 
            <PostCard 
              key={posts.id} // Sempre que tiver a funcao map, deve-se existir uma key
              id = {posts.id}
              title = {posts.title}
              body = {posts.body}
              cover = {posts.cover}
              // posts = {posts} Ao inves de passar os atributos, pode-se passar um objeto
            />
          ))}
        </div>
)