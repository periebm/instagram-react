import React from "react";


export default function Post(props){
  const [nameSaved,setName] = React.useState("bookmark-outline");
  const [heartName,setheartName] = React.useState("heart-outline");
  const [heartColor,setheartColor] = React.useState("");
  let [likeNumber, setLikeNumber] = React.useState(props.likes);

  function changeLike(from){
    if(heartName === "heart-outline" || from === "img"){
      if(heartName === "heart-outline") setLikeNumber(++likeNumber);
      setheartName("heart");
      setheartColor("vermelho");
    }

    else {
      setheartName("heart-outline");
      setheartColor("");
      setLikeNumber(--likeNumber);
    }
  }

    return(
      <>
      <div data-test="post" class="post">
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
        <img data-test="post-image" onDoubleClick={()=>changeLike("img")} src={props.img_post} alt="" />
      </div>
  
      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon data-test="like-post" onClick={()=>changeLike("coracao")} class={heartColor} name={heartName}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon data-test="save-post" onClick={() => (nameSaved === "bookmark-outline") ? setName("bookmark") : setName("bookmark-outline")} name={nameSaved}></ion-icon>
          </div>
        </div>
  
        <div class="curtidas">
          <img src={props.user_like_img} alt="" />
          <div data-test="likes-number" class="texto">
            Curtido por <strong>{props.user_like}</strong> e{" "}
            <strong>outras {likeNumber} pessoas</strong>

          </div>
        </div>
      </div>
    </div>
    </>
    )
  }