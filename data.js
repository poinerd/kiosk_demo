let counter = 0
const STORAGE_KEY = 'user_kiosk'
let iskioskDescription = false
let userResponses = []
let isAddProductCard = false
let isProductlistEmpty = true 
let currentProductImage = null;
let currentKioskLogo = null
let hasUserCreatedKiosk = false
let allKioskData = []
let kioskOwnerName = null
let lightMode = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>
`

let darkMode = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>
`
let isLightMode = true

let kioskProducts = []

const storeSetUpQuestions = [


    {
    question: 'What is your name?',
    placeholder: 'enter the name of your store',
    inputType: 'text',
    buttonVisibility: 'block',
    categoriesVisibility: 'none',
    placeholderVisibility: 'block',
    progressBar: "14.3%",
    categories: ['Technology', 'Art', 'Sloftware', 'Hard'],
    buttonText: "Next Question"
  },

  {
    question: kioskOwnerName ,
    placeholder: 'enter the name of your store',
    inputType: 'text',
    buttonVisibility: 'block',
    categoriesVisibility: 'none',
    placeholderVisibility: 'block',
    progressBar: "14.3%",
    categories: ['Technology', 'Art', 'Sloftware', 'Hard'],
    buttonText: "Next Question"
  },
  {
    question: 'What do you sell?',
    placeholder: 'enter the kind of products',
    inputType: 'text',
    buttonVisibility: 'block',
    categoriesVisibility: 'none',
    placeholderVisibility: 'block',
    progressBar: "28.6%",
    categories: ['Technology', 'Art', 'Sloftware', 'Hard'],
    buttonText: "Next Question"
  },

    {
    question: 'What category does your product fall into? (pick one or two)',
    placeholder: 'enter the kind of products',
    inputType: 'text',
    buttonVisibility: 'block',
    categoriesVisibility: 'block',
    placeholderVisibility: 'none',
    progressBar: "42.9%",
    categories: ['Technology', 'Art', 'Software', 'Hardware', 'Cosmetics', 'Fashion'],
    buttonText: "Next Question"
  },

     {
    question: 'Write a description of your kiosk, <br/> Let buyers know about you and your business when they see your kiosk.',
    placeholder: 'Enter a short description of your store users can see when they come acroos your kiosk online ',
    inputType: 'text-area',
    buttonVisibility: 'block',
    categoriesVisibility: 'none',
    placeholderVisibility: 'block',
    progressBar: "57.1%",
    categories: ['Technology', 'Art', 'Sloftware', 'Hard'],
    buttonText: "Next Question"
  },

   {
    question: 'Input your business phone buyers can contact you through',
    placeholder: 'enter the your business phone number',
    inputType: 'tel',
    buttonVisibility: 'block',
    categoriesVisibility: 'none',
    placeholderVisibility: 'block',
    progressBar: "71.4%",
    categories: ['Technology', 'Art', 'Sloftware', 'Hard'],
    buttonText: "Next Question"
 
  },

   {
    question: 'Input your password for acecssing your kiosk',
    placeholder: 'enter your password',
    inputType: 'password',
    buttonVisibility: 'block',
    categoriesVisibility: 'none',
    placeholderVisibility: 'block',
    progressBar: "71.4%",
    categories: ['Technology', 'Art', 'Sloftware', 'Hard'],
    buttonText: "Next Question"
 
  },

   {
    question: 'Confirm your password',
    placeholder: 'Confirm your password',
    inputType: 'password',
    buttonVisibility: 'block',
    categoriesVisibility: 'none',
    placeholderVisibility: 'block',
    progressBar: "71.4%",
    categories: ['Technology', 'Art', 'Sloftware', 'Hard'],
    buttonText: "Next Question"
 
  },
     {
    question: 'Input your business logo (optional)',
    placeholder: 'enter the your business phone number',
    inputType: 'file',
    buttonVisibility: 'block',
    categoriesVisibility: 'none',
    placeholderVisibility: 'block',
    progressBar: "85.7%",
    categories: ['Technology', 'Art', 'Sloftware', 'Hard'],
    buttonText: "Next Question"
 
  },
   

     {
    question: 'Welldone, Your kiosk has been sucessfully set up!',
    placeholder: 'enter the your business phone number',
    buttonVisibility: 'block',
    categoriesVisibility: 'none',
    placeholderVisibility: 'none',
    progressBar: "100%",
    categories: ['Technology', 'Art', 'Sloftware', 'Hard'],
    buttonText: "See your Kiosk now"
  },
]



let kioskDetails ={
    kioskName : '',
    kioskCategory: '',
    kioskDescription:'',
    kioskEmail:'',
    kioskPhone:'',
    kioskPassword: '',
    KioskLogo: null
    // kioskproducts:kioskProducts
}


let userKiosks = [

]


let categoryColors ={
  technology: 'red',
  art : 'science'
}

let kioskDB = [
  
]