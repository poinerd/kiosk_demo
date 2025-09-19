
function createKiosk(name, description, email, phone, products=[]){

    kioskDetails.kioskName = name
    // kioskDetails.kioskCategory = category
    kioskDetails.kioskDescription = description
    // kioskDetails.kioskEmail = email
    kioskDetails.kioskPhone = phone
    kioskDetails.kioskproducts = products

}




function setKioskDetails(userResponse){
    userResponse.splice(2,1)
    console.log(userResponse)

    kioskDetails.kioskName = userResponse[0]
    kioskDetails.kioskDescription = userResponse[2]
    kioskDetails.kioskPhone = userResponse[3]
    kioskDetails.KioskLogo = userResponses[5]

    console.log(kioskDetails)

}


function renderContent(child, container) {
  container.innerHTML = child
}

function goHome(){
      appContainer.replaceChildren(allSections)
}

function renderQuestions(){
    renderContent(getStoreSetUpCard(), appContainer)
}


function goToNextQuestion(){
  if(counter > 5){
       setKioskDetails(userResponses)
       checkProductList()
       console.log(isProductlistEmpty)
       renderContent(getUserKiosk(), appContainer)     
  }
  else{

      renderContent(getStoreSetUpCard(),appContainer)
      counter+=1
      console.log(userResponses)
   
  }
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
    currentProductImage - null
    checkProductList()
    remark.style.display='block'
    remark.style.backgroundColor='#b8fdff'
    remark.innerHTML = name + " "+'sucessfully added to kiosk!'
    
    setTimeout(()=>{
           remark.style.display='none'
    }, 1000)


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