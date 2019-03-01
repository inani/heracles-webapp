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
              <li>Date: {fu.Datum}</li>
              <li>DateTime: {fu.DatumZeit}</li>
              <li>Temp: {fu.Temperatur}</li>
              <li>Luftdruck: {fu.Luftdruck}</li>
              <li>Luftfeuchtigkeit: {fu.Luftfeuchtigkeit}</li>
              <li>VOC: {fu.VOC}</li>
              <li>Feinstaub PM100: {fu.FEINSTAUBPM100}</li>
              <li>Feinstaub PM25: {fu.FEINSTAUBPM25}</li>
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
