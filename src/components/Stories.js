import Story from "./Story"

export default function Stories() {
  const stories_obj = [
    {user: "9gag", img: "assets/img/9gag.svg"},
    {user: "meowed", img: "assets/img/meowed.svg"},
    {user: "barked", img: "assets/img/barked.svg"},
    {user: "nathanwpylestrangeplanet", img: "assets/img/nathanwpylestrangeplanet.svg"},
    {user: "wawawicomics", img: "assets/img/wawawicomics.svg"},
    {user: "respondeai", img: "assets/img/respondeai.svg"},
    {user: "filomoderna", img: "assets/img/filomoderna.svg"},
    {user: "memeriagourmet", img: "assets/img/memeriagourmet.svg"},
  ]

  return (
  <div class="stories">
    {stories_obj.map((s) => <Story user={s.user} img={s.img}/>)}

    <div class="setinha">
    <ion-icon name="chevron-forward-circle"></ion-icon>
    </div>
  </div>
  )
}

