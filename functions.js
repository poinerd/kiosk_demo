
function createKiosk(name, description, email, phone, products=[]){

    kioskDetails.kioskName = name
    // kioskDetails.kioskCategory = category
    kioskDetails.kioskDescription = description
    // kioskDetails.kioskEmail = email
    kioskDetails.kioskPhone = phone
    kioskDetails.kioskproducts = products

}


function addProductToKiosk(name, price,){
    let product = {
        productName: name,
        productPrice: price,  
    }

    kioskProducts.push(product)
}

function setKioskDetails(userResponse){
    userResponse.splice(2,2)

    // for(let i =0; i< userResponse.length; i++){

    //     for(let detail in kioskDetails){
    //         return detail = userResponse[i]
    //     }
    // }

    // console.log(kioskDetails)

    kioskDetails.kioskName = userResponse[0]
    kioskDetails.kioskDescription = userResponse[1]
    kioskDetails.kioskPhone = userResponse[2]

    console.log(kioskDetails)

}


function renderContent(child, container) {
  container.innerHTML = child
}

function goHome(){
      appContainer.replaceChildren(allSections)
}