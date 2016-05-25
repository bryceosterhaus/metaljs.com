'use strict';

import CloseHeader from './CloseHeader';
import JSXComponent from 'metal-jsx';

class Modal extends JSXComponent {
	close() {
	  this.shown = false;
	}

	/**
	 * Renders the component's content. Note that data can be accessed via the
	 * `config` property.
	 */
	render() {
		var cssClass = 'modal';
		if (this.shown) {
			cssClass += 'show';
		}
		return <div class={cssClass}>
			<div class="modal-dialog">
				<div class="modal-content">
					<CloseHeader
						cssClass="modal-header"
						onClick={this.close.bind(this)}
						title={this.header}
					/>
					<section class="modal-body">
						{this.body}
					</section>
					<footer class="modal-footer">
						<button type="button" class="btn btn-primary">OK</button>
					</footer>
				</div>
			</div>
		</div>;
	}
}

Modal.STATE = {
	shown: {
		// The default value will be: `true`.
		value: true
	}
};

Modal.STATE = {
	body: {
		value: 'Default body'
	},
	header: {
		value: 'Default header'
	},
	shown: {
		// The default value will be: `true`.
		value: true
	}
};

export default Modal;
