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
    placeholder: 'enter your name',
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
    question: 'Enter a password to access your store',
    placeholder: 'Enter a secure password ',
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



let kioskDb = [
  {
    kioskName: "Jabari Store",
    kioskCategory: "technology",
    kioskDescription: "We sell the most immersive games you can think of",
    kioskEmail: "obadofinadedapo123@gmail.com",
    kioskPhone: "09032521394",
    kioskSells: "Game Disks"
  },
  {
    kioskName: "TasteBite Foods",
    kioskCategory: "food",
    kioskDescription: "Delicious snacks, fast meals, and fresh drinks daily.",
    kioskEmail: "tastebitefoods@gmail.com",
    kioskPhone: "08123456701",
    kioskSells: "snacks"
  },
  {
    kioskName: "PixelCraft Studios",
    kioskCategory: "art",
    kioskDescription: "Digital illustrations, portraits, and creative art prints.",
    kioskEmail: "pixelcraft@gmail.com",
    kioskPhone: "08123456702",
    kioskSells: "art prints"
  },
  {
    kioskName: "TrendFit Boutique",
    kioskCategory: "fashion",
    kioskDescription: "Trendy wears and fashion accessories for all occasions.",
    kioskEmail: "trendfitboutique@gmail.com",
    kioskPhone: "08123456703",
    kioskSells: "clothes"
  },
  {
    kioskName: "VoltEdge Gadgets",
    kioskCategory: "electronics",
    kioskDescription: "Latest tech gadgets and smart devices.",
    kioskEmail: "voltedgegadgets@gmail.com",
    kioskPhone: "08123456704",
    kioskSells: "smartphones"
  },
  {
    kioskName: "HandyHub Repairs",
    kioskCategory: "technology",
    kioskDescription: "We fix, upgrade, and optimize all your devices.",
    kioskEmail: "handyhubrepairs@gmail.com",
    kioskPhone: "08123456705",
    kioskSells: "repairs"
  },
  {
    kioskName: "ChopLife Kitchen",
    kioskCategory: "food",
    kioskDescription: "African dishes made fresh daily for everyone.",
    kioskEmail: "choplife@gmail.com",
    kioskPhone: "08123456706",
    kioskSells: "local meals"
  },
  {
    kioskName: "Canvas & Soul",
    kioskCategory: "art",
    kioskDescription: "Hand-painted masterpieces that tell unique stories.",
    kioskEmail: "canvasandsoul@gmail.com",
    kioskPhone: "08123456707",
    kioskSells: "paintings"
  },
  {
    kioskName: "StyleVerse",
    kioskCategory: "fashion",
    kioskDescription: "Affordable designer fashion for men and women.",
    kioskEmail: "styleverse@gmail.com",
    kioskPhone: "08123456708",
    kioskSells: "designer clothes"
  },
  {
    kioskName: "BrightTech Electronics",
    kioskCategory: "electronics",
    kioskDescription: "Home appliances and tech accessories you can trust.",
    kioskEmail: "brighttech@gmail.com",
    kioskPhone: "08123456709",
    kioskSells: "TVs and accessories"
  },
  {
    kioskName: "MegaMart General",
    kioskCategory: "others",
    kioskDescription: "A one-stop shop for everyday essentials.",
    kioskEmail: "megamartgeneral@gmail.com",
    kioskPhone: "08123456710",
    kioskSells: "groceries"
  },
  {
    kioskName: "Urban Pulse Wear",
    kioskCategory: "fashion",
    kioskDescription: "Streetwear for the bold and expressive.",
    kioskEmail: "urbanpulsewear@gmail.com",
    kioskPhone: "08123456711",
    kioskSells: "streetwear"
  },
  {
    kioskName: "CodeNest Systems",
    kioskCategory: "technology",
    kioskDescription: "Custom software and hardware solutions for startups.",
    kioskEmail: "codenestsystems@gmail.com",
    kioskPhone: "08123456712",
    kioskSells: "software"
  },
  {
    kioskName: "ZapMeals Express",
    kioskCategory: "food",
    kioskDescription: "Fast and healthy meal deliveries around the city.",
    kioskEmail: "zapmealsexpress@gmail.com",
    kioskPhone: "08123456713",
    kioskSells: "fast food"
  },
  {
    kioskName: "Artify Creations",
    kioskCategory: "art",
    kioskDescription: "Creative art pieces and sculpture commissions.",
    kioskEmail: "artifycreations@gmail.com",
    kioskPhone: "08123456714",
    kioskSells: "sculptures"
  },
  {
    kioskName: "ElectroPlus Hub",
    kioskCategory: "electronics",
    kioskDescription: "Get top-tier electronics and smart accessories here.",
    kioskEmail: "electroplushub@gmail.com",
    kioskPhone: "08123456715",
    kioskSells: "gadgets"
  },
  {
    kioskName: "Savor Treats",
    kioskCategory: "food",
    kioskDescription: "Baked goods, pastries, and fresh bread daily.",
    kioskEmail: "savortreats@gmail.com",
    kioskPhone: "08123456716",
    kioskSells: "pastries"
  },
  {
    kioskName: "Techfinity World",
    kioskCategory: "technology",
    kioskDescription: "Your gateway to next-gen innovations and devices.",
    kioskEmail: "techfinityworld@gmail.com",
    kioskPhone: "08123456717",
    kioskSells: "AI gadgets"
  },
  {
    kioskName: "Fusion Threads",
    kioskCategory: "fashion",
    kioskDescription: "Custom-tailored outfits for modern fashion lovers.",
    kioskEmail: "fusionthreads@gmail.com",
    kioskPhone: "08123456718",
    kioskSells: "tailored outfits"
  },
  {
    kioskName: "Everyday Essentials",
    kioskCategory: "others",
    kioskDescription: "Everything you need for home and lifestyle.",
    kioskEmail: "everydayessentials@gmail.com",
    kioskPhone: "08123456719",
    kioskSells: "home supplies"
  },
  {
    kioskName: "DigitalHive Solutions",
    kioskCategory: "technology",
    kioskDescription: "Building digital tools for real-world problems.",
    kioskEmail: "digitalhive@gmail.com",
    kioskPhone: "08123456720",
    kioskSells: "apps"
  },
  {
    kioskName: "CookSpot",
    kioskCategory: "food",
    kioskDescription: "Your favorite homemade dishes, now on the go.",
    kioskEmail: "cookspot@gmail.com",
    kioskPhone: "08123456721",
    kioskSells: "home-cooked food"
  },
  {
    kioskName: "The Art Corner",
    kioskCategory: "art",
    kioskDescription: "A collection of unique and inspiring visual art.",
    kioskEmail: "theartcorner@gmail.com",
    kioskPhone: "08123456722",
    kioskSells: "artworks"
  },
  {
    kioskName: "GearGrid",
    kioskCategory: "electronics",
    kioskDescription: "Powerful tools and electronic devices for professionals.",
    kioskEmail: "geargrid@gmail.com",
    kioskPhone: "08123456723",
    kioskSells: "tools"
  },
  {
    kioskName: "Modish Looks",
    kioskCategory: "fashion",
    kioskDescription: "Modern clothing and accessories for every style.",
    kioskEmail: "modishlooks@gmail.com",
    kioskPhone: "08123456724",
    kioskSells: "clothing"
  },
  {
    kioskName: "FreshPoint Market",
    kioskCategory: "others",
    kioskDescription: "Fresh groceries, drinks, and local products.",
    kioskEmail: "freshpointmarket@gmail.com",
    kioskPhone: "08123456725",
    kioskSells: "groceries"
  },
  {
    kioskName: "ByteForge Tech",
    kioskCategory: "technology",
    kioskDescription: "Smart automation and embedded systems experts.",
    kioskEmail: "byteforge@gmail.com",
    kioskPhone: "08123456726",
    kioskSells: "embedded kits"
  },
  {
    kioskName: "SweetCrave Bakery",
    kioskCategory: "food",
    kioskDescription: "Mouthwatering cakes and pastries for every event.",
    kioskEmail: "sweetcravebakery@gmail.com",
    kioskPhone: "08123456727",
    kioskSells: "cakes"
  },
  {
    kioskName: "Creative Pulse",
    kioskCategory: "art",
    kioskDescription: "Art that sparks emotions and inspires the soul.",
    kioskEmail: "creativepulse@gmail.com",
    kioskPhone: "08123456728",
    kioskSells: "illustrations"
  },
  {
    kioskName: "Urban Gadgets",
    kioskCategory: "electronics",
    kioskDescription: "Trendy accessories and portable gadgets.",
    kioskEmail: "urbangadgets@gmail.com",
    kioskPhone: "08123456729",
    kioskSells: "headphones"
  },
  {
    kioskName: "Royal Stitch",
    kioskCategory: "fashion",
    kioskDescription: "Exquisite traditional and modern wears.",
    kioskEmail: "royalstitch@gmail.com",
    kioskPhone: "08123456730",
    kioskSells: "native wears"
  },
  {
    kioskName: "DailyShop",
    kioskCategory: "others",
    kioskDescription: "All-purpose convenience shop near you.",
    kioskEmail: "dailyshop@gmail.com",
    kioskPhone: "08123456731",
    kioskSells: "essentials"
  },
  {
    kioskName: "NextGen Robotics",
    kioskCategory: "technology",
    kioskDescription: "Educational and industrial robotic systems.",
    kioskEmail: "nextgenrobotics@gmail.com",
    kioskPhone: "08123456732",
    kioskSells: "robot kits"
  },
  {
    kioskName: "FoodLinx",
    kioskCategory: "food",
    kioskDescription: "Connecting local kitchens with hungry customers.",
    kioskEmail: "foodlinx@gmail.com",
    kioskPhone: "08123456733",
    kioskSells: "meals"
  },
  {
    kioskName: "ColorVibe Studio",
    kioskCategory: "art",
    kioskDescription: "Colorful art expressions that brighten spaces.",
    kioskEmail: "colorvibestudio@gmail.com",
    kioskPhone: "08123456734",
    kioskSells: "murals"
  },
  {
    kioskName: "PowerTech Hub",
    kioskCategory: "electronics",
    kioskDescription: "Reliable power solutions and smart devices.",
    kioskEmail: "powertechhub@gmail.com",
    kioskPhone: "08123456735",
    kioskSells: "inverters"
  },
  {
    kioskName: "FitWardrobe",
    kioskCategory: "fashion",
    kioskDescription: "Perfectly fitted attires for confident people.",
    kioskEmail: "fitwardrobe@gmail.com",
    kioskPhone: "08123456736",
    kioskSells: "fitted suits"
  },
  {
    kioskName: "SupremeMart",
    kioskCategory: "others",
    kioskDescription: "Retail supplies and basic household goods.",
    kioskEmail: "suprememart@gmail.com",
    kioskPhone: "08123456737",
    kioskSells: "household items"
  },
  {
    kioskName: "SmartLink Technologies",
    kioskCategory: "technology",
    kioskDescription: "Building smart IoT devices for modern living.",
    kioskEmail: "smartlinktech@gmail.com",
    kioskPhone: "08123456738",
    kioskSells: "IoT devices"
  },
  {
    kioskName: "Grill House",
    kioskCategory: "food",
    kioskDescription: "Freshly grilled meat and tasty barbecue.",
    kioskEmail: "grillhouse@gmail.com",
    kioskPhone: "08123456739",
    kioskSells: "grilled meat"
  },
  {
    kioskName: "Visionary Arts",
    kioskCategory: "art",
    kioskDescription: "Where creativity meets deep storytelling.",
    kioskEmail: "visionaryarts@gmail.com",
    kioskPhone: "08123456740",
    kioskSells: "art pieces"
  },
  {
    kioskName: "ElectroMart",
    kioskCategory: "electronics",
    kioskDescription: "Quality electronics for homes and offices.",
    kioskEmail: "electromart@gmail.com",
    kioskPhone: "08123456741",
    kioskSells: "appliances"
  },
  {
    kioskName: "TrendMuse",
    kioskCategory: "fashion",
    kioskDescription: "Fashion-forward outfits inspired by culture.",
    kioskEmail: "trendmuse@gmail.com",
    kioskPhone: "08123456742",
    kioskSells: "casual wear"
  },
  {
    kioskName: "HomeSquare",
    kioskCategory: "others",
    kioskDescription: "Affordable home décor and utilities.",
    kioskEmail: "homesquare@gmail.com",
    kioskPhone: "08123456743",
    kioskSells: "home items"
  },
  {
    kioskName: "ByteForge Robotics",
    kioskCategory: "technology",
    kioskDescription: "Smart robotic solutions for education and fun.",
    kioskEmail: "byteforgerobotics@gmail.com",
    kioskPhone: "08123456744",
    kioskSells: "robot kits"
  },
  {
    kioskName: "DailyBite Diner",
    kioskCategory: "food",
    kioskDescription: "Tasty meals made with love every day.",
    kioskEmail: "dailybitediner@gmail.com",
    kioskPhone: "08123456745",
    kioskSells: "rice and stew"
  },
  {
    kioskName: "NeoCanvas Studio",
    kioskCategory: "art",
    kioskDescription: "Modern art inspired by nature and emotion.",
    kioskEmail: "neocanvas@gmail.com",
    kioskPhone: "08123456746",
    kioskSells: "canvas art"
  },
  {
    kioskName: "ElectroSphere",
    kioskCategory: "electronics",
    kioskDescription: "Everything from phones to high-end sound systems.",
    kioskEmail: "electrosphere@gmail.com",
    kioskPhone: "08123456747",
    kioskSells: "sound systems"
  },
  {
    kioskName: "ChicHaus",
    kioskCategory: "fashion",
    kioskDescription: "Elegant fashion pieces with timeless appeal.",
    kioskEmail: "chichaus@gmail.com",
    kioskPhone: "08123456748",
    kioskSells: "dresses"
  },
  {
    kioskName: "QuickStop",
    kioskCategory: "others",
    kioskDescription: "Grab your daily essentials in seconds.",
    kioskEmail: "quickstop@gmail.com",
    kioskPhone: "08123456749",
    kioskSells: "snacks and drinks"
  },
  {
    kioskName: "TechSavvy World",
    kioskCategory: "technology",
    kioskDescription: "Smart solutions for the connected generation.",
    kioskEmail: "techsavvyworld@gmail.com",
    kioskPhone: "08123456750",
    kioskSells: "gadgets"
  }
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

