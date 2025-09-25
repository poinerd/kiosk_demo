let counter = 0
const STORAGE_KEY = 'user_kiosk'
let iskioskDescription = false
let userResponses = []
let isAddProductCard = false
let isProductlistEmpty = true
let currentProductImage = null;
let currentKioskLogo = null
let hasUserCreatedKiosk = false
let kioskOwnerName = null


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
    inputType: 'text',
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

let kioskProducts = [
]

let kioskDetails ={
    kioskName : '',
    kioskCategory: '',
    kioskDescription:'',
    kioskEmail:'',
    kioskPhone:'',
    KioskLogo: null
    // kioskproducts:kioskProducts
}


let userKiosks = [

]

