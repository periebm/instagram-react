export default function Story(props){
  return(
    <>
    <div class="story">
    <div class="imagem">
      <img src= {props.img} alt={props.user} />
    </div>
    <div class="usuario">{props.user}</div>
  </div>
  </>
  )
}
  
