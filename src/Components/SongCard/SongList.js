import React, { useEffect, useState } from "react";
import SongCard from "./Song";
import { useSelector } from "react-redux";
import Pages from "./Pages";
import messages from "../Dependencies/Messages/Messages";
import { FormattedMessage } from "react-intl";
const SongList = ({ setSongState, video, showDrawer }) => {
  const state = useSelector((state) => state);
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(5);
  useEffect(() => {
    console.log(state);
    if (state.song) {
      setCards(state.song.results);
      console.log("cards", cards);
    }
  }, [state]);
  //Get current posts
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  if (state.song) {
    return (
      <div>
        <Pages
          totalCards={cards.length}
          cardsPerPage={cardsPerPage}
          paginate={paginate}
        />
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {currentCards.map((song, i) => {
            return (
              <div>
                <SongCard
                  key={i}
                  photo={song.artworkUrl100}
                  smallPhoto={song.artworkUrl60}
                  artistName={song.artistName}
                  name={song.trackCensoredName}
                  preview={song.previewUrl}
                  artist={song.artistViewUrl}
                  album={song.collectionName}
                  setSongState={setSongState}
                  video={video}
                  showDrawer={showDrawer}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else
    return (
      <div>
        <h3
          style={{
            color: "white",
            fontFamily: `'Open Sans Condensed', sans-serif`,
          }}
        >
          <FormattedMessage {...messages.title} />
        </h3>{" "}
      </div>
    );
};
export default SongList;
