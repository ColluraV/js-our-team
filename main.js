const cardContainer = document.querySelector(".card-container");

//array lista membri team
let ListaTeam= [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        img: "walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        img: "scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg",
    }
]

//generazione e stampa elementi in html
for (let i = 0; i<ListaTeam.length; i++){
    const membro = ListaTeam[i];
    
    console.log("Elemento team n° ", (i+1)," ",membro);



    cardContainer.innerHTML += (
    `<div class="card col-3" style="width: 18rem;">
        <img src="/img/${membro["img"]}" class="card-img-top" alt="${membro["name"]}">
            <div class="card-body">
                <h5 class="card-title">${membro["name"]}</h5>
                <p class="card-text">${membro["role"]}</p>
      
              </div>
     </div>`
    
    )

}






//card div vuoto Bootstrap

/*<div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      
                    </div>
                </div> */