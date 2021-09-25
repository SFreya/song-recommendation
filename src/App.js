import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const songs = {
    "Indian Folk": [
      {
        name: "Ranjha",
        rating: "5/5",
        image:
          "https://images.unsplash.com/photo-1568219656418-15c329312bf1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
        desc:
          "Produced by Sony Music, ‘Ranjha’ features heartfelt lyrics by Anvita Dutt, soothing composition and vocals by Jasleen Royal along with by B Praak. "
      },
      {
        name: "Pal Pal Dil ke pass",
        rating: "4/5",
        image:
          "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
        desc:
          ".Siddharth & Garima are the lyrics writer for “PAL PAL DIL KE PAAS” and Sachet Parampara composes it while Rishi Rich is producer of music."
      },
      {
        name: "Masakali",
        rating: "4.5/5",
        image:
          "https://images.unsplash.com/photo-1578945717419-3ef94dca94d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
        desc:
          "Masakali is a Hindi song from the 2009 Bollywood film Delhi-6. It was composed by A. R. Rahman, sung by Mohit Chauhan and lyrics penned by Prasoon Joshi."
      }
    ],
    "New Hits": [
      {
        name: "Visiting Hours",
        rating: "5/5",
        image:
          "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
        desc:
          "song by English singer-song writer Ed Sheeran. It was released on 19 August 2021 as the first promotional single from his upcoming fifth studio album, =, the same day he announced the album. The song was produced by Sheeran and Johnny McDaid"
      },
      {
        name: "Sakhiya 2.0",
        rating: "3/5",
        image:
          "https://images.unsplash.com/photo-1461784121038-f088ca1e7714?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
        desc:
          "As the name of the song suggests, it is the remixed version of Manindar Buttar and Zara Khan's Shakhiyan. The makers have dedicated this song to all the hopeless romantics. The new song is composed by Buttar and Tanishq Bagchi."
      },
      {
        name: "Bellbottom Theme",
        rating: "4/5",
        image:
          "https://images.unsplash.com/photo-1621522635552-ef52856bd555?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
        desc:
          "The film score is composed by Daniel B. George while Julius Packiam composed the trailer score. The songs featured in the film are composed by Amaal Mallik, Tanishk Bagchi, Shantanu Dutta, Gurnazar and Maninder Buttar while lyrics are written by Rashmi Virag"
      }
    ],
    OldIsGold: [
      {
        name: "Chala Jata Hu",
        rating: "4/5",
        image:
          "https://media.istockphoto.com/photos/playing-the-sitar-picture-id186104280?b=1&k=20&m=186104280&s=170667a&w=0&h=P91XQLyHcSKqOEjO8rVaIIfa19CymdP4N9wFNtAjV2E=",
        desc:
          "Song  from the movie Mere Jeevan Saathi is sung by Kishore Kumar, its music is composed by R D Burman and lyrics are written by Majrooh Sultanpuri."
      },
      {
        name: "Ye dosti",
        rating: "5/5",
        image:
          "https://images.unsplash.com/photo-1552918513-adc07c782852?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
        desc:
          "Yeh Dosti is a hindi song from the 1975 movie Sholay. Yeh Dosti singers are Kishore Kumar, Prabodh Chandra Dey (Manna Dey). "
      },
      {
        name: "Dekha na ",
        rating: "3.5/5",
        image:
          "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=899&q=80",
        desc:
          " Dekha Na Haye Re is a beautiful hindi song from 1972 bollywood film Bombay To Goa. This song is composed by R. D. Burman. Kishore Kumar has sung this song. "
      }
    ],
    International: [
      {
        name: "Shape of you",
        rating: "5/5",
        image:
          "https://images.unsplash.com/photo-1553603227-2358aabe821e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80",
        desc:
          "Shape of You is unique mostly because of the island style beat and instrumentation. The lyrics seem unique for Ed Sheeran songs. "
      },
      {
        name: "Something just like this",
        rating: "5/5",
        image:
          "https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=916&q=80",
        desc:
          "The song gives a beautiful message that, we don’t have to be extraordinary to love someone rather ordinary is the deepest and purest form of love. "
      },
      {
        name: "Arcade",
        rating: "4/5",
        image:
          "https://images.unsplash.com/photo-1523843268911-45a882919fec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80",
        desc:
          "an arcade is a place where one gambles – for lack of a better word. Or let’s say that arcade games are such that a “small-town boy” like the singer can get easily “addicted” and end up vesting a significant amount of time and resources, only to achieve fleeting gratification. And such is the conclusion he has come to in this song."
      }
    ]
  };
  var musicinDB = Object.keys(songs);

  var [category, setCategory] = useState("Indian Folk");

  function clickEventHandler(category) {
    setCategory(category);
    console.log(category);
  }
  return (
    <div className="App">
      <h1 style={{ color: "#caf0f8" }}>
        <span>🎵</span> TuneIn
      </h1>
      <small style={{ color: "#caf0f8" }}>
        Check out some really awesome songs.
      </small>
      <div>
        {musicinDB.map((category) => {
          return (
            <button
              key={category}
              style={{
                color: "#90e0ef",
                background: "#023e8a",
                border: "none",
                borderRadius: "0.5rem",
                padding: "0.7rem",
                margin: "1rem 0.5rem",
                cursor: "pointer"
              }}
              onClick={() => clickEventHandler(category)}
            >
              {category}
            </button>
          );
        })}
      </div>

      <hr style={{ border: "1px solid #caf0f8" }} />

      <div>
        <ul style={{ paddingInlineStart: "0" }}>
          {songs[category].map((item) => {
            return (
              <li
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "2px solid #023e8a",
                  margin: "1rem 0rem",
                  width: "95%",
                  borderRadius: "0.5rem"
                }}
              >
                <div>
                  <div style={{ display: "inline-block" }}>
                    <img
                      src={item.image}
                      style={{
                        width: "5rem",
                        height: "5rem",
                        marginRight: "1rem"
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "inline-block",
                      padding: "0"
                    }}
                  >
                    <div style={{ color: "#caf0f8", fontSize: "larger" }}>
                      Name: {item.name}
                    </div>
                    <div style={{ color: "#03045e", fontSize: "smaller" }}>
                      Rating: {item.rating}
                    </div>
                    <br />
                    <div style={{ color: "#caf0f8", fontSize: "small" }}>
                      Description:
                    </div>
                    <div style={{ color: "#03045e" }}>{item.desc}</div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
