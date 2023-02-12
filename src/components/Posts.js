import Post from "./Post"

export default function Posts(){
  let posts_data = [
    {user: "meowed", img_user: "assets/img/meowed.svg",img_post: "assets/img/gato-telefone.svg",user_like: "respondeai", user_like_img:"assets/img/respondeai.svg", likes: 101523},
    {user: "barked", img_user: "assets/img/barked.svg",img_post: "assets/img/dog.svg", user_like: "adorable animals", user_like_img: "assets/img/adorable_animals.svg", likes: 99159},
    {user: "9gag", img_user: "assets/img/9gag.svg",img_post: "assets/img/9gagpost.jpeg", user_like: "bad.vibes.memes", user_like_img: "assets/img/bad.vibes.memes.svg", likes: 56932}

  ]

    return(
        <div class="posts">

      {posts_data.map((p) => <Post user={p.user} img_user={p.img_user} img_post={p.img_post} user_like={p.user_like} user_like_img={p.user_like_img} likes={p.likes}/>)}

      </div>
    )
}
