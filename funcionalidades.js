 var $form = document.querySelector("#contacto");


 $form.addEventListener("submit", handleSubmit)
    async function handleSubmit(event){

    
        event.preventDefault();
        var form = new FormData(this);
        const response =  await fetch(event.target.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
            }
        })
        
        if (response.ok){
            this.reset;
            alert("Gracias por tu Mensaje");
        }
    }
