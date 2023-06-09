let x = window.document.getElementById("verificar_button")
let y= window.document.getElementById("sexo_M")
let z=window.document.getElementById("sexo_F")




x.addEventListener ('click', function(){

    let data = new Date()
    let anos = data.getFullYear()
    let anoUser = window.document.getElementById("ano_nascimento")
    let mensagem = window.document.getElementById("mensagem")
    let i = window.document.getElementById("imagem")

    if (anoUser.value==0 || Number(anoUser.value) > anos){
        window.alert ("[ERROR] Digite novamente")
    }else {
        let fsex = window.document.getElementsByName("radsex")
        let idade = anos - (anoUser.value)
        let gênero = ' '
        if (fsex[0].checked) {
            gênero = 'Homem'
            mensagem.innerHTML = `Detectamos um ${gênero} com a idade de ${idade} anos`

            if (idade>=0 && idade<10){
                i.src ="https://images.pexels.com/photos/6437821/pexels-photo-6437821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }else if (idade>=10 && idade<21) {
                i.src="https://images.pexels.com/photos/15595528/pexels-photo-15595528/free-photo-of-camisa-preta-bokeh-fora-de-foco-sofisticado.jpeg?auto=compress&cs=tinysrgb&w=600"
            }else if (idade>=21 && idade<50){
                i.src="https://images.pexels.com/photos/997472/pexels-photo-997472.jpeg?auto=compress&cs=tinysrgb&w=600"
            } else {
                i.src="https://images.pexels.com/photos/2774292/pexels-photo-2774292.jpeg?auto=compress&cs=tinysrgb&w=600"
            }

        } else if (fsex [1]){
            gênero = 'Mulher'
            mensagem.innerHTML = `Detectamos uma ${gênero} com a idade de ${idade} anos`
            if (idade>=0 && idade<10){
                i.src ="https://images.pexels.com/photos/1139613/pexels-photo-1139613.jpeg?auto=compress&cs=tinysrgb&w=600"
            }else if (idade>=10 && idade<21) {
                i.src="https://images.pexels.com/photos/235534/pexels-photo-235534.jpeg?auto=compress&cs=tinysrgb&w=600"
            }else if (idade>=21 && idade<50){
                i.src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600"
            } else {
                i.src="https://images.pexels.com/photos/788567/pexels-photo-788567.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        }
        
    }
})

/* var checkbox = document.querySelector('#minhaCheckbox');

checkbox.addEventListener('change', function() {
    if (this.checked) {
        // Checkbox marcada
        console.log('Checkbox marcada!');
    } else {
        // Checkbox desmarcada
        console.log('Checkbox desmarcada!');
    }
}); */

/* var checkbox1 = document.querySelector('#checkbox1');
var checkbox2 = document.querySelector('#checkbox2');

checkbox1.addEventListener('change', function() {
    if (this.checked) {
        checkbox2.checked = false; // Desmarca a checkbox2
    }
});

checkbox2.addEventListener('change', function() {
    if (this.checked) {
        checkbox1.checked = false; // Desmarca a checkbox1
    }
}); */
