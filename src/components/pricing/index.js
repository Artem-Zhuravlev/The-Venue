import React, { Component } from "react";
import Button from "../utils/CoolButton";

class Pricing extends Component {
  state = {
    prices: [100, 150, 300],
    positions: ["balcony", "medium", "star"],
    desc: [
      "Perfecto deserunt sententiae in his, tota tincidunt ullamcorper ut vim, mei te placerat argumentum. Fugit alienum pericula ex eos, vim accusam accusata ut. ",
      "Probo affert menandri at pro, cu agam noster his, no vim solum antiopam rationibus. ",
      " Nam ea purto assum ludus, eros omnes explicari no qui. Ea summo mentitum ius, vis ut soluta latine officiis, lorem erant nostrud ad vel. Pri debitis propriae volutpat ei, ne aliquip instructior vim."
    ],
    links: ["http://sales/a", "http://sales/b", "http://sales/c"]
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <div className="pricing_item">
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span>${this.state.prices[i]}</span>
            <span>{this.state.positions[i]}</span>
          </div>
          <div className="pricing_description">{this.state.desc[i]}</div>
          <div className="pricing_buttons">
            <Button
              text="Purchase tickets"
              bck="#ffa800"
              color="#ffffff"
              link={this.state.links[i]}
            />
          </div>
        </div>
      </div>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
