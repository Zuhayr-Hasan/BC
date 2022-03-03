import React from "react";
import "./CSS/Body2.css";

const Body2 = () => {
  return (
    <>
      <div className="mercury">
        <Upper />
        <ContainerUp />
        <ContainerDown />
      </div>
    </>
  );
};

const Upper = () => {
  return (
    <>
      <div className="body2-upper-container">
        <h1>Collections</h1>
        <p>
          With more than 180+ hand drawn traits, each NFT is unique and comes
          with a membership to an exclusive group of successful investors. Join
          an ambitious ever-growing community with multiple benefits and
          utilities.
        </p>
      </div>
    </>
  );
};

const ContainerUp = () => {
  return (
    <>
      <div className="container-up">
        <Lower
          img={containerData[0].img}
          score={containerData[0].score}
          name={containerData[0].name}
          dp={containerData[0].dp}
          bid={containerData[0].bid}
          currency={containerData[0].currency}
          time={containerData[0].time}
          ending={containerData[0].ending}
        />
        <Lower
          img={containerData[1].img}
          img={containerData[1].img}
          score={containerData[1].score}
          name={containerData[1].name}
          dp={containerData[1].dp}
          bid={containerData[1].bid}
          currency={containerData[1].currency}
          time={containerData[1].time}
          ending={containerData[1].ending}
        />
        <Lower
          img={containerData[2].img}
          img={containerData[2].img}
          score={containerData[2].score}
          name={containerData[2].name}
          dp={containerData[2].dp}
          bid={containerData[2].bid}
          currency={containerData[2].currency}
          time={containerData[2].time}
          ending={containerData[2].ending}
        />
      </div>
    </>
  );
};

const ContainerDown = () => {
  return (
    <>
      <div className="container-down">
        <Lower
          img={containerData[3].img}
          score={containerData[3].score}
          name={containerData[3].name}
          dp={containerData[3].dp}
          bid={containerData[3].bid}
          currency={containerData[3].currency}
          time={containerData[3].time}
          ending={containerData[3].ending}
        />
        <Lower
          img={containerData[4].img}
          score={containerData[4].score}
          name={containerData[4].name}
          dp={containerData[4].dp}
          bid={containerData[4].bid}
          currency={containerData[4].currency}
          time={containerData[4].time}
          ending={containerData[4].ending}
        />
        <Lower
          img={containerData[5].img}
          score={containerData[5].score}
          name={containerData[5].name}
          dp={containerData[5].dp}
          bid={containerData[5].bid}
          currency={containerData[5].currency}
          time={containerData[5].time}
          ending={containerData[5].ending}
        />
      </div>
    </>
  );
};

const containerData = [
  {
    dp: "https://i.postimg.cc/k4gM8fyx/unsplash-h-G4-Rzbu-Rh-C8.png",
    img: "https://i.postimg.cc/0yXwbKvX/Rectangle-323.png",
    name: "@knight",
    score: "283",
    bid: "Current bid",
    currency: "0.54 ETH",
    ending: "Ending In",
    time: "12h 55m 2s"
  },
  {
    dp: "https://i.postimg.cc/k4gM8fyx/unsplash-h-G4-Rzbu-Rh-C8.png",
    img: "https://i.postimg.cc/L6H2T6sL/pic2.png",
    name: "@knight",
    score: "283",
    bid: "Current bid",
    currency: "0.54 ETH",
    ending: "Ending In",
    time: "12h 55m 2s"
  },
  {
    dp: "https://i.postimg.cc/k4gM8fyx/unsplash-h-G4-Rzbu-Rh-C8.png",
    img: "https://i.postimg.cc/RCTzN5TF/Rectangle-3231.png",
    name: "@knight",
    score: "283",
    bid: "Current bid",
    currency: "0.54 ETH",
    ending: "Ending In",
    time: "12h 55m 2s"
  },
  {
    dp: "https://i.postimg.cc/k4gM8fyx/unsplash-h-G4-Rzbu-Rh-C8.png",
    img: "https://i.postimg.cc/KYT6bdzm/Rectangle-32332.png",
    name: "@knight",
    score: "283",
    bid: "Current bid",
    currency: "0.54 ETH",
    ending: "Ending In",
    time: "12h 55m 2s"
  },
  {
    dp: "https://i.postimg.cc/k4gM8fyx/unsplash-h-G4-Rzbu-Rh-C8.png",
    img: "https://i.postimg.cc/Fzr8jzxK/Rectangle-32333.png",
    name: "@knight",
    score: "283",
    bid: "Current bid",
    currency: "0.54 ETH",
    ending: "Ending In",
    time: "12h 55m 2s"
  },
  {
    dp: "https://i.postimg.cc/k4gM8fyx/unsplash-h-G4-Rzbu-Rh-C8.png",
    img: "https://i.postimg.cc/Kcfdm7Z3/Rectangle-323112.png",
    name: "@knight",
    score: "283",
    bid: "Current bid",
    currency: "0.54 ETH",
    ending: "Ending In",
    time: "12h 55m 2s"
  }
];

const Lower = (props) => {
  const { dp, img, name, score, bid, currency, ending, time } = props;
  return (
    <>
      <main className="body2-main">
        <div className="body2-lower-container">
          <div className="dp">
            <section className="section-1">
              <img src={dp} alt="DP" />
              <p>{name}</p>
            </section>
            <section className="section-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
              >
                <path
                  d="M18.0581 6.33737L12.6991 5.55853L10.3035 0.70185C10.238 0.568877 10.1304 0.461233 9.99741 0.395802C9.66392 0.231169 9.25867 0.368363 9.09193 0.70185L6.6963 5.55853L1.33729 6.33737C1.18954 6.35847 1.05445 6.42813 0.951032 6.53366C0.825998 6.66217 0.757099 6.83507 0.759474 7.01435C0.761849 7.19363 0.835303 7.36464 0.963696 7.4898L4.84102 11.27L3.92498 16.6079C3.9035 16.7321 3.91724 16.8598 3.96464 16.9766C4.01205 17.0933 4.09122 17.1945 4.19318 17.2685C4.29514 17.3426 4.41581 17.3866 4.54151 17.3955C4.66721 17.4045 4.7929 17.3781 4.90434 17.3192L9.69769 14.7991L14.491 17.3192C14.6219 17.3889 14.7739 17.4121 14.9195 17.3868C15.2868 17.3235 15.5337 16.9752 15.4704 16.6079L14.5544 11.27L18.4317 7.4898C18.5372 7.38637 18.6069 7.25129 18.628 7.10354C18.685 6.73417 18.4275 6.39224 18.0581 6.33737Z"
                  fill="#007AFF"
                />
              </svg>
              <p>{score}</p>
            </section>
          </div>

          <img src={img} alt="IMG" class="img" />

          <div className="bottom">
            <div className="left">
              <p id="pp1">{bid}</p>
              <p id="ppp1">{currency}</p>
            </div>

            <div className="right">
              <p id="pp2">{ending}</p>
              <p id="ppp2">{time}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Body2;
