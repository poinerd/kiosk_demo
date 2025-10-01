
function createKiosk(name, description, email, phone, products=[]){

    kioskDetails.kioskName = name
    // kioskDetails.kioskCategory = category
    kioskDetails.kioskDescription = description
    kioskDetails.kioskEmail = userEmail.value.trim() 
    kioskDetails.kioskPhone = phone
    kioskDetails.kioskproducts = products

}

function setKioskDetails(userResponse){
    console.log(userResponse)
    kioskDetails.kioskName = userResponse[0]
    kioskDetails.kioskDescription = userResponse[2]
    kioskDetails.kioskPhone = userResponse[3]
    kioskDetails.KioskLogo = userResponses[5]
    kioskDetails.kioskEmail = userEmail.value.trim()
    console.log(kioskDetails)
}


function checkProductList(){
    if(kioskProducts.length == 0){
        isProductlistEmpty = true

    }
    else{
        isProductlistEmpty = false
    }
}

function renderContent(child, container) {
  container.innerHTML = child
}

function goHome(){
      window.location.href = "/"
}

function renderQuestions(){
    renderContent(getStoreSetUpCard(), appContainer)
}


function goToNextQuestion(){

    console.log(counter)


      counter+=1
      renderContent(getStoreSetUpCard(),appContainer)
      console.log(userResponses)
   

}

function addAProductToKiosk(name, price, number, remark){
    
    if( name == '' || price =='' || number== ''){
        remark.style.display='block'
        remark.style.backgroundColor='rgb(255, 157, 157)'
        remark.innerHTML = 'Ensure you enter all details!'

        setTimeout(()=>{
               remark.style.display='none'
        }, 1000
        )
    }
    else{
        let newProduct = {
        productId: kioskProducts.length,
        productName: name,
        productPrice: price,
        noInStock: number,
        productImage: currentProductImage
    }

    
    kioskProducts = [...kioskProducts, newProduct]
    allKioskData.products = kioskProducts
    console.log(kioskProducts)
    saveKioskData(STORAGE_KEY, allKioskData)
    

    // currentProductImage = null
    checkProductList()
    remark.style.display='block'
    remark.style.backgroundColor='#b8fdff'
    remark.innerHTML = name + " "+'sucessfully added to kiosk!'
    
    setTimeout(()=>{
           remark.style.display='none'
    }, 1000)


    }   
    
}
function checkInputField(inputField){
    if (inputField.value.trim() === ""){
        return true
    }else{
        return false
    }
}

function displayContentForTime(container, text, time){
    container.style.display = 'block'
    container.innerHTML = text

    setTimeout(()=>{
        container.style.display = 'none'
    }, time)

}

function confirmPassword(initial, confirmation){
    if(initial===confirmation){
        return true
    }
    else{
        return false
    }
}




function deleteAProduct(productId){
   const index = kioskProducts.findIndex(p => p.productId == productId);
   kioskProducts.splice(index, 1)
   console.log(kioskProducts)
   checkProductList()
   renderContent(getUserKiosk(), appContainer)
}

function editAProduct(productId, newName,newPrice, newStock){
  const index = kioskProducts.findIndex(p => p.productId == productId);
//   if (index === -1) return; 

  kioskProducts[index].productName = newName
  kioskProducts[index].productPrice = newPrice
  kioskProducts[index].noInStock= newStock

//    console.log(kioskProducts)
//    checkProductList()
   saveKioskData(STORAGE_KEY, allKioskData)
   renderContent(getUserKiosk(), appContainer)
}


function saveKioskData(key, data){
    localStorage.setItem(key, JSON.stringify(data))
}

function loadKioskData(key,){
    localStorage.getItem(key)
    const RAW = localStorage.getItem(STORAGE_KEY);
  if (RAW) {
    try {
      let retrievedData = JSON.parse(RAW);
      allKioskData = retrievedData
      kioskDetails = allKioskData.details
      hasUserCreatedKiosk= allKioskData.isUser
      kioskProducts = allKioskData.products

    // kioskProducts = retrievedData[2] || []; ///Th is f thornyy

    } catch (e) {
      console.error("Error parsing data from localStorage", e);
   
    }
}}

function updateStyle(container, style, op='add'){
    if (op = 'remove'){
        container.classList.remove(style)

    }else{
        container.classList.add(style)

    }
  
}