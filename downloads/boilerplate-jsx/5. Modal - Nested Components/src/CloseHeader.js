'use strict';

import JSXComponent from 'metal-jsx';

class CloseHeader extends JSXComponent {
	render() {
		return <header class={this.config.cssClass}>
			<button data-onclick={this.config.onClick} type="button" class="close">
				<span>×</span>
			</button>
			<h4>{this.config.title}</h4>
		</header>;
	}
}

export default CloseHeader;
