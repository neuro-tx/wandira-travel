export const travelStyles = [
  "Relaxed",
  "Luxury",
  "Adventure",
  "Cultural",
  "Nature & Outdoors",
  "City Exploration",
];

export const interests = [
  "Food & Culinary",
  "Historical Sites",
  "Hiking & Nature Walks",
  "Beaches & Water Activities",
  "Museums & Art",
  "Nightlife & Bars",
  "Photography Spots",
  "Shopping",
  "Local Experiences",
];

export const budgetOptions = ["Budget", "Mid-range", "Luxury", "Premium"];

export const groupTypes = ["Solo", "Couple", "Family", "Friends", "Business"];

export const countries = [
  "United States",
  "Canada",
  "Mexico",
  "Brazil",
  "Argentina",
  "United Kingdom",
  "France",
  "Germany",
  "Italy",
  "Spain",
  "Portugal",
  "Netherlands",
  "Switzerland",
  "Sweden",
  "Norway",
  "Greece",
  "Turkey",
  "Egypt",
  "South Africa",
  "United Arab Emirates",
  "India",
  "Thailand",
  "Vietnam",
  "Japan",
  "South Korea",
  "China",
  "Australia",
  "New Zealand",
  "Indonesia",
  "Malaysia",
  "Philippines",
  "Singapore",
  "Morocco",
  "Kenya",
  "Peru",
  "Colombia",
  "Costa Rica",
  "Iceland",
  "Croatia",
  "Poland",
];

export const tripDurations = [
  "1-3 days",
  "4-7 days",
  "8-14 days",
  "15-21 days",
  "22-30 days",
  "More than 30 days",
];

// export const tripDurations = [
//   { label: "1–3 days", value: 3 },
//   { label: "4–7 days", value: 7 },
//   { label: "8–14 days", value: 14 },
//   { label: "15–21 days", value: 21 },
//   { label: "22–30 days", value: 30 },
//   { label: "More than 30 days", value: 35 },
// ];


export const prompt = (
  numberOfDays,
  country,
  interests,
  travelStyle,
  groupType
) => {
  return `Generate a ${numberOfDays}-day travel itinerary for ${country} based on the following user information:
        Interests: '${interests}'
        TravelStyle: '${travelStyle}'
        GroupType: '${groupType}'
        Return the itinerary and lowest estimated price in a clean, non-markdown JSON format with the following structure:
        {
        "name": "A descriptive title for the trip",
        "description": "A brief description of the trip and its highlights not exceeding 100 words",
        "estimatedPrice": "Lowest average price for the trip in USD, e.g.$price",
        "duration": ${numberOfDays},
        "travelStyle": "${travelStyle}",
        "country": "${country}",
        "interests": ${interests},
        "groupType": "${groupType}",
        "bestTimeToVisit": [
          '🌸 Season (from month to month): reason to visit',
          '☀️ Season (from month to month): reason to visit',
          '🍁 Season (from month to month): reason to visit',
          '❄️ Season (from month to month): reason to visit'
        ],
        "weatherInfo": [
          '☀️ Season: temperature range in Celsius (temperature range in Fahrenheit)',
          '🌦️ Season: temperature range in Celsius (temperature range in Fahrenheit)',
          '🌧️ Season: temperature range in Celsius (temperature range in Fahrenheit)',
          '❄️ Season: temperature range in Celsius (temperature range in Fahrenheit)'
        ],
        "location": {
          "city": "name of the city or region",
          "coordinates": [latitude, longitude],
          "openStreetMap": "link to open street map"
        },
        "itinerary": [
        {
          "day": 1,
          "location": "City/Region Name",
          "activities": [
            {"time": "Morning", "description": "🏰 Visit the local historic castle and enjoy a scenic walk"},
            {"time": "Afternoon", "description": "🖼️ Explore a famous art museum with a guided tour"},
            {"time": "Evening", "description": "🍷 Dine at a rooftop restaurant with local wine"}
          ]
        },
        ...
        ]
    }`;
};

// export const respo = 
// ```json
// {
//   "name": "Luxury Coastal Escape in Tofino, British Columbia",
//   "description": "Indulge in a solo luxury escape to Tofino, BC, renowned for its stunning beaches, world-class surfing, and breathtaking natural beauty. Enjoy exclusive experiences, gourmet dining, and unparalleled relaxation amidst the rugged coastal landscape. Pamper yourself with spa treatments, private beach access, and unforgettable ocean adventures.",
//   "estimatedPrice": "$2500",
//   "duration": 3,
//   "travelStyle": "Luxury",
//   "country": "Canada",
//   "interests": "Beaches & Water Activities",
//   "groupType": "Solo",
//   "bestTimeToVisit": [
//     "🌸 Spring (April to May): Blooming rainforests, fewer crowds, excellent whale watching opportunities.",
//     "☀️ Summer (June to August): Warmest temperatures, ideal for surfing and beach activities.",
//     "🍁 Autumn (September to October): Stunning fall foliage, storm watching season begins, fewer crowds.",
//     "❄️ Winter (November to March): Dramatic storm watching, cozy atmosphere, unique coastal experience."
//   ],
//   "weatherInfo": [
//     "☀️ Summer: 15-20°C (59-68°F)",
//     "🌦️ Spring: 8-15°C (46-59°F)",
//     "🌧️ Autumn: 7-13°C (45-55°F)",
//     "❄️ Winter: 3-8°C (37-46°F)"
//   ],
//   "location": {
//     "city": "Tofino, British Columbia",
//     "coordinates": [
//       49.1529,
//       -125.9069
//     ],
//     "openStreetMap": "https://www.openstreetmap.org/search?query=Tofino%2C%20British%20Columbia"
//   },
//   "itinerary": [
//     {
//       "day": 1,
//       "location": "Tofino",
//       "activities": [
//         {
//           "time": "Morning",
//           "description": "🚁 Arrive at Tofino Airport via private helicopter transfer. Check into your luxury beachfront resort with stunning ocean views."
//         },
//         {
//           "time": "Afternoon",
//           "description": "🏄‍♀️ Private surf lesson with a certified instructor at Cox Bay, followed by relaxation on the beach. Enjoy a gourmet picnic lunch."
//         },
//         {
//           "time": "Evening",
//           "description": "🍴 Indulge in a multi-course tasting menu at The Pointe Restaurant, known for its exquisite West Coast cuisine and panoramic ocean views."
//         }
//       ]
//     },
//     {
//       "day": 2,
//       "location": "Tofino",
//       "activities": [
//         {
//           "time": "Morning",
//           "description": "🐻 Private guided bear watching tour by boat in Clayoquot Sound. Observe bears foraging along the shoreline in their natural habitat."
//         },
//         {
//           "time": "Afternoon",
//           "description": "💆‍♀️ Enjoy a luxurious spa treatment at your resort, followed by relaxation by the pool or beach."
//         },
//         {
//           "time": "Evening",
//           "description": "🔥 Private bonfire on the beach with s'mores and stargazing. Enjoy storytelling and relaxation under the stars."
//         }
//       ]
//     },
//     {
//       "day": 3,
//       "location": "Tofino",
//       "activities": [
//         {
//           "time": "Morning",
//           "description": "🚶‍♀️ Hike the rainforest trails in Pacific Rim National Park Reserve, exploring ancient forests and pristine beaches. Visit Long Beach and marvel at its vastness."
//         },
//         {
//           "time": "Afternoon",
//           "description": "🛶 Private kayaking tour in the calm waters of Tofino Inlet. Explore hidden coves and observe marine wildlife."
//         },
//         {
//           "time": "Evening",
//           "description": "🚁 Depart from Tofino Airport via private helicopter transfer, reminiscing about your unforgettable luxury coastal escape."
//         }
//       ]
//     }
//   ]
// }
// ```
