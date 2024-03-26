document.addEventListener('DOMContentLoaded',function () {
    const menuButton = document.getElementById('mobile-menu');
    const specialItems = document.getElementById('specials');

    menuButton.addEventListener('click',function () {
        specialItems.classList.toggle('show');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const itemDetails = {
        APPLE: { name:'APPLE' ,
        image: "Appple.jpg" ,
                del: 200,
                price:110.50
        },
        BANANA: { name:'BANANA' ,
                image:"Banana.jpg",
               del: 102,
                price:72
                
        },
        STRAWBERRY: { name:'STRAW BERRY' ,
                image: "Straw berry.jpg",
                del: 100,
                price:105.00
        },
        POMEGRANATE: { name:'POMEGRANATE' ,
                  image: "Pomegranate.jpg" ,
                    del: 100,
                     price:1.50
                },
        KIWI: { name:'KIWI' ,
        image:"Kiwi.jpg",
        del: 100,
        price:102.50
        },
        ORANGE: { name:'ORANGE' ,
        image: "Orange.jpg",
        del: 199,
        price:158.50
        },
        MANGO: { name:'MANGO' ,
        image:"mango.jpg",
        del: 189,
        price:148.50
        },
        PAPAYA: { name:'PAPAYA' ,
        image: "Papaya.jpg", 
        del: 60,
        price:45.50
        },
        // NUTS
        ALMOND: { name:'ALMOND' ,
        image: "Almond.jpg" ,
        del: 100,
        price:150.50
        },
        PEANUTS: { name:'PEANUTS' ,
        image: "Peanuts.jpg",
        del: 60,
        price:25.50
        },
        CASHEW: { name:'CASHEW' ,
        image:"Cashew.jpg",
        del: 40,
        price:20.50
        },
         DATE: { name:'DATE' ,
        image:"Dates.jpg" ,
        del: 250,
        price:249.50
        },
        DRYGRAPES: { name:'DRY GRAPES' ,
        image: "Dry grapes.jpg",
        del: 85,
        price:65.50
        },
        PEANUTS: { name:'PEA NUTS' ,
        image:"Peanuts.jpg",
        del: 189,
        price:148.50
        },
        PINENUTS: { name:'PINE NUTS' ,
        image: "pine nuts.jpg",
        del: 189,
        price:148.50
        },
        SUN: { name:'SUN FLOWER SEEDS' ,
        image:"sunflower seeds.jpg",
        del: 189,
        price:148.50
        },
        HAZLE: { name:'HAZLE' ,
        image:  "Hazlenuts.jpg",
        del: 189,
        price:148.50
        },
        PISTA: { name:'PISTA' ,
        image: "Pista.jpg",
        del: 189,
        price:148.50
        },
        PECANS: { name:'PEACANS' ,
        image:  "Pecans.jpg",
        del: 189,
        price:148.50
        },
        PUMKIN: { name:'PUMKIN SEEDS' ,
        image: "Pumkin seeds.jpg",
        del: 189,
        price:148.50
        },
        SOYA: { name:'SOYA SEEDS' ,
        image: "soya nuts.jpg",
        del: 189,
        price:148.50
        },
        WALLNUTS: { name:'WALL NUTS' ,
        image: "wallnuts.jpg",
        del: 189,
        price:148.50
        },
        // MILLETS
        RAGI: { name:'FINGER MILLETS',
        image:  "ragi mudha.jpg",
        del: 159,
        price:122.50
        },
        BAJRA: { name:'BAJRA' ,
        image: "Bajra.jpg",
        del: 90,
        price:79.50
        },
        jowar: { name:'SORGHAM (JOWAR)' ,
        image: "sorgummillet jowar.webp",
        del: 189,
        price:148.50
        },
        KODO: { name:'KODO MILLLET' ,
        image: "kodo.jpg" ,
        del: 250,
        price:219.50
        },
        FOXTAIL: { name:'FOXTAIL MILLET' ,
        image:"FOXTAIL.jpg",
        del: 130,
        price:122.50
        },
        BUCK: { name:'BUCK WHEAT' ,
        image: "BUCK WHEAAT.jpg",
        del: 299,
        price:259.50
        },
        PEAS: { name:'PEAS (BATANI)' ,
        image:  "GREEN PEAS.jpg",
        del: 80,
        price:69.50
        },
        GREEN: { name:'GREEN GRAM' ,
        image: "Green gram.jpg" ,
        del: 199,
        price:189.50
        },
        WHEAT: { name:'WHEAT' ,
        image: "Wheat.jpg",
        del: 189,
        price:148.50
        },
        MALKA: { name:'MALAK MASUR' ,
        image:"malka masur.jpg" ,
        del: 250,
        price:239.50
        },
        RAJMA: { name:'RAJMA CHITARA ' ,
        image:"RAJMA CHITRA.jpg" ,
        del: 250,
        price:239.50
        },
        MOTH: { name:'MOTH WHOLE ' ,
        image:"MOTH WHOLE.jpg" ,
        del: 250,
        price:239.50
        },
        PANCHRANGI: { name:'PANCHRANGI DAL ' ,
        image:"PANCHARANGI DAL.jpg" ,
        del: 299,
        price:279.50
        },
        MASUR: { name:'MASUR WHOLE' ,
        image:"MASUR WHOLE.jpg" ,
        del: 240,
        price:239.50
        },
        ARHAR: { name:'ARHAR DAL ' ,
        image:"ARHAR.jpg" ,
        del: 240,
        price:239.50
        },
        CHANA: { name:'CHANA WHOLE ' ,
        image:"CHANA WHOLE.jpg" ,
        del: 240,
        price:239.50
        },
        URAD: { name:'URAD DAL ' ,
        image:"URAD DAL.webp" ,
        del: 159,
        price:129.50
        },
    };
       // Get all elements with class "view-details-btn"
    var viewDetailsButtons = document.querySelectorAll('.view-details-btn');

        // Add click event listener to each button
        viewDetailsButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                 // Get the parent item element
        var item = button.closest('.item');

        // Get the item ID from the "data-item-id" attribute
        var itemId = item.dataset.itemId;
  
        // Fetch item details using the item ID
        var details = itemDetails[itemId];
  
        // Redirect to the details page with the item ID
        window.location.href = 'viewdetails.html?id=' + itemId;
      });
      });
        // Code for the viewdetails.html page
          if (window.location.pathname.includes('viewdetails.html')) {
         // Get the item ID from the query parameter
         var urlParams = new URLSearchParams(window.location.search);
           var itemId = urlParams.get('id');
            // Get the item details for the specified ID
          var details = itemDetails[itemId]; 
      // Update the details page content
      if (details) {
        document.getElementById('item-image').src = details.image;
        document.getElementById('item-name').textContent = details.name;
        document.getElementById('item-del').innerHTML = 'price : &#8377;' + details.del;
        document.getElementById('item-price').innerHTML = 'Price: &#8377;' + details.price.toFixed(2); 
     }
         console.error('Item details not found.');
      }
    }
  );

























































