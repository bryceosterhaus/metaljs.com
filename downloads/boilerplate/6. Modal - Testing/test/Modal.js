'use strict';

import Modal from '../src/Modal';

describe('Modal', function() {
	it('should render the body', function() {
		var component = new Modal({
			body: 'Test Body'
		});
		var bodyElement = component.element.querySelector('.modal-body');
		assert.ok(bodyElement);
		assert.strictEqual('Test Body', bodyElement.textContent);
	});
});
