export const showPage = (pageToShow) => {
    document.querySelectorAll("[data-page]").forEach((page) => {
        
      if (page.id === pageToShow) {
        page.style.display = "block";
        history.pushState(null, '', `#${pageToShow}`);
      } else {
        page.style.display = "none";
      }
      
    });
  };
  
  export const handleNavigation = () => {
    const currentSection = window.location.hash.replace('#','') || 'accueil';
    showPage(currentSection);
    if (currentSection === 'avis') { 
      avisDisplay(); 
      }
  };


//   navigation modale

export const modaleNavigate= (modalToShow) =>{
    document.querySelectorAll(".modal").forEach((modal)=>{
        
        if(modal.id === modalToShow){
            modal.style.display="block";
             document.querySelectorAll(".close").forEach((btn)=>{
                  btn.addEventListener("click", () => {
                modal.style.display = "none";
              });
            });
           window.addEventListener("click",(e)=>{
            if(e.target === modal){
                modal.style.display = "none";
            }
            })
        }else{
            modal.style.display = "none";
        }
    })
}