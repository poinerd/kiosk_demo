const allSections = document.getElementById('all_sections')
const userEmail = document.getElementById('user_email')
const createKioskButton = document.getElementById('create_kiosk')
const appContainer = document.getElementById('app_container')
const myKiosk = document.getElementById('my_kiosk')
const kioskLogo = document.getElementById('kiosk_logo')
const wholeContainer = document.getElementById('whole_container')
const startSelling = document.getElementById('start_selling')

console.log(hasUserCreatedKiosk)
loadKioskData(STORAGE_KEY)

wholeContainer.addEventListener('click', (e) => {

  if (e.target.id == 'kiosk_logo') {
    appContainer.innerHTML =''
    appContainer.appendChild(allSections)
  }
  
  if (e.target.id === 'create_kiosk') {
    if (userEmail.value.trim() != ''){
      e.preventDefault()
      allSections.style.display = 'none'
      startSelling.style.color = "#F35B04"
      renderQuestions()

    }
    else{
      return
    }
      
  }

  if (e.target.id === 'create_kiosk_2') {
      allSections.style.display = 'none'
      renderQuestions()
    }

  if (e.target.id === 'cancel_store_creation') {
       appContainer.innerHTML =''
       appContainer.appendChild(allSections)
    }
  
  if (e.target.id === 'next_question_button') {
    console.log(counter)
    const userStoreCreationInput = document.getElementById('user_store_creation_input')
    const remark = document.getElementById('input_remark')
    
  if(counter === 9 ){
       setKioskDetails(userResponses)
       checkProductList()
       console.log(isProductlistEmpty)
       hasUserCreatedKiosk = true
       saveKioskData(STORAGE_KEY, [kioskDetails, hasUserCreatedKiosk])
       renderContent(getUserKiosk(), appContainer)     
     }
    
      if(counter === 7 && (confirmPassword(userResponses[-1],userResponses[-2]) === false)){
          
        userResponses.pop()
        displayContentForTime(remark, "Your passwords don't match!", 1000)
        counter = 6
        renderContent(userStoreCreationInput(), appContainer)
          
     }
     

    if(counter === 3 && kioskDetails.kioskCategory==='' ){
        displayContentForTime(remark, "You must select a category", 1000)
        return 

       } 
    if ( counter === 3){
      goToNextQuestion()
    }

      if ( counter === 8){
      goToNextQuestion()
    }

    if(checkInputField(userStoreCreationInput)){
      displayContentForTime(remark, "Enter a somethig here", 1000)
      return
    }

    if(counter == 0){
      storeSetUpQuestions[1].question ="Welcome, " + userStoreCreationInput.value + ',<br> What would you like to call your kiosk?'
      renderContent(getUserKiosk(), appContainer)  
      goToNextQuestion()
    }

    
    else{
    userResponses.push(userStoreCreationInput.value)
    goToNextQuestion()

    }

  }


  if (e.target.id === 'add_product_button') {
     isAddProductCard = true
     renderContent(getUserKiosk(), appContainer)
     const addProductButton = document.getElementById('add_product_button')
     addProductButton.style.display = 'none'
  }

  if (e.target.classList.contains('category')) {

    const categoriesButtons = document.getElementsByClassName('category')
    btn = Array.from(categoriesButtons)

    btn.forEach((category)=>{
        category.classList.add('category')

    })

    e.target.classList.add('selected')
    kioskDetails.kioskCategory = ''
    kioskDetails.kioskCategory = e.target.textContent.trim()
    console.log(kioskDetails)
    console.log(e.target.textContent.trim())
   
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
     const kiosk = document.getElementById('kiosk')
     isLightMode =!isLightMode
     renderContent(getUserKiosk(), appContainer)
     
  }

    if (e.target.id === 'my_kiosk') {
  
      if(hasUserCreatedKiosk == true){
        renderContent(getUserKiosk(), appContainer)
      }
      else{
        renderContent(getNoKiosk(), appContainer)
      }
  }

    if (e.target.id === 'delete_product') {
    const productId = e.target.getAttribute("product_id");
    deleteAProduct(productId)
    console.log("Deleted product with ID:", productId);
     
  }

    if (e.target.id === 'submit_product_button') {
    e.preventDefault()
    const productName = document.getElementById('product_name')
    const productPrice = document.getElementById('product_price')
    const noInStock = document.getElementById('no_in_stock')
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

    if (e.target.id === 'user_store_creation_input') {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(ev) {
      currentkioskLogo = ev.target.result;
    };
    reader.readAsDataURL(file);
  }
});








