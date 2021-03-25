import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Modal from "react-bootstrap/Modal";

class ModalComponentDialog extends Component{
  // Ensure that the toggleModal is the same that is passed to
  // ButtonModal
  static get propTypes() {
    return {
      toggleModal: PropTypes.func.isRequired,
      isOpen: PropTypes.bool.isRequired,
      modalTitle: PropTypes.string.isRequired,
      modalContent: PropTypes.element.isRequired,
      modalFooter: PropTypes.element,
    }
  }

  constructor(props){
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(){
    this.props.toggleModal();
  }

  render(){
    /*const status = modalStatus ? "Verdadero": "Falso";*/
    let footer = null;
    if(this.props.modalFooter){
      footer = this.props.modalFooter;
    }else {
      footer =
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.closeModal}>Close</button>
          </div>
    }

    const buttonStyle = {
      paddingRight: '20px',
      paddingTop: '25px',
    };


    return (
        <Modal show={this.props.isOpen} onHide={this.closeModal}>

          <Modal.Header>
            <Modal.Title >
              {this.props.modalTitle}
            </Modal.Title>
            <button style={buttonStyle} type="button" className="close" onClick={this.closeModal} data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </Modal.Header>

          <Modal.Body>
            {this.props.modalContent}
          </Modal.Body>

          <Modal.Footer>
            {footer}
          </Modal.Footer>

        </Modal>
    );
  }
}



export default ModalComponentDialog;

