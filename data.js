let counter = 0
let iskioskDescription = true
let userResponses = []
let isAddProductCard = false
let isProductlistEmpty = true
let currentProductImage = null;
let currentKioskLogo = null


const storeSetUpQuestions = [
  {
    question: 'What do you want to call your kiosk?',
    placeholder: 'enter the name of your store',
    inputType: 'text',
    buttonVisibility: 'block',
    categoriesVisibility: 'none',
    placeholderVisibility: 'block',
    progressBar: "20%",
    categories: ['Technology', 'Art', 'Sloftware', 'Hard']
  },
  {
    question: 'What do you sell?',
    placeholder: 'enter the kind of products',
    inputType: 'text',
    buttonVisibility: 'block',
    categoriesVisibility: 'none',
    placeholderVisibility: 'block',
    progressBar: "40%",
    categories: ['Technology', 'Art', 'Sloftware', 'Hard']
  },

    {
    question: 'What category does your product fall into? (pick one or two)',
    placeholder: 'enter the kind of products',
    inputType: 'text',
    buttonVisibility: 'block',
    categoriesVisibility: 'block',
    placeholderVisibility: 'none',
    progressBar: "60%",
    categories: ['Technology', 'Art', 'Software', 'Hardware', 'Cosmetics', 'Fashion']
  },

     {
    question: 'Write a description of your kiosk, <br/> Let buyers know about you and your business when they see your kiosk.',
    placeholder: 'enter the kind of products',
    inputType: 'text',
    buttonVisibility: 'block',
    categoriesVisibility: 'none',
    placeholderVisibility: 'block',
    progressBar: "80%",
    categories: ['Technology', 'Art', 'Sloftware', 'Hard']
  },

   {
    question: 'Input your business phone buyers can contact you through',
    placeholder: 'enter the your business phone number',
    inputType: 'tel',
    buttonVisibility: 'block',
    categoriesVisibility: 'none',
    placeholderVisibility: 'block',
    progressBar: "100%",
    categories: ['Technology', 'Art', 'Sloftware', 'Hard']
 
  },

     {
    question: 'Input your business logo',
    placeholder: 'enter the your business phone number',
    inputType: 'file',
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

let kioskProducts = [
]

let kioskDetails ={
    kioskName : '',
    // kioskCategory: '',
    kioskDescription:'',
    // kioskEmail:'',
    kioskPhone:'',
    KioskLogo: null
    // kioskproducts:kioskProducts
}
