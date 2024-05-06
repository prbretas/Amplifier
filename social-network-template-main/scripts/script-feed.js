let name = "Adrian Smith"
let lastName = ""
let imgProfile = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7zw6TjHP2f8TyaoGHIb4EokaxYP0p5kVQDW6tyrRiZeFvjRQjxc33aHySCYEVUUI3MRDFEwWbgf1o8-fnlO54d08j69b2G6GpSutAPJ979TodiR-fZr42aQZoS78MkE1rdg8tPzHTytFnGnHT7Hoi-dToJ-jXN35L4grkn7_WhDxZmCo1g7FHH8bTMIo/s16000/adriansmith.jpg"
let textProfile = "Adrian Frederick H Smith (Londres, 27 de fevereiro de 1957) é um guitarrista inglês conhecido por tocar na banda de heavy metal Iron Maiden, para quem escreve canções e executa backing vocals ao vivo em algumas faixas."
let nameProfile = document.querySelectorAll(".nameProfile")
let imgProf = document.querySelectorAll(".imgProfile");


function mudarConteudo() {
    document.getElementById("textProfile").innerHTML = textProfile
    /**ALTERAR TODAS AS IMAGENS  DO PERFIL*/
    for (let i = 0; i < imgProf.length; i++) {
        imgProf[i].setAttribute("src", imgProfile)
      }
    /**ALTERAR TODOS OS NOMES */
      for (let i = 0; i < nameProfile.length; i++) {
        nameProfile[i].innerHTML = name
      }
  }

mudarConteudo()




