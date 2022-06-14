function send(){
    const cep = document.querySelector("#cep").value
    if(cep.length < 8){
        alert('CEP Inválido')
    }else{
        const showData = (result)=>{
            for(const campo in result){
                if(document.querySelector("#"+campo)){
                    document.querySelector("#"+campo).value = result[campo]
                }
                
            }
        }
    

        let url = `https://viacep.com.br/ws/${cep}/json/`
        
        fetch (url).then(function(response){
            response.json().then(function (data){
                showData(data)
            })
        })  

}
}