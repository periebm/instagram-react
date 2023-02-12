export default function Post(props){
    return(
      <>
      <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.img_user} alt={props.user} />
          {props.user}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>
  
      <div class="conteudo">
        <img src={props.img_post} alt="" />
      </div>
  
      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>
  
        <div class="curtidas">
          <img src={props.user_like_img} alt="" />
          <div class="texto">
            Curtido por <strong>{props.user_like}</strong> e{" "}
            <strong>outras {props.likes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
    </>
    )
  }