'use strict';

import templates from './Modal.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';

class Modal extends Component {
	close() {
	  this.dispose();
	}
}
Soy.register(Modal, templates);

export default Modal;
