
let usuario=document.getElementById("usuario")
let email=document.getElementById("email")
let noEncontrado=document.getElementById("span")
let emailnoo=document.getElementById("span2")
function usuno(){
    noEncontrado.style.display="block"
    setTimeout(()=>{
        noEncontrado.style.display="none"
    },2000)

}
function emailno(){
    emailnoo.style.display="block"
    setTimeout(()=>{
        emailnoo.style.display="none"
    },2000)

}

const personas=async()=>{
    let url=await fetch("https://jsonplaceholder.typicode.com/users")
    let respuesta=await url.json()
    console.log(respuesta)

    
        
        
        
    
    document.querySelector(".enviar").addEventListener("click",(e)=>{
        e.preventDefault()
        
        if(respuesta.find(elements=>elements.username==usuario.value)){
            pocicion=respuesta.findIndex(elements=>elements.username==usuario.value)
            if(respuesta[pocicion].email==email.value){
                    alert("ingresado")
                    email.value=""
                    usuario.value=""

            }
            else{
                usuno()
            }
        }
        else{
            emailno()
           
            
        }
            
       

    })
}
personas()
