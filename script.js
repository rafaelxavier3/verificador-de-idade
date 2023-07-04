function verificar() {
    var img = document.getElementById('imagem')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.src = 'garotinho.png'
                //criança
            } else if (idade < 21) {
                img.src = 'fotojovem-m.png'
                //jovem
            } else if (idade < 50) {
                img.src = 'adulto-m.png'
                //adulto
            } else {
                img.src = 'idoso.png'
                //idoso
            }
            
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.src = 'garotinha.png'
                //criança
            } else if (idade < 21) {
                img.src = 'fotojovem-f.png'
                //jovem
            } else if (idade < 50) {
                img.src = 'adulto-f.png'
                //adulto
            } else {
                img.src = 'idosa.png'
                //idoso
            }
        }
        res.innerHTML = `${genero} com ${idade} anos.`
        
    }
}