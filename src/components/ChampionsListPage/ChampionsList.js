import React from "react";

import "./championsList.styles.css";
import champions from "./constants";
import { i18n } from "../../i18n/index";
import { withTranslation } from "react-i18next";

function ChampionsList() {
  return (
    <div className="container">
      <div className="flex">
        <h1>{i18n.t("championsList.header")}</h1>
        <p>{i18n.t("championsList.text")}</p>
        <div className="wrapper">
          {champions.map((champion) => (
            <div className="date-and-video" key={champion.id}>
              <div className="header">
                <div>{i18n.t(champion.name)}</div>
                <div>{champion.date}</div>
              </div>
              {champion.video}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(ChampionsList);
