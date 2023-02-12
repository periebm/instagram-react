import Sugestoes from "./Sugestoes"
import Usuario from "./Usuario"

export default function SideBar(){
    let user_data = {
      name:"catanacomics", img:"assets/img/catanacomics.svg"
    }

    return(
        <div class="sidebar">

        <Usuario name={user_data.name} img={user_data.img}/>
        <Sugestoes/>

        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
          Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
      </div>
    )
}