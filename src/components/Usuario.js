
export default function Usuario(props){

    return(
        <div class="usuario">
        <img src={props.img} alt="imagem de perfil" />
        <div class="texto">
          <span>
            <strong>{props.name}</strong>
            <ion-icon name="pencil"></ion-icon>
          </span>
        </div>
      </div>
    )
}