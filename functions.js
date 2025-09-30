
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
        productId: (kioskProducts.length)+1,
        productName: name,
        productPrice: price,
        noInStock: number,
        productImage: currentProductImage
    }

    
    kioskProducts.push(newProduct)

    currentProductImage = null
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


function checkProductList(){
    if(kioskProducts.length == 0){
        isProductlistEmpty = true

    }
    else{
        isProductlistEmpty = false
    }
}

function deleteAProduct(productId){

   productId -= 1
   kioskProducts.splice(productId, 1)
   console.log(kioskProducts)
   checkProductList()
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
      kioskDetails = retrievedData[0]
      hasUserCreatedKiosk= retrievedData[1]

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