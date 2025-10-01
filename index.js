const allSections = document.getElementById('all_sections')
const userEmail = document.getElementById('user_email')
const userExists = document.getElementById('recreate_kiosk_remark')
const createKioskButton = document.getElementById('create_kiosk')
const appContainer = document.getElementById('app_container')
const myKiosk = document.getElementById('my_kiosk')
const kioskLogo = document.getElementById('kiosk_logo')
const wholeContainer = document.getElementById('whole_container')
const startSelling = document.getElementById('start_selling')
let productCount = 0

// console.log(hasUserCreatedKiosk)
// console.log(isProductlistEmpty)

// console.log(allKioskData)


loadKioskData(STORAGE_KEY)

checkProductList()

wholeContainer.addEventListener('click', (e) => {

  if (e.target.id == 'kiosk_logo') {
    // appContainer.innerHTML =''
    // appContainer.appendChild(allSections)
    location.reload();
  }
  
  if (e.target.id === 'create_kiosk') {
    if(hasUserCreatedKiosk){
        e.preventDefault()
      userExists.innerHTML = 'You already have a kiosk..Tap on my kiosk on the nav bar to access it'
      return

    }
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
      //  appContainer.innerHTML =''
      //  appContainer.appendChild(allSections)
          location.reload();
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
       allKioskData.details = kioskDetails
       allKioskData.isUser = hasUserCreatedKiosk
       saveKioskData(STORAGE_KEY, allKioskData)
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
  const categoriesButtons = document.getElementsByClassName('category');
  const btns = Array.from(categoriesButtons);

  // remove "selected" class from all buttons first
  btns.forEach((category) => {
    category.classList.remove('selected');
  });

  // add "selected" class only to the clicked button
  e.target.classList.add('selected');

  // update kiosk details
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
    console.log('this product has an id of', productId)
    deleteAProduct(productId)
    // console.log("Deleted product with ID:", productId);
     
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

  // get current values
  const currentName = nameEl.textContent.trim();
  const currentPrice = priceEl.textContent.trim().replace(/\D/g, '');
  const currentStock = stockEl.textContent.trim().replace(/\D/g, '');

  // replace spans with inputs
  nameEl.innerHTML = `<input type="text" class="edit-name" value="${currentName}">`;
  priceEl.innerHTML = `<input type="number" class="edit-price" value="${currentPrice}">`;
  stockEl.innerHTML = `<input type="number" class="edit-stock" value="${currentStock}">`;

  // change button to "Save"
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
 
  console.log('hello there')
  const card = e.target.closest(".product_card");

  console.log(card)
  const nameInput = card.querySelector(".edit-name");
  const priceInput = card.querySelector(".edit-price");
  const stockInput = card.querySelector(".edit-stock");
  const productId = e.target.getAttribute("product_id");

  const newName = nameInput.value.trim();
  const newPrice = priceInput.value.trim();
  const newStock = stockInput.value.trim();
  console.log('this is the id', productId)
  // // call API or function
  editAProduct(productId, newName, newPrice, newStock);

  // // restore text fields
  // card.querySelector(".product_name").textContent = newName;
  // card.querySelector(".product_price").textContent = "₦" + newPrice;
  // card.querySelector(".no_in_stock").textContent = "Number in stock: " + newStock;

  // // change button back to "Edit"
  // e.target.textContent = "Edit";
  // e.target.classList.add("edit_product");
  // e.target.classList.remove("save_btn");
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








