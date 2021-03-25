import React, {Component} from "react";
import PropTypes from "prop-types";

class CheckoutItem extends Component {

  static get propTypes() {
    return {
      name: PropTypes.string,
      quant: PropTypes.number,
      image: PropTypes.string,
      id: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      updateTotal: PropTypes.func,
      removeProduct: PropTypes.func,
      updateQuant: PropTypes.func,
      toggleItem: PropTypes.func,
      newQuant: PropTypes.number,
      handleNewQuantChange: PropTypes.func,
    }
  }

  handleQuantChange(event) {
    let quant = parseInt(event.target.value);
    let newQuant = quant !== null && quant >= 0 ? quant : null;
    this.props.handleNewQuantChange(this.props.id, newQuant);
  }

  handleSelect(event) {
    this.props.toggleItem(this.props.id, event.target.checked);
  }

  update() {
    if(this.props.newQuant !== null) {
      this.props.updateQuant(this.props.id, this.props.newQuant);
      this.props.updateTotal((this.props.newQuant - this.props.quant) * this.props.price);
      if(this.props.newQuant === 0) {
        this.props.toggleItem(this.props.id, false);
        this.props.removeProduct(this.props.id);
      }
    }
  }

  render() {
    const productInfoStyle = {float: 'left'};
    return <div className="list-group-item">
      <div className="list-view-pf-main-info">
        <div className="list-view-pf-left">
          <div className="list-view-pf-checkbox">
            <input type="checkbox" onChange={this.handleSelect.bind(this)}/>
          </div>
        </div>
        <div className="list-view-pf-body">
          <div className="list-view-pf-description" style={productInfoStyle}>
            <div className="list-group-item-heading">
              <img alt="product" className="img-thumb" src={"/images/" + this.props.image}/>
            </div>
            <div className="list-group-item-heading">
              {this.props.category} - {this.props.name}
            </div>
            <div className="list-group-item-text">
              {"$" + this.props.price} x
              <input type="number" min="0" step="1" defaultValue={this.props.quant}
                     onChange={this.handleQuantChange.bind(this)}/>
            </div>
          </div>
          <div className="list-view-pf-actions">
            <button className="btn btn-default" onClick={this.update.bind(this)}>Update</button>
          </div>
        </div>
      </div>
    </div>
  }
}

export default CheckoutItem;
