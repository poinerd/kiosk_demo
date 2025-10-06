let counter = 0
const STORAGE_KEY = 'user_kiosk'
let kioskProducts = []
let iskioskDescription = false
let userResponses = []
let isAddProductCard = false
let isProductlistEmpty = true 
let currentProductImage = null;
let currentKioskLogo = null
let hasUserCreatedKiosk = false
let productsSold = null
let isLightMode = true
let username = null
let cat = null
let isSearchEmpty = true


let kioskDetails ={
    kioskName : '',
    kioskUserName : '',
    kioskCategory: '',
    kioskDescription:'',
    kioskEmail:'',
    kioskPhone:'',
    kioskPassword: '',
    kioskSells: 'Fruits',
    KioskLogo: null
   
}



let kioskOwnerName = null
let lightMode = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>
`
let darkMode = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
</svg>
`





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
    progressBar: "28.6%",
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
    progressBar: "42.9%",
    categories: ['Technology', 'Art', 'Sloftware', 'Hard'],
    buttonText: "Next Question"
  },

    {
    question: 'What category does your product fall into? (pick one)',
    placeholder: 'enter the kind of products',
    inputType: 'text',
    buttonVisibility: 'block',
    categoriesVisibility: 'block',
    placeholderVisibility: 'none',
    progressBar: "57.2%",
    categories: ['Technology', 'Art', 'Electronics', 'Food', 'Fashion', 'Others'],
    buttonText: "Next Question"
  },

     {
    question: 'Write a description of your kiosk, <br/> Let buyers know about you and your business when they see your kiosk.',
    placeholder: 'Enter a short description of your store users can see when they come across your kiosk online ',
    inputType: 'text-area',
    buttonVisibility: 'block',
    categoriesVisibility: 'none',
    placeholderVisibility: 'block',
    progressBar: "71.5%",
    categories: ['Technology', 'Art', 'Sloftware', 'Hard'],
    buttonText: "Next Question"
  },


     {
    question: 'Enter a pssword to access your store',
    placeholder: 'Enter a short description of your store users can see when they come across your kiosk online ',
    inputType: 'password',
    buttonVisibility: 'block',
    categoriesVisibility: 'none',
    placeholderVisibility: 'block',
    progressBar: "71.5%",
    categories: ['Technology', 'Art', 'Sloftware', 'Hard'],
    buttonText: "Next Question"
  },

   {
    question: 'Almost there !<br/> Input your business phone buyers can contact you through',
    placeholder: 'enter the your business phone number',
    inputType: 'tel',
    buttonVisibility: 'block',
    categoriesVisibility: 'none',
    placeholderVisibility: 'block',
    progressBar: "85.8%",
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


let kioskDb =[

  
 {
    kioskName : 'Jabari Stores',
    kioskCategory: 'technology',
    kioskDescription:' wes sell the best things i the world',
    kioskEmail:'obadofinadedapo123@gmail.com',
    kioskPhone:'09032521394',
    kioskSells: 'cigar'
},


 {
    kioskName : 'Jabari Stores',
    kioskCategory: 'Electronics',
    kioskDescription:' wes sell the best things i the world',
    kioskEmail:'123@gmail.com',
    kioskPhone:'09032521394',
    kioskSells: 'Jewelrries'
},


 {
    kioskName : 'Jabari Stores',
    kioskCategory: 'Electronics',
    kioskDescription:' wes sell the best things i the world',
    kioskEmail:'123@gmail.com',
    kioskPhone:'09032521394',
    kioskSells: 'Jewelrries'
},


 {
    kioskName : 'Jabari Stores',
    kioskCategory: 'Electronics',
    kioskDescription:' wes sell the best things i the world',
    kioskEmail:'123@gmail.com',
    kioskPhone:'09032521394',
    kioskSells: 'Jewelrries'
},

 {
    kioskName : 'Jabari Stores',
    kioskCategory: 'Electronics',
    kioskDescription:' wes sell the best things i the world',
    kioskEmail:'123@gmail.com',
    kioskPhone:'09032521394',
    kioskSells: 'Jewelrries'
},


 {
    kioskName : 'Jabari Stores',
    kioskCategory: 'Electronics',
    kioskDescription:' wes sell the best things i the world',
    kioskEmail:'123@gmail.com',
    kioskPhone:'09032521394',
    kioskSells: 'Jewelrries'
},


 {
    kioskName : 'Jabari Stores',
    kioskCategory: 'Fashion',
    kioskDescription:' wes sell the best things i the world',
    kioskEmail:'123@gmail.com',
    kioskPhone:'09032521394',
    kioskSells: 'Jewelrries'
},


 {
    kioskName : 'Jabari Stores',
    kioskCategory: 'others',
    kioskDescription:' wes sell the best things i the world',
    kioskEmail:'123@gmail.com',
    kioskPhone:'09032521394',
    kioskSells: 'Jewelrries'
},


 {
    kioskName : 'Jabari Stores',
    kioskCategory: 'Food',
    kioskDescription:' wes sell the best things i the world',
    kioskEmail:'123@gmail.com',
    kioskPhone:'09032521394',
    kioskSells: 'Jewelrries'
},


 {
    kioskName : 'Jabari Stores',
    kioskCategory: 'Electronics',
    kioskDescription:' wes sell the best things i the world',
    kioskEmail:'123@gmail.com',
    kioskPhone:'09032521394',
    kioskSells: 'Jewelrries'
},

]



let allKioskData = {
  details : kioskDetails,
  products : kioskProducts,
  isUser : hasUserCreatedKiosk,
  kioskDb : kioskDb
}


let categoryColors ={
  art :  '#dedcff',
  fashion : '#FFDCFA',
  Food : '#FFFADC',
  technology: '#E2FFDC',
  Electronics: '#FADCFF',
  others: '#DDDCDC'

     
}

