import React from "react";


export default function Usuario(props){
  const [name,setUsername] = React.useState(props.name);
  const [img, setImg] = React.useState(props.img);

  function changeName(){
    const newName = prompt("Digite o novo nome de Usuario");
    if(newName === "" || newName === null || newName === undefined) return;
    setUsername(newName);
  }

  function changeImg(){
    const newImg = prompt("Digite a URL da nova imagem");
    if(newImg === "" || newImg === null || newImg === undefined) return;
    setImg(newImg);
  }

    return(
        <div class="usuario">
        <img data-test="profile-image" onClick={changeImg} src={img} alt="imagem de perfil" />
        <div class="texto">
          <span>
            <strong data-test="name" >{name}</strong>
            <ion-icon data-test="edit-name" onClick={changeName} name="pencil"></ion-icon>
          </span>
        </div>
      </div>
    )
}
