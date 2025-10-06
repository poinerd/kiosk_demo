const allSections = document.getElementById('all_sections')
const userEmail = document.getElementById('user_email')
const userExists = document.getElementById('recreate_kiosk_remark')
const createKioskButton = document.getElementById('create_kiosk')
const appContainer = document.getElementById('app_container')
const myKiosk = document.getElementById('my_kiosk')
const kioskLogo = document.getElementById('kiosk_logo')
const wholeContainer = document.getElementById('whole_container')
const searchButton = document.getElementById('search_buttonn')
const searchField = document.getElementById('search_field')


searchButton.disabled = true
loadKioskData(STORAGE_KEY)
checkProductList()


searchField.addEventListener('input', (e)=>{
  if(searchField.value ===  " "){

       searchButton.classList.add('search_button')
    searchButton.classList.remove('search_button_enabled')
    searchButton.disabled = true
 
 

  } else{
      

    e.preventDefault()
    searchButton.classList.add('search_button_enabled')
    searchButton.classList.remove('search_button')
    searchButton.disabled = false
  


  }
})

wholeContainer.addEventListener('click', (e) => {

  if (e.target.id == 'kiosk_logo') {
    location.reload();
  }
  
  if (e.target.id === 'create_kiosk') {
       e.preventDefault()
    if(hasUserCreatedKiosk){
        e.preventDefault()
        displayContentForTime(userExists, 'You already have a kiosk..Tap on my kiosk on the nav bar to access it.', 1000)

      return

    }
    if (userEmail.value.trim() != ''){
      e.preventDefault()
      allSections.style.display = 'none'
      renderQuestions()

    }
    else{
      return
    }
      
  }

if (e.target.id === 'create_kiosk_2') {
     
          location.reload();
    }

  if (e.target.id === 'search_buttonn') {


      let searchQuery = searchField.value.toLowerCase().trim()
      let result = searchKiosk(searchQuery)


      if(result.length === 0){

        isSearchEmpty = true
        renderContent(getResultPage(searchQuery, searchKiosk(searchQuery)), appContainer)
        
        
      }

      else{
         isSearchEmpty = false
        renderContent(getResultPage(searchQuery, searchKiosk(searchQuery)), appContainer)
        
      }

     
    }

if (e.target.id === 'cancel_store_creation') {
    
          location.reload();
    }
  
if (e.target.id === 'next_question_button') {
    console.log(counter)
    const userStoreCreationInput = document.getElementById('user_store_creation_input')
    const remark = document.getElementById('input_remark')
    
if(counter === 7 ){
       setKioskDetails(userResponses)
       checkProductList()
       console.log(isProductlistEmpty)
       kioskDb.push(kioskDetails)
       hasUserCreatedKiosk = true
       allKioskData.details = kioskDetails
       allKioskData.isUser = hasUserCreatedKiosk
       allKioskData.kioskDb = kioskDb
       saveKioskData(STORAGE_KEY, allKioskData)
      
       renderContent(getUserKiosk(), appContainer)     
     }

     if(counter === 2){
     productsSold = userStoreCreationInput.value.trim()
     }
 
 
    
    if(counter === 3 && kioskDetails.kioskCategory==='' ){
        displayContentForTime(remark, "You must select a category", 1000)
        return 

       } 
    if ( counter === 3){
      goToNextQuestion()
    }


    if(checkInputField(userStoreCreationInput)){
      displayContentForTime(remark, "You must give an input here", 1000)
      return
    }

    if(counter == 0){
      storeSetUpQuestions[1].question ="Welcome, " + userStoreCreationInput.value + ',<br> What would you like to call your kiosk?'
      kioskDetails.kioskUserName = userStoreCreationInput.value.trim()
      renderContent(getUserKiosk(), appContainer)  
      goToNextQuestion()
    }

    
    else{
    userResponses.push(userStoreCreationInput.value)
    console.log(userResponses)
    goToNextQuestion()

    }

  }


  if (e.target.id === 'add_product_button') {
     const kiosk = document.getElementById('kiosk')
     isAddProductCard = true
     renderContent(getUserKiosk(), appContainer)
     const addProductButton = document.getElementById('add_product_button')
     addProductButton.style.display = 'none'
  }
if (e.target.classList.contains('category')) {
  const categoriesButtons = document.getElementsByClassName('category');
  const btns = Array.from(categoriesButtons);


  btns.forEach((category) => {
    category.classList.remove('selected');
  });


  e.target.classList.add('selected');


  kioskDetails.kioskCategory = e.target.textContent.trim();
  console.log(kioskDetails);
  console.log(e.target.textContent.trim());
}



    if (e.target.id === 'open_description_button') {
     iskioskDescription=!iskioskDescription
     renderContent(getUserKiosk(), appContainer)
  }

    if (e.target.id === 'cancel_add_product') {
     e.preventDefault()
     isAddProductCard = false

     renderContent(getUserKiosk(), appContainer)  
  }

 

      if (e.target.id === 'kiosk_products') {
     renderContent(getUserKiosk(), appContainer)
     
  }

     if (e.target.id === 'toggle_theme_container') {
      const toggleButton = document.getElementById('toggle_theme_container')
       const kiosk = document.getElementById('kiosk')
       isLightMode = !isLightMode;
 
       toggleButton.innerHTML = isLightMode?lightMode: darkMode
       kiosk.style.backgroundColor = isLightMode?'#01162b': '#f9f9ff'
       
     
  }

    if (e.target.id === 'my_kiosk') {
          e.preventDefault()
  
      if(hasUserCreatedKiosk == true){
          renderContent(getLoginPage(), appContainer)
       
      }
      else{
      
        renderContent(getNoKiosk(), appContainer)
      }
  }

    if (e.target.id === 'delete_product') {
    const productId = e.target.getAttribute("product_id");
    console.log('this product has an id of', productId)
    deleteAProduct(productId)

     
  }

      if (e.target.id === 'login_button') {
        e.preventDefault()
        const passwordField = document.getElementById('password_field')
        const emailField = document.getElementById('email_field')
        const loginResponse = document.getElementById('login_response')
        loginResponse.style.display ='block'

        if(passwordField.value.trim() === kioskDetails.kioskPassword && emailField.value.trim() === kioskDetails.kioskEmail){
          displayContentForTime(loginResponse, 'logging you in...', 1000, '#B3C5FF')
          setTimeout(()=>{
            renderContent(getUserKiosk(), appContainer)

          }, 1000)
        }
        else{
          displayContentForTime(loginResponse, `${kioskDetails.kioskUserName}, take a look at your password and email again`, 1000, '#FFB3B3')
          emailField.value = ''
          passwordField.value = ' '
      
        }


     
  }


    if (e.target.id === 'submit_product_button') {
    e.preventDefault()
    const productName = document.getElementById('product_namee')
    const productPrice = document.getElementById('product_pricee')
    const noInStock = document.getElementById('no_in_stockk')
    const remark = document.getElementById('remark')
    
    
    addAProductToKiosk(productName.value, productPrice.value, noInStock.value, remark)
    
    setTimeout(()=>{
          renderContent(getUserKiosk(), appContainer)
    },1000)
    const addProductButton = document.getElementById('add_product_button')
    addProductButton.style.display = 'none'
  }

     if (e.target.id === 'go_back_button') {
   renderContent(getUserKiosk(), appContainer)
  }
if (e.target.classList.contains("edit_product")) {
    e.preventDefault()
  const card = e.target.closest(".product_card");
  const nameEl = card.querySelector(".product_name");
  const priceEl = card.querySelector(".product_price");
  const stockEl = card.querySelector(".no_in_stock");


  const currentName = nameEl.textContent.trim();
  const currentPrice = priceEl.textContent.trim().replace(/\D/g, '');
  const currentStock = stockEl.textContent.trim().replace(/\D/g, '');


  nameEl.innerHTML = `<input type="text" class="edit-name" value="${currentName}">`;
  priceEl.innerHTML = `<input type="number" class="edit-price" value="${currentPrice}">`;
  stockEl.innerHTML = `<input type="number" class="edit-stock" value="${currentStock}">`;

  e.target.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
`
  e.target.classList.add("save_btn");
  e.target.classList.remove("edit_product");
  return
}

else if (e.target.classList.contains("save_btn")) {

  e.preventDefault()

  const card = e.target.closest(".product_card");

  console.log(card)
  const nameInput = card.querySelector(".edit-name");
  const priceInput = card.querySelector(".edit-price");
  const stockInput = card.querySelector(".edit-stock");
  const productId = e.target.getAttribute("product_id");

  const newName = nameInput.value.trim();
  const newPrice = priceInput.value.trim();
  const newStock = stockInput.value.trim();
 
 

  editAProduct(productId, newName, newPrice, newStock);




}


})

wholeContainer.addEventListener('change', (e) => {
  if (e.target.id === 'product_image') {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(ev) {
      currentProductImage = ev.target.result;
    };
    reader.readAsDataURL(file);
  }

});








