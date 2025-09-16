


let counter = 0
let userResponses = []

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

let kioskProducts = []

let kioskDetails ={
    kioskName : '',
    // kioskCategory: '',
    kioskDescription:'',
    // kioskEmail:'',
    kioskPhone:'',
    // kioskproducts:kioskProducts
}


 