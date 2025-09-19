const allSections = document.getElementById('all_sections')
const createKioskButton = document.getElementById('create_kiosk')
const appContainer = document.getElementById('app_container')
const myKiosk = document.getElementById('my_kiosk')
const kioskLogo = document.getElementById('kiosk_logo')
const wholeContainer = document.getElementById('whole_container')
const startSelling = document.getElementById('start_selling')


wholeContainer.addEventListener('click', (e) => {


  if (e.target.id === 'kiosk_logo') {
      appContainer.innerHTML = allSections
  }
  
  if (e.target.id === 'create_kiosk') {
      e.preventDefault()

      allSections.style.display = 'none'
      startSelling.style.color = "#F35B04"
      renderQuestions()
  }
  
  if (e.target.id === 'next_question_button') {
    const userStoreCreationInput = document.getElementById('user_store_creation_input')
    userResponses.push(userStoreCreationInput.value)
    goToNextQuestion()
  }

  if (e.target.id === 'add_product_button') {
     isAddProductCard = true
     renderContent(getUserKiosk(), appContainer)
     const addProductButton = document.getElementById('add_product_button')
  
      addProductButton.style.display = 'none'
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

    if (e.target.id === 'kiosk_settings') {
  
     renderContent(getSettingsPage(), appContainer)
     
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

   

})




wholeContainer.addEventListener('change', (e) => {
  if (e.target.id === 'product_image') {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(ev) {
      currentProductImage = ev.target.result; // base64 string
    };
    reader.readAsDataURL(file);
  }

    if (e.target.id === 'user_store_creation_input') {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(ev) {
      currentkioskLogo = ev.target.result; // base64 string
    };
    reader.readAsDataURL(file);
  }
});







