let kioskDescriptionUp = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
`

let kioskDescriptionDown = `<svg id="description_up"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>` 



function getStoreSetUpCard() {
  return `  
    <form id="store_setup_card">
      <button id = "cancel_store_creation" ><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</button>
      <div class="progress_bar">
        <div class="progress" style="width:${storeSetUpQuestions[counter].progressBar}"></div>
      </div>
      <h1>${storeSetUpQuestions[counter].question}</h1>
      <div id="product_categories" style="display:${storeSetUpQuestions[counter].categoriesVisibility}">

      ${storeSetUpQuestions[counter].categories.map((category)=>{
        return `<span id ="user_store_creation_option"  class="category">${category} </span>`
      }).join('')}
      </div>

      <input 
        id = "user_store_creation_input"
        required="required"
        style="display:${storeSetUpQuestions[counter].placeholderVisibility}" 
        placeholder="${storeSetUpQuestions[counter].placeholder}"
      />
      <button type="submit" id="next_question_button" class="btn" style="display:${storeSetUpQuestions[counter].buttonVisibility}">Next Question</button>
    </form>`
}

function getUserKiosk(){
    return `<div class="kiosk">
            <div class="kiosk_head">
            
            <div class="kiosk_id">
            <div class = "kiosk_image" ></div>
            <h1>${kioskDetails.kioskName}</h1>
            <div class="kiosk_tab">category</div>
            <button id="open_description_button" style="border-radius:1.5rem; border-style:none"> ${iskioskDescription ? kioskDescriptionUp : kioskDescriptionDown} </button>


            </div>
            
            <div class="kiosk_options">
              <div class="kiosk_tab">Orders</div>
              <div class="kiosk_tab"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
Settings</div>
              <div class="kiosk_tab" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
</svg>
Share</div>
            </div>

            </div>

            <div class="kiosk_description_card" style ="display: ${iskioskDescription? 'block':'none'}">
               <p style="font-size: 1rem"> Sells ${kioskDetails.kioskDescription}</p>
               <p style="font-size: 1.5rem">${kioskDetails.kioskDescription}</p>
               <p style="font-size: 1rem">${kioskDetails.kioskPhone}</p>
            </div>

            <div class="products_list" id="all_products_list"> 
            </div>

            <button class="btn"> + Add a product </button>
           </div>`
}



function getNoKiosk(){
    return `
            <div class="kiosk">
            <h1>You do not have any kiosk</h1>
            <button class="btn" id="create_kiosk">  create a new kiosk now</button>
            </div> `
}


function aProductCard(){
  return `
  <div>
  <div></div>
  <p>This is the product name</p>
  <p>This is the product price</p>
  <p> 25 pieces in stock</p>
  </div>
         `
}




function renderQuestion() {
 
  renderContent(getStoreSetUpCard(), appContainer)
  const nextQuestionButton = document.getElementById('next_question_button')
  const userStoreCreationInput = document.getElementById('user_store_creation_input')

  
  nextQuestionButton.addEventListener('click', (e) => {

    
    userResponses.push(userStoreCreationInput.value)
    console.log(userResponses)
   
    e.preventDefault()
    counter++
    if (counter < storeSetUpQuestions.length) {
      userResponses.push()
      console.log(userResponses)
      renderQuestion()
      
    } else {
        setKioskDetails(userResponses)
        renderContent(getUserKiosk(), appContainer)
        
        // allProductsList.innerHTML = aProductCard()

        const openDescriptionButton = document.getElementById('open_description_button')
        const descriptionCard = document.querySelector('.kiosk_description_card');
   

        openDescriptionButton.addEventListener('click',()=>{
            iskioskDescription = ! iskioskDescription
            console.log(iskioskDescription)
            descriptionCard.style.display = iskioskDescription ? 'block' : 'none';
            openDescriptionButton.innerHTML = iskioskDescription ? kioskDescriptionUp : kioskDescriptionDown
        
        })
    }
  })


}