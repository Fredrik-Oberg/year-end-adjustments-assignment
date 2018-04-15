import React from "react";

const InfoSection = props => {
  return (
    <div className="info-section">
      <p>
        Årets bokföring är nu redo för att färdigställas. Du behöver nu bestämma
        vad du vill göra med årets resultat. Du kan själv påverka hur mycket
        bolaget ska beskatta och planera för eventuell utdelning till ägarna.
      </p>
      <div>
        <div>
          <b>
            Bolagets resultat före skatt och bokslutsdispositioner är:
            <span> {props.annualAccountResult}</span>
          </b>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
