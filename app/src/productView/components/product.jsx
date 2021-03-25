import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import ButtonComponent from '../../modal/components/ButtonModal.jsx';
import { ROUTES } from '../productConstants'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Product extends Component {
  static get propTypes() {
    return {
      product: PropTypes.object,
      toggleModal: PropTypes.func,
      selectedProduct: PropTypes.object,
      selectProduct: PropTypes.func,
    }
  }

  constructor(){
    super();
    this.toggleModal = this.toggleModal.bind(this);
    this.selectProduct = this.selectProduct.bind(this);
  }

  toggleModal(){
    this.props.toggleModal();
  }

  selectProduct(){
    this.props.selectProduct(this.props.product)
  }

  imageFormatter(filename) {
    return <img alt="product" className="img-thumb" src={ROUTES.IMAGES + filename}/>;
  }

  render() {
    let product = this.props.product;
    let image =  this.imageFormatter(this.props.product.image);
    let cartButtonContent = <span onClick={this.selectProduct}>
      <FontAwesomeIcon icon="shopping-cart" />
    </span>;
    let iconStyle = {marginRight: '5px'};

    return (
        <div className="card-pf-body" style={{height: '261px'}}>
          <div className="card-pf-top-element aligner">{image}</div>
          <h2 className="card-pf-title text-center">{product.pname}</h2>
          <div className="card-pf-items text-center">
            <div className="card-pf-item">
              <FontAwesomeIcon icon="dollar-sign" style={iconStyle}/>
              <span className="card-pf-item-text">{product.pprice}</span>
            </div>
            <div className="card-pf-item">
              <ButtonComponent toggleModal={this.props.toggleModal} content={cartButtonContent}/>
            </div>
          </div>
          <p className="card-pf-info text-center">Category: {product.ptype}</p>
        </div>
    )
  }

}

export default Product;
