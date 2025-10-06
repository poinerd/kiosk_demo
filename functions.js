
function setKioskDetails(userResponse){
    console.log(userResponse)
    kioskDetails.kioskName = userResponse[0]
    kioskDetails.kioskDescription = userResponse[2]
    kioskDetails.kioskPhone = userResponse[4]
    kioskDetails.kioskEmail = userEmail.value.trim()
    kioskDetails.kioskPassword = userResponse[3]
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


function renderQuestions(){
    renderContent(getStoreSetUpCard(), appContainer)
}


function goToNextQuestion(){
      counter+=1
      renderContent(getStoreSetUpCard(),appContainer)
      console.log(userResponses)
}

function addAProductToKiosk(name, price, number, remark){
    
    if( name == '' || price =='' || number== ''){
        remark.style.display='block'
        remark.style.backgroundColor='rgb(255, 157, 157)'
        remark.style.borderRadius = '1rem'
        remark.style.padding = '0.5rem'
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
    
    checkProductList()
    remark.style.display='block'
    remark.style.backgroundColor='#d4ffdbff'
    remark.style.padding = '0.5rem'
    remark.style.borderRadius = '1rem'
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

function displayContentForTime(container, text, time, bg='transparent'){
    container.style.display = 'block'
    container.style.backgroundColor =  bg
    container.innerHTML = text

    setTimeout(()=>{
        container.style.display = 'none'
    }, time)

}

function deleteAProduct(productId){
   const index = kioskProducts.findIndex(p => p.productId == productId);
   kioskProducts.splice(index, 1)
   console.log(kioskProducts)
   saveKioskData(STORAGE_KEY, allKioskData)
   checkProductList()
   renderContent(getUserKiosk(), appContainer)
}

function editAProduct(productId, newName,newPrice, newStock){
  const index = kioskProducts.findIndex(p => p.productId == productId)

  kioskProducts[index].productName = newName
  kioskProducts[index].productPrice = newPrice
  kioskProducts[index].noInStock= newStock

   saveKioskData(STORAGE_KEY, allKioskData)
   renderContent(getUserKiosk(), appContainer)
}


function saveKioskData(key, data){
    localStorage.setItem(key, JSON.stringify(data))
}

function loadKioskData(key){
    localStorage.getItem(key)
    const RAW = localStorage.getItem(STORAGE_KEY);
  if (RAW) {
    try {
      let retrievedData = JSON.parse(RAW);
      allKioskData = retrievedData
      kioskDetails = allKioskData.details
      hasUserCreatedKiosk= allKioskData.isUser
      kioskProducts = allKioskData.products
      kioskDB = allKioskData.kioskDb
    } catch (e) {
      console.error("Error parsing data from localStorage", e);
   
    }
}}



function searchKiosk(query){
    return kioskDb.filter((kiosk)=> {
    return kiosk.kioskCategory.toLowerCase().includes(query) || kiosk.kioskName.toLowerCase().includes(query) || kiosk.kioskSells.toLowerCase().includes(query)} )

  
}

function getCategoryColor(arri){
    cat = arri
    console.log(cat)
    return Number(categoryColors.cat)
}