import { createContext, useState } from "react";
export const TravelContext = createContext();

const TravelDataProvider = ({ children }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const places = [
      {
         id: 1,
         title: "COX'S BAZAR",
         description:
            "Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.",
         imageURL:
            "https://r-xx.bstatic.com/xdata/images/city/1680x840/666843.webp?k=4744586c4a79c997023e878de81730e457af8a28a1178d29f92f7677e658f95a&o=",
      },
      {
         id: 2,
         title: "Sundorbon",
         description:
            "The Sundarbans in Bangladesh is a vast mangrove forest on the southwest coast, renowned for its unique ecosystem and biodiversity. Spanning dense forests and intersecting waterways, it is home to the iconic Royal Bengal tiger, crocodiles, and spotted deer. The Sundarbans is rich with diverse flora and fauna, including rare species of birds, fish, and reptiles. The forest’s intricate network of rivers and creeks is vital for coastal protection and fisheries. A UNESCO World Heritage Site, the Sundarbans remains a natural wonder and an essential part of Bangladesh’s environmental heritage.",
         imageURL:
            "https://img.freepik.com/premium-photo/most-beautiful-animal-world-is-bangladeshi-sundarban-tiger_730006-86.jpg",
      },
      {
         id: 3,
         title: "Sajek",
         description:
            "Sajek Valley, located in the Rangamati District of Bangladesh, is a scenic hill station known for its breathtaking views, lush green hills, and misty landscapes. Often called the “Roof of Rangamati,” it sits high in the hills of the Chittagong Hill Tracts and offers panoramic views of cloud-covered peaks and deep valleys. Popular for its serene ambiance, Sajek is home to indigenous communities and vibrant cultural diversity. With cool weather, rustic cottages, and dramatic sunsets, Sajek Valley has become a favorite destination for nature lovers and adventurers seeking tranquility above the clouds.",
         imageURL:
            "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/blogzB8BGDn5J45LisskNSi5r3F07ohqWXZ4.png",
      },
      {
         id: 4,
         title: "Sreemongol",
         description:
            "Sreemangal, located in northeastern Bangladesh, is famous for its lush tea gardens, rolling green hills, and tranquil natural beauty. Known as the “Tea Capital of Bangladesh,” it features vast estates filled with tea plants, lemon orchards, and rubber plantations. This peaceful town is also home to the Lawachara National Park, a rich forest reserve with diverse wildlife, including the endangered hoolock gibbon and colorful bird species. Sreemangal’s scenic trails, clear streams, and tranquil lakes offer a perfect retreat for visitors seeking relaxation and a taste of Bangladesh’s vibrant tea culture and countryside charm.",
         imageURL:
            "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/1b/53/29.jpg",
      },
   ];
   const travelData = { places, activeIndex, setActiveIndex };
   return (
      <TravelContext.Provider value={travelData}>
         {children}
      </TravelContext.Provider>
   );
};

export default TravelDataProvider;
