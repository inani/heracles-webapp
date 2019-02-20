// standard libs

// other libs
import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

// standard components

// other components
const getMessdaten = gql`
  {
    allMessdaten(Datum: "2019-01-11") {
      UID
      Datum
      DatumZeit
      Temperatur
      Luftdruck
      Luftfeuchtigkeit
      VOC
      FEINSTAUBPM100
      FEINSTAUBPM25
    }
  }
`;

class MessdatenList extends Component {
  displayDaten() {
    var data = this.props.data;

    console.log(data);

    if (data.loading) return <p>Loading...</p>;
    if (data.error) return <p>Error :(</p>;

    return data.allMessdaten.map(fu => {
      console.log(fu.UID);
      return (
        <ul id="lolz">
          <li>
            {fu.UID}
            <ul>
              <li>{fu.Datum}</li>
              <li>{fu.DatumZeit}</li>
              <li>{fu.Temperatur}</li>
              <li>{fu.Luftdruck}</li>
              <li>{fu.Luftfeuchtigkeit}</li>
              <li>{fu.VOC}</li>
              <li>{fu.FEINSTAUBPM100}</li>
              <li>{fu.FEINSTAUBPM25}</li>
            </ul>
          </li>
        </ul>
      );
    });
  }
  render() {
    return <div>{this.displayDaten()}</div>;
  }
}

export default graphql(getMessdaten)(MessdatenList);
