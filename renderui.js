let kioskDescriptionUp = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
`

let kioskDescriptionDown = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>` 



function getStoreSetUpCard() {
  return `  
    <div id="store_setup_card">
      <button id = "cancel_store_creation" ><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</button>
      <div class="progress_bar">
        <div class="progress" style="width:${storeSetUpQuestions[counter].progressBar}"></div>
      </div>
      <h1>${storeSetUpQuestions[counter].question}</h1>

      <div id="product_categories" class="produc_categories" style="display:${storeSetUpQuestions[counter].categoriesVisibility}">

      ${storeSetUpQuestions[counter].categories.map((category)=>{
        return `
        <div id ="user_store_creation_option"  class="category">${category} </div>`
      }).join('')}
      
      </div>

      <input 
      
        accept="image/*" 
        id = "user_store_creation_input"
        type = ${storeSetUpQuestions[counter].inputType}
        required
        style="display:${storeSetUpQuestions[counter].placeholderVisibility}" 
        placeholder="${storeSetUpQuestions[counter].placeholder}"
      />
      <button type="submit" id="next_question_button" class="btn" style="display:${storeSetUpQuestions[counter].buttonVisibility}">Next Question</button>
    </div>`
}

function getUserKiosk(){
  
    return `<div class="kiosk" id="kiosk" >
            <div class="kiosk_head">
            
           
            <div class="kiosk_id">
            <div class = "kiosk_image" ><img src=${kioskDetails.KioskLogo} width="100%" height="100%"/></div>
            <h1>${kioskDetails.kioskName}</h1>
            <div class="kiosk_tab">category</div>
            <button id="open_description_button" style="border-radius:1.5rem; padding:1rem; border-style:none; background-color:transparent"> ${iskioskDescription ? kioskDescriptionUp : kioskDescriptionDown} </button>


            </div>
            
            <div class="kiosk_options">
                        <div class="kiosk_tab">
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

Products</div>
              <div class="kiosk_tab" id="kiosk_orders">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
Orders</div>
              <div class="kiosk_tab" id="kiosk_settings"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
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

            <div class="kiosk_description_card"   style ="display: ${iskioskDescription? 'block':'none'}">
               <p style="font-size: 1rem"> Sells ${kioskDetails.kioskDescription}</p>
               <p style="font-size: 1.5rem">${kioskDetails.kioskDescription}</p>
               <p style="font-size: 1rem">${kioskDetails.kioskPhone}</p>
            </div>


             <div class="empty_state" style="display:${isProductlistEmpty?'block':'none'}" ><img src="./assets/empty.png" width= '300px'>
             <p> You have nothing in your kiosk</p>
             </div>
            

            <div class="products_list" id="all_products_list">

            ${kioskProducts.map((product)=>{
              return `
                        
            <div class= "product_card">
            <div id="product_edit_options">
            <svg id="delete_product"  product_id=${product.productId}  mlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
 
            </div>
            <div id="product_image"><img src=${product.productImage} width="100%" height="100%"/></div>
            <p>${product.productName}</p>
            <p style="font-size: 1.1rem; ">${'#'+ product.productPrice}</p>
            <p style="font-size: 0.9rem">${'Number in stock: '+product.productPrice}</p>

            </div>
            `

            })}
       

            </div>


            <form id="add_a_product_card" style="display: ${isAddProductCard? 'block': 'none'}">
             <p id="remark" >Hello wolrd</p>
          <svg  id = "cancel_add_product"   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
     
      

            <div>
            <label > Product Name </label>
            <input id="product_name" type="text" placeholder="enter the name of the product you want to add" required/>
            </div>


            <div>
            <label > Product Image </label>
              <input 
    type="file" 
    id="product_image" 
    name="productImage" 
    accept="image/*" 
    required
  >
            </div>


          
            

            <div>
            <label > Prcie per unit </label>
            <input id="product_price"  type="number" placeholder="enter the price" required/>
            </div>
            
            <div>
            <label > Number in stock</label>
            <input id="no_in_stock"  placeholder="enter the number in stock" type="number"  required/>
            </div>


            <div>
            <input class="btn" type="submit" id="submit_product_button" />
            </div>

            
            </form>
           

            <button class="btn_medium" id="add_product_button" > + Add a product </button>
           </div>` 
}



function getSettingsPage(){
  return `<div>
  <h1> Settings </h1>
  </div>`
}

function getNoKiosk(){
    return `
            <div class="kiosk">
            <h1>You do not have any kiosk</h1>
            <button class="btn" id="create_kiosk">  create a new kiosk now</button>
            </div> `
}





  
 




