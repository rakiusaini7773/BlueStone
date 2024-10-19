const navItems = [
    {
      title: "10+1 MONTHLY PLAN",
      path:"/monthlyPlan"
    },
    // {
    //   title: "WATCH JEWELLERY",
    //   subTopics: [
    //     { subTitle: "Charm" },
    //     { subTitle: "Band" },
    //     { subTitle: "Pin" },
    //   ],
    // },
    {
      title: "RINGS",
      path:"/rings",
      subTopics: [
        {
          subTitle: "Popular Ring Types",
          subTopics: [
            { subTitle: "Engagement" },
            { subTitle: "Couple Bands" },
            { subTitle: "Office Wear" },
            { subTitle: "Diamond" },
            { subTitle: "Plain Gold" },
          ],
        },
        // {
        //   subTitle: "By Price Range",
        //   subTopics: [
        //     { subTitle: "Below 15,000" },
        //     { subTitle: "Between 15k-20k" },
        //     { subTitle: "Between 20k-30k" },
        //     { subTitle: "50,000 and above" },
        //   ],
        // },
        {
          subTitle: "By Metals & Stones",
          subTopics: [
            { subTitle: "Diamond Rings" },
            { subTitle: "Gold Rings" },
            { subTitle: "White Gold Rings" },
            { subTitle: "Rose Gold Rings" },
            { subTitle: "Platinum Rings" },
          ],
        },
      ],
    },
    // {
    //   title: "EARRINGS",
    //   subTopics: [
    //     {
    //       subTitle: "Popular Earring Types",
    //       subTopics: [
    //         { subTitle: "Studs" },
    //         { subTitle: "Hoops" },
    //         { subTitle: "Drops" },
    //         { subTitle: "Multi Pierced" },
    //         { subTitle: "Sui Dhaga" },
    //         { subTitle: "Pearl" },
    //         { subTitle: "Jhumkas" },
    //         { subTitle: "Plain Gold" },
    //         { subTitle: "Chandbali" },
    //         { subTitle: "Diamond" },
    //         { subTitle: "Front Back" },
    //         { subTitle: "Gemstone" },
    //         { subTitle: "Ear Cuffs" },
    //       ],
    //     },
    //     {
    //       subTitle: "By Price Range",
    //       subTopics: [
    //         { subTitle: "Below 10,000" },
    //         { subTitle: "Between 10k-20k" },
    //         { subTitle: "Between 20k-30k" },
    //         { subTitle: "Between 30k-50k" },
    //         { subTitle: "50,000 and above" },
    //       ],
    //     },
    //     {
    //       subTitle: "By Metals & Stones",
    //       subTopics: [
    //         { subTitle: "Diamond Earrings" },
    //         { subTitle: "Gold Earrings" },
    //         { subTitle: "White Gold Earrings" },
    //         { subTitle: "Rose Gold Earrings" },
    //         { subTitle: "Gemstone Earrings" },
    //         { subTitle: "Buy Solitaire Earrings" },
    //       ],
    //     },
    //     {
    //       subTitle: "Browse by Collections",
    //       subTopics: [
    //         { subTitle: "View All" },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   title: "PENDANTS",
    //   subTopics: [
    //     {
    //       subTitle: "Popular Pendant Types",
    //       subTopics: [
    //         { subTitle: "Alphabet" },
    //         { subTitle: "Religious" },
    //         { subTitle: "Fashion" },
    //         { subTitle: "Heart Shaped" },
    //         { subTitle: "Lockets" },
    //         { subTitle: "Office Wear" },
    //         { subTitle: "Zodiac" },
    //         { subTitle: "Navaratna" },
    //         { subTitle: "Mangalsutra" },
    //         { subTitle: "Diamond" },
    //         { subTitle: "Pearl" },
    //         { subTitle: "Gemstone" },
    //         { subTitle: "Plain Gold" },
    //       ],
    //     },
    //     {
    //       subTitle: "By Price Range",
    //       subTopics: [
    //         { subTitle: "Below 10,000" },
    //         { subTitle: "Between 10k-15k" },
    //         { subTitle: "Between 15k-20k" },
    //         { subTitle: "Between 20k-30k" },
    //         { subTitle: "25,000 and above" },
    //       ],
    //     },
    //     {
    //       subTitle: "By Metals & Stones",
    //       subTopics: [
    //         { subTitle: "Diamond Pendants" },
    //         { subTitle: "Gold Pendants" },
    //         { subTitle: "White Gold Pendants" },
    //         { subTitle: "Rose Gold Pendants" },
    //         { subTitle: "Gemstone Pendants" },
    //         { subTitle: "Buy Solitaire Pendants" },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   title: "ALL JEWELLERY",
    //   subTopics: [
    //     {
    //       subTitle: "Shop By Category",
    //       subTopics: [
    //         { subTitle: "Bangles" },
    //         { subTitle: "Bracelets" },
    //         { subTitle: "Earrings" },
    //         { subTitle: "Gold Chains" },
    //         { subTitle: "Gold Coins" },
    //         { subTitle: "Kadas" },
    //         { subTitle: "Mangalsutras" },
    //         { subTitle: "Mangalsutra Bracelets" },
    //         { subTitle: "Mangalsutra Chains" },
    //         { subTitle: "Necklaces" },
    //       ],
    //     },
    //     {
    //       subTitle: "Men's Jewellery",
    //       subTopics: [
    //         { subTitle: "Bracelets" },
    //         { subTitle: "Kadas" },
    //         { subTitle: "Rings" },
    //         { subTitle: "Chains" },
    //         { subTitle: "Studs" },
    //         { subTitle: "Pendants" },
    //         { subTitle: "Cufflinks" },
    //       ],
    //     },
    //     {
    //       subTitle: "Kid's Jewellery",
    //       subTopics: [
    //         { subTitle: "Earrings" },
    //         { subTitle: "Necklaces" },
    //         { subTitle: "Pendants" },
    //         { subTitle: "Bracelets" },
    //         { subTitle: "Nazariyas" },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   title: "SOLITAIRES",
    // },
    // {
    //   title: "GIFTS",
    //   subTopics: [
    //     {
    //       subTitle: "Gifts By Occasion",
    //       subTopics: [
    //         { subTitle: "Anniversary" },
    //         { subTitle: "Birthday" },
    //         { subTitle: "Engagement" },
    //         { subTitle: "Wedding" },
    //       ],
    //     },
    //     // {
    //     //   subTitle: "By Price Range",
    //     //   subTopics: [
    //     //     { subTitle: "Below 5,000" },
    //     //     { subTitle: "Between 5k-10k" },
    //     //     { subTitle: "Between 10k-20k" },
    //     //     { subTitle: "Between 20k-50k" },
    //     //     { subTitle: "50,000 and above" },
    //     //   ],
    //     // },
    //   ],
    // },
    // {
    //   title: "MY WISHLIST",
    // },
    // {
    //   title: "CUSTOMER SERVICES",
    // },
  ];
  
  export default navItems;