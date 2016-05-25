'use strict';

import JSXComponent from 'metal-jsx';

class Modal extends JSXComponent {
	close() {
	  this.dispose();
	}

	/**
	 * Renders the component's content. Note that data can be accessed via the
	 * `config` property.
	 */
	render() {
		return <div class="modal show">
			<div class="modal-dialog">
				<div class="modal-content">
					<header class="modal-header">
						<button data-onclick={this.close.bind(this)} type="button" class="close">
							<span>×</span>
						</button>
						<h4>{this.config.header}</h4>
					</header>
					<section class="modal-body">
						{this.config.body}
					</section>
					<footer class="modal-footer">
						<button type="button" class="btn btn-primary">OK</button>
					</footer>
				</div>
			</div>
		</div>;
	}
}

export default Modal;
