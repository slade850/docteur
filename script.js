const titre = document.getElementById("title");
const des = document.getElementById("description");
const colorSelect = "rgba(243, 4, 252, 0.6)";
const ep = document.getElementById("epaule");
const co = document.getElementById("coude");
const po = document.getElementById("poignet");
const ha = document.getElementById("hanche");
const ge = document.getElementById("genou"); 
const ch = document.getElementById("cheville");

function describ(x) {
    switch(x) {
        case 'epaule':
            if(ep.style.backgroundColor != colorSelect){
            titre.textContent = "Épaule";
            des.textContent = "L'épaule (nom féminin) est la région morphologique se situant à la jonction du tronc avec le membre supérieur. Elle comporte plusieurs articulations qui concourent à en faire le complexe articulaire le plus mobile du corps humain. Elle permet d'orienter le membre supérieur dans l'espace, autorisant en particulier son extrémité effectrice, la main, à assurer ses rôles de préhension et de communication avec l'environnement situé à sa portée.";
            ep.style.backgroundColor = colorSelect;
            co.style.backgroundColor = "";
            po.style.backgroundColor = "";
            ha.style.backgroundColor = "";
            ge.style.backgroundColor = "";
            ch.style.backgroundColor = "";
            break;} else {
                titre.textContent = "";
                des.textContent = "";
                ep.style.backgroundColor = "";
                break;
            }
        case 'coude':
            if(co.style.backgroundColor != colorSelect){
            titre.textContent = "Coude";
            des.textContent = "Le coude (ou articulation olécranienne) est la partie du membre supérieur située entre le bras et l'avant-bras. Cette articulation comprend en avant la région du « pli du coude » (ou dedans de coude). C'est un complexe articulaire synovial du membre supérieur humain reliant le bras à l'avant-bras. Il unit ainsi trois os entre eux : le radius, l'ulna (cubitus) et l'humérus."
            ep.style.backgroundColor = "";
            co.style.backgroundColor = colorSelect;
            po.style.backgroundColor = "";
            ha.style.backgroundColor = "";
            ge.style.backgroundColor = "";
            ch.style.backgroundColor = "";
            break;} else {
                titre.textContent = "";
                des.textContent = "";
                co.style.backgroundColor = "";
                break;
            }
        case 'poignet': 
            if(po.style.backgroundColor != colorSelect){      
            titre.textContent = "Poignet";
            des.textContent = "Le poignet est une région du membre supérieur située entre la main et l'avant-bras, et contenant le carpe. Élément-clé pour le fonctionnement de la main, il permet les mouvements (c'est-à-dire les changements de place et d’orientation) de la main par rapport à l’avant-bras, transmet les forces appliquées de la main à l’avant-bras, permet d'adapter la capacité de flexion-extension maximale des doigts et de la préhension.";
            ep.style.backgroundColor = "";
            co.style.backgroundColor = "";
            po.style.backgroundColor = colorSelect;
            ha.style.backgroundColor = "";
            ge.style.backgroundColor = "";
            ch.style.backgroundColor = "";
            break;} else {
                titre.textContent = "";
                des.textContent = "";
                po.style.backgroundColor = "";
                break;
            }
        case 'hanche':
            if(ha.style.backgroundColor != colorSelect){ 
            titre.textContent ="Hanche";
            des.textContent ="La hanche ou articulation coxo-fémorale est une articulation (sphéroïde) qui permet de joindre la cuisse au bassin. Elle met en jeu deux os : l'os coxal et le fémur.";
            ep.style.backgroundColor = "";
            co.style.backgroundColor = "";
            po.style.backgroundColor = "";
            ha.style.backgroundColor = colorSelect;
            ge.style.backgroundColor = "";
            ch.style.backgroundColor = "";
            break;} else {
                titre.textContent = "";
                des.textContent = "";
                co.style.backgroundColor = "";
                break;
            }
        case 'genou':
            if(ge.style.backgroundColor != colorSelect){ 
            titre.textContent ="Genoux";
            des.textContent ="Le genou est une articulation qui permet de joindre la jambe à la cuisse. Elle met en jeu trois os, le fémur, le tibia et la patella, par le biais de trois articulations, l'articulation fémoro-patellaire et la double articulation fémoro-tibiale. Le cartilage assure la fluidité des mouvements du genou.";
            ep.style.backgroundColor = "";
            co.style.backgroundColor = "";
            po.style.backgroundColor = "";
            ha.style.backgroundColor = "";
            ge.style.backgroundColor = colorSelect;
            ch.style.backgroundColor = "";
            break;} else {
                titre.textContent = "";
                des.textContent = "";
                ge.style.backgroundColor = "";
                break;
            }  
        case 'cheville':
            if(ch.style.backgroundColor != colorSelect){ 
            titre.textContent ="Cheville";
            des.textContent ="La cheville ou cou-de-pied est l'articulation qui relie la jambe et le pied. Elle est parfois sujette à des entorses, le plus souvent externes par flexion plantaire et pied en équin. Une cheville adulte est composée, au point de vue osseux, de l'épiphyse inférieure du tibia (malléole interne et plafond), de l'épiphyse inférieure de la fibula (ou péroné) (malléole externe) et du talus (ou astragale). Classiquement, on parle d'articulation supinale de l'arrière pied.";
            ep.style.backgroundColor = "";
            co.style.backgroundColor = "";
            po.style.backgroundColor = "";
            ha.style.backgroundColor = "";
            ge.style.backgroundColor = "";
            ch.style.backgroundColor = colorSelect;
            break;} else {
                titre.textContent = "";
                des.textContent = "";
                ch.style.backgroundColor = "";
                break;
            }           
    }
}
window.addEventListener("click", function(e) {
    if(e.target != ep && e.target != co && e.target != po && e.target != ha && e.target != ge && e.target != ch ){
            titre.textContent ="";
            des.textContent = "";
            ep.style.backgroundColor = "";
            co.style.backgroundColor = "";
            po.style.backgroundColor = "";
            ha.style.backgroundColor = "";
            ge.style.backgroundColor = "";
            ch.style.backgroundColor = "";
    }
});