import Sugestao from "./Sugestao"

export default function Sugestoes(){
    const sug = [
      {user:"bad.vibes.memes", img: "bad.vibes.memes", reason: "Segue você"},
      {user:"chibirdart", img: "chibirdart", reason: "Segue você"},
      {user:"razoesparaacreditar", img: "razoesparaacreditar", reason: "Novo no Instagram"},
      {user:"adorable_animals", img: "adorable_animals", reason: "Segue você"},
      {user:"smallcutecats", img: "smallcutecats", reason: "Segue você"}
    ]
    return(
        <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {sug.map((s) => <Sugestao user={s.user} img={s.img} reason={s.reason}  />)}

      </div>
    )
}
