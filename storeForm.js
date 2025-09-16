const allSections = document.getElementById('all_sections')
const createKioskButton = document.getElementById('create_kiosk')
const appContainer = document.getElementById('app_container')

const storeSetUpQuestions = [
  {
    question: 'What do you want to call your kiosk?',
    placeholder: 'enter the name of your store',
    buttonVisibility: 'block',
    categoriesVisibility: 'none',
    placeholderVisibility: 'block',
    progressBar: "20%",
    categories: ['Technology', 'Art', 'Sloftware', 'Hard']
  },
  {
    question: 'What are you selling?',
    placeholder: 'enter the kind of products',
    buttonVisibility: 'block',
    categoriesVisibility: 'none',
    placeholderVisibility: 'block',
    progressBar: "40%",
    categories: ['Technology', 'Art', 'Sloftware', 'Hard']
  },

    {
    question: 'What Category does your product fall into? (pick one or two)',
    placeholder: 'enter the kind of products',
    buttonVisibility: 'block',
    categoriesVisibility: 'block',
    placeholderVisibility: 'none',
    progressBar: "60%",
    categories: ['Technology', 'Art', 'Software', 'Hardware', 'Cosmetics', 'Fashion']
  },

     {
    question: 'write a description of your kiosk, Let buyers know about you',
    placeholder: 'enter the kind of products',
    buttonVisibility: 'block',
    categoriesVisibility: 'none',
    placeholderVisibility: 'block',
    progressBar: "80%",
    categories: ['Technology', 'Art', 'Sloftware', 'Hard']
  },

   {
    question: 'attach a business phone',
    placeholder: 'enter the your business phone number',
    buttonVisibility: 'block',
    categoriesVisibility: 'none',
    placeholderVisibility: 'block',
    progressBar: "100%",
    categories: ['Technology', 'Art', 'Sloftware', 'Hard']
 
  },

     {
    question: 'Welldone, Your kiosk has been sucessfully set up!',
    placeholder: 'enter the your business phone number',
    buttonVisibility: 'block',
    categoriesVisibility: 'none',
    placeholderVisibility: 'none',
    progressBar: "100%",
    categories: ['Technology', 'Art', 'Sloftware', 'Hard']
  },
]

let counter = 0// start from first question

function getStoreSetUpCard() {
  return `  
    <form id="store_setup_card">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

      <div class="progress_bar">
        <div class="progress" style="width:${storeSetUpQuestions[counter].progressBar}"></div>
      </div>
      <h1>${storeSetUpQuestions[counter].question}</h1>
      <div id="product_categories" style="display:${storeSetUpQuestions[counter].categoriesVisibility}">

      ${storeSetUpQuestions[counter].categories.map((category)=>{
        return `<span class="category">${category} </span>`
      }).join('')}
      </div>

      <input 
        required="required"
        style="display:${storeSetUpQuestions[counter].placeholderVisibility}" 
        placeholder="${storeSetUpQuestions[counter].placeholder}"
      />
      <button type="submit" id="next_question_button" class="btn" style="display:${storeSetUpQuestions[counter].buttonVisibility}">Next Question</button>
    </form>`
}


function renderContent(child, container) {
  container.innerHTML = child
}


function renderQuestion() {
  renderContent(getStoreSetUpCard(), appContainer)
  const nextQuestionButton = document.getElementById('next_question_button')

  nextQuestionButton.addEventListener('click', (e) => {
    e.preventDefault()
    counter++
    if (counter < storeSetUpQuestions.length) {
      renderQuestion()
    } else {
      appContainer.innerHTML = "<h2>Store setup complete 🎉</h2>"
    }
  })
}

createKioskButton.addEventListener('click', () => {
  allSections.style.display = 'none'
  renderQuestion()
})
