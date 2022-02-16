import React, { useState } from "react";
import "../styles/Card.css";
import TinderCard from "react-tinder-card";
import { SwipeableDrawer } from "@mui/material";
function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg",
    },
    {
      name: "Jeff Besos",
      url: "https://www.wired.com/wp-content/uploads/2019/01/Culture_GeeksGuide_Bezos.jpg",
    },
    {
      name: "Christiano Ronaldo ",
      url: "https://images.indianexpress.com/2021/07/ronaldo-juventus.jpg",
    },
    {
      name: "Samjith ",
      url: "https://media-exp1.licdn.com/dms/image/C4E03AQG7o3Z3R9Dpbw/profile-displayphoto-shrink_800_800/0/1639029147934?e=1650499200&v=beta&t=HiE7lWVLvD3IFzDlwtFgrXmgslT2h8BOzz3Q2Itp0dw",
    },
    {
      name: "Navaneeth ",
      url: "https://images.indianexpress.com/2021/07/ronaldo-juventus.jpg",
    },
    {
      name: "Christiano Ronaldo ",
      url: "https://images.indianexpress.com/2021/07/ronaldo-juventus.jpg",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="tinder-cards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
