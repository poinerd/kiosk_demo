const allSections = document.getElementById('all_sections')
const createKioskButton = document.getElementById('create_kiosk')
const appContainer = document.getElementById('app_container')
const userStoreCreationInput = document.getElementById('user_store_creation_input')
const myKiosk = document.getElementById('my_kiosk')
const kioskLogo = document.getElementById('kiosk_logo')
// start from first question



createKioskButton.addEventListener('click', () => {
  allSections.style.display = 'none'
  renderQuestion()
})

myKiosk.addEventListener('click',()=>{
  if (kioskDetails.kioskName === ''){
      renderContent(getNoKiosk(), appContainer)
  }
  else{
     renderContent(getUserKiosk(), appContainer)

  }
 
})

kioskLogo.addEventListener('click', ()=>{
    goHome()

})