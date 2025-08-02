document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const main = document.getElementById("main");
  const suggestionSection = document.getElementById("suggestions");
  const foodList = document.getElementById("food-list");
  const suggestionTitle = document.getElementById("suggestion-title");

  // Simulate loader delay
  setTimeout(() => {
    loader.style.display = "none";
    main.style.display = "block";
  }, 2000);

  const moodSuggestions = {
    happy: [
      { name: "Ice Cream", image: "https://www.washingtonpost.com/graphics/2019/voraciously/how-to-make-ice-cream/img/icecream-videostill.jpg", link: "https://zomato.com" },
      { name: "Waffles", image: "https://www.sorghumcheckoff.com/wp-content/uploads/2024/08/Sorg.-Waffles-003-600x600.jpg", link: "https://zomato.com" },
    ],
    lazy: [
      { name: "Maggi", image: "https://yellowchilis.com/wp-content/uploads/2021/04/maggi-noodles-recipe-vegetable-masala-noodles-instant-recipe-in.jpg", link: "https://zomato.com" },
      { name: "Pasta", image: "https://www.spicebangla.com/wp-content/uploads/2024/08/Spicy-Pasta-recipe-optimised-scaled.webp", link: "https://zomato.com" },
    ],
    sad: [
      { name: "Chocolate Cake", image: "https://www.butterbeready.com/wp-content/uploads/2018/07/HWHLCakeNew2-9.jpg", link: "https://zomato.com" },
      { name: "Cheesy Fries", image: "https://katykicker.com/wp-content/uploads/2022/07/Air-fryer-cheese-fries-500x375.jpg", link: "https://zomato.com" },
    ],
    party: [
      { name: "Pizza", image: "https://bhukkadcompany.com/wp/wp-content/uploads/2024/06/21-Best-Pizzas-in-Mumbai-You-Must-Try-A-Pizza-Lovers-Paradise-1-710x473.png", link: "https://zomato.com" },
      { name: "Mocktails", image: "https://images.herzindagi.info/image/2023/Mar/mocktails-recipes.jpg", link: "https://zomato.com" },
    ],
    craving: [
      { name: "Donuts", image: "https://cdn.britannica.com/38/230838-050-D0173E79/doughnuts-donuts.jpg", link: "https://zomato.com" },
      { name: "Brownies", image: "https://icecreambakery.in/wp-content/uploads/2024/12/Brownie-Recipe-with-Cocoa-Powder.jpg", link: "https://zomato.com" },
    ],
    healthy: [
      { name: "Salad Bowl", image: "https://images.sbs.com.au/dims4/default/d3be1b7/2147483647/strip/true/crop/764x430+0+292/resize/1280x720!/quality/90/?url=http%3A%2F%2Fsbs-au-brightspot.s3.amazonaws.com%2Fdrupal%2Ffood%2Fpublic%2Fsalmon_salad_bowl_0.jpg", link: "https://zomato.com" },
      { name: "Smoothie", image: "https://gimmedelicious.com/wp-content/uploads/2024/08/Strawberry-Banana-Smoothie-5.jpg", link: "https://zomato.com" },
    ],
    chill: [
      { name: "Burger", image: "https://b.zmtcdn.com/data/pictures/0/21091140/53dfa6490cd6362723f1b2487fdbe24f_featured_v2.jpg", link: "https://zomato.com" },
      { name: "Fries", image: "https://cdn.cleaneatingmag.com/wp-content/uploads/2022/06/Feature-Crops-2400-x-1350-21-1.png", link: "https://zomato.com" },
    ],
    excited: [
      { name: "Tacos", image: "https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg", link: "https://zomato.com" },
      { name: "Nachos", image: "https://mojo.generalmills.com/api/public/content/MJYMoQ0lUkezBkK5ql2cSg_gmi_hi_res_jpeg.jpeg?v=c5e8a159&t=16e3ce250f244648bef28c5949fb99ff", link: "https://zomato.com" },
    ],
    hungry: [
      { name: "Biryani", image: "https://b3067249.smushcdn.com/3067249/wp-content/uploads/2023/03/chicken-Biryani-848x477.jpg?lossy=0&strip=1&webp=1", link: "https://zomato.com" },
      { name: "Paneer Tikka", image: "https://www.cookwithkushi.com/wp-content/uploads/2023/02/tandoori_paneer_tikka_restaurant_style.jpg", link: "https://zomato.com" },
    ]
  };

  const moodButtons = document.querySelectorAll(".mood-btn");
  moodButtons.forEach(button => {
    button.addEventListener("click", () => {
      const mood = button.getAttribute("data-mood");
      const foods = moodSuggestions[mood];

      suggestionTitle.textContent = `Top Picks for "${mood.charAt(0).toUpperCase() + mood.slice(1)}" Mood 🍽️`;
      foodList.innerHTML = ""; // Clear old suggestions

      foods.forEach(food => {
        const foodCard = document.createElement("div");
        foodCard.style.width = "200px";
        foodCard.style.background = "#fff4e6";
        foodCard.style.borderRadius = "10px";
        foodCard.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
        foodCard.style.overflow = "hidden";
        foodCard.style.textAlign = "center";
        foodCard.innerHTML = `
          <img src="${food.image}" alt="${food.name}" style="width: 100%; height: 150px; object-fit: cover;">
          <h4 style="margin: 0.5rem 0;">${food.name}</h4>
          <a href="${food.link}" target="_blank" style="display: inline-block; background: #ffb347; color: white; padding: 0.5rem 1rem; border-radius: 5px; text-decoration: none;">Order</a>
        `;
        foodList.appendChild(foodCard);
      });

      suggestionSection.style.display = "block";
    });
  });
});
