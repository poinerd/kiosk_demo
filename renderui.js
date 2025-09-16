function getStoreSetUpCard() {
  return `  
    <form id="store_setup_card">
      <svg id = "cancel_store_creation" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

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
            <h1>${kioskDetails.kioskName}</h1>
                <div></div>
                <p>${kioskDetails.kioskDescription}</p>
                <p>${kioskDetails.kioskPhone}</p>
            </div>

            <div class="products_list"> 
            </div>
         </div>`
}

function getNoKiosk(){
    return `
            <div class="kiosk">
            <h1>You do not have any kiosk</h1>
            <button class="btn" id="create_kiosk">  create a new kiosk now</button>
            </div> `
}




function renderQuestion() {
 
  renderContent(getStoreSetUpCard(), appContainer)
  const nextQuestionButton = document.getElementById('next_question_button')
  const userStoreCreationInput = document.getElementById('user_store_creation_input')
   const userStoreCreationOption = document.getElementById('user_store_creation_option')

  nextQuestionButton.addEventListener('click', (e) => {

    
    userResponses.push(userStoreCreationInput.value)
   
    e.preventDefault()
    counter++
    if (counter < storeSetUpQuestions.length) {
      userResponses.push()
      console.log(userResponses)
      renderQuestion()
      
    } else {
        setKioskDetails(userResponses)
        renderContent(getUserKiosk(), appContainer)
    }
  })


}