let kioskDescriptionUp = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
`

let kioskDescriptionDown = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>` 



function getStoreSetUpCard(){
  return `  
    <div id="store_setup_page">
    <div id="animation_card"> 
  
    </div>
     
    <div id="store_setup_card">
      <button id = "cancel_store_creation" ><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</button>
      <div class="progress_bar">
        <div class="progress" style="width:${storeSetUpQuestions[counter].progressBar}"></div>
      </div>
      <h1>${storeSetUpQuestions[counter].question}</h1>

<div id="product_categories" 
     class="product_categories" 
     style="display:${storeSetUpQuestions[counter].categoriesVisibility}">

  ${storeSetUpQuestions[counter].categories.map((category,index) => `
    <div id=${index} class="category" id='kiosk_category'>${category}</div>
  `).join("")}

</div>


      <input 
      
        accept="image/*" 
        id = "user_store_creation_input"
        type = ${storeSetUpQuestions[counter].inputType}
        required
        style="display:${storeSetUpQuestions[counter].placeholderVisibility}" 
        placeholder="${storeSetUpQuestions[counter].placeholder}"
      />
      <p id='input_remark' style="font-size: 0.9rem; display:none"></p>
      <button type="submit" id="next_question_button" class="btn" style="display:${storeSetUpQuestions[counter].buttonVisibility}">${storeSetUpQuestions[counter].buttonText}</button>
    </div>
    </div>`
}

function getUserKiosk(){
  
    return `<div class=${isLightMode? 'kiosk' : 'kiosk_dark_mode'} id="kiosk" >
            <div class=${isLightMode? 'kiosk_head' : 'kiosk_head_dark_mode'}>
            
            <div class="kiosk_id">
            <div style=" display:flex; justify-content:center; align-items:center">
            <div class = "kiosk_image" ><img src="../assets/slab.png" width="70%" height="60%"/></div>
            <h1 style="display:block; padding:0.9rem; ">${kioskDetails.kioskName}</h1>
            </div>
            
            <div>  
            <div id="category_card" style="background-color:${categoryColors[kioskDetails.kioskCategory]}">${kioskDetails.kioskCategory}</div>
            <button type="button" id="open_description_button" style="border-radius:1.5rem; padding:1rem; border-style:none; background-color:transparent; " > ${iskioskDescription ? kioskDescriptionUp : kioskDescriptionDown} </button>
            </div>
            </div>
           
            
            <div class="kiosk_options">

              <div class="kiosk_tab" id="kiosk_products">
              <span id="all_products" > All Products</span>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                   </svg>(${kioskProducts.length})
              </div>

          
              <button id="toggle_theme_container"> CnaZ</button>
            
             
            </div>

            </div>

            <div class="kiosk_description_card"  style ="display: ${iskioskDescription? 'block':'none'}">
               <p class="kiosk_info" style='font-size:1rem'> Sells ${productsSold}</p>
               <p  class="kiosk_info" style='font-size:1.2rem; margin-bottom:1rem'>${kioskDetails.kioskDescription}</p>
               <div class="kiosk_info_card">
                    <p  class="kiosk_contacts" >${kioskDetails.kioskPhone}</p>
                    <p  class="kiosk_contacts" >${kioskDetails.kioskEmail}</p></div>
            </div>


             <div class="empty_state" style="display:${isProductlistEmpty?'block':'none'}" ><img src="./assets/emptybag.png" width='200px'>
             <p style="text-align:center; margin-top:1rem"> You have nothing in your kiosk</p>
             </div>
          

            <div class="products_list" id="all_products_list">

            ${kioskProducts.map((product)=>{
              return `
                        
            <div class= "product_card">
            <div id="product_edit_options" class="product_edit_options">



            <button type="button" class="delete_product" id="delete_product"  product_id=${product.productId}  >
              <svg  mlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
            </button>
          
            
            <button type="button"  class="edit_product"  product_id=${product.productId} > 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>

            </button>
            
            </div>
            <div id="product_image"><img src=${product.productImage} width="100%" height="100%"/></div>
            <p id="product_name"  class="product_name" style="font-size: 1.4rem; ">${product.productName}</p>
            <p id="product_price" class="product_price" style="font-size: 1.1rem; ">${'₦'+ product.productPrice}</p>
            <p id="no_in_stock" class="no_in_stock" style="font-size: 0.9rem">${'Number in stock: '+ product.noInStock}</p>

            </div>
            `

            }).join("")}
       

            </div>

             <div class='product_card_bg' id='product_card_bg' style="display: ${isAddProductCard? 'block': 'none'}">
            <form id="add_a_product_card" style="display: ${isAddProductCard? 'block': 'none'}">
             <p id="remark" >Hello wolrd</p>

             <button id="cancel_add_product">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              </button>
       
     
      

            <div>
            <label > Product Name </label>
            <input id="product_namee" type="text" placeholder="Enter the name of the product" required/>
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
            <label > Price Per Unit (₦) </label>
            <input id="product_pricee"  type="number" placeholder="Enter the price" required/>
            </div>
            
            <div>
            <label > Number in stock</label>
            <input id="no_in_stockk"  placeholder="Enter the number in stock" type="number"  required/>
            </div>


            <div>
            <input class="btn" type="submit" id="submit_product_button" />
            </div>

            
            </form>
             </div>
           

            <button class="btn_medium" id="add_product_button" > + Add a product </button>
           </div>` 
}



function getNoKiosk(){
    return `
            <div class="kiosk">
            <img src="../assets/nkiosk.png" width="200px" id="no_kiosk" style="margin-top:3rem; margin-bottom:1rem" >
            <h1 style="text-align:center; margin-bottom:1rem">You do not have any kiosks yet</h1>
            <button class="btn" id="create_kiosk_2" style="width: 70%; margin:1rem" >  Create a new kiosk now</button>
            </div> `
}


function getLoginPage(){

   return `
            <div class="kiosk">
            <img src="../assets/lock.png" width="90px" id="no_kiosk" style="margin-top:3rem; margin-bottom:1rem" >
            <h1 style="text-align:center; margin-bottom:1rem"> Welcome back, ${kioskDetails.kioskUserName}</h1>

            <form class='log_in_form' >
       
            <div>
            <label style="font-size:1.2rem"> Email </label>
            <input type='email' required placeholder='Enter your email' id='email_field'  />
            </div>



              
            <div>
            <label  style="font-size:1.2rem"> Password </label>
            <input type='password' required placeholder='Enter your password' id='password_field' />
            </div>
            <p id='login_response' style='color:black; font-size:0.9rem ; padding: 0.5rem; display:none; width:100%'></p>
            
            <button type='submit'  class='btn' id='login_button' > Submit</button>
            </form>
            </div> `

}

function getResultPage(query, queryResultsArray){
  return`
  <div class='kiosk_2'>
     
    <h1 style='margin-top:2rem' id='search_heading' >${isSearchEmpty? `Nothing was found for "${query}"` : `Search results for "${query}" (${queryResultsArray.length})`}</h1>
    <img src="./assets/nosearch.png" width="200px" style="display:${isSearchEmpty? 'block': 'none'}; margin-top:1.5rem "/>
    <div id='results_container'>
       ${queryResultsArray.map((result)=>{
        return `
          <div id='kiosk_result_card'>

          <div id='image' >
          image
          </div>

          <div  style='display:flex; flex-direction:column; gap:0.3rem'>
           <div style='display: flex;flex-direction: row; align-items:center; gap:0.7rem'><h3>${result.kioskName}</h3><div id='category_card_2' style="background-color:${categoryColors[result.kioskCategory]}">${result.kioskCategory}</div></div>
          <div style='display: flex;flex-direction: row;justify-content:flex-start;align-items: center; gap:0.5rem'><span>Sells ${result.kioskSells}</span> <span id='up_down' >${kioskDescriptionUp}</span></div>
          <div style='display: none'>${result.kioskDescription}</div>
          <div style='display: flex;flex-direction: row; gap:0.3rem' ><span style='font-size:0.7rem' class="kiosk_contacts_2" >${result.kioskPhone}</span> <span style='font-size:0.7rem'  class="kiosk_contacts_2">${result.kioskEmail}</span></div>
          </div>

          </div>

        `
       }).join('')}            
      
    
    </div>

  
  
  </div>
  
  
  `
}




  
 




