import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
// import router from '@/router.js'
const localVue = createLocalVue();

import SingleSweepstake from '@/views/SingleSweepstake.vue';

describe('views/SingleSweepstake.vue', () => {
	it('checks whether sweep is still open', () => {
		// const sweep = {_id: "0123456789abcdef5c7aa746", title: "test sweep", picture: "https://a.url.com/picture.png", cutOffDate: "01-02-2019", options: [{name: "option1", allocated: false}, {name: "option2", allocated: false}], finalAnswer: ""}
		// const $route = {
		// 	fullPath: 'http://localhost:3000/'
		// }
		// const wrapper = shallowMount(SingleSweepstake, {
		// 	localVue,
		// 	// router,
		// 	mocks: { $route }
		// 	//   propsData: { sweep }
		// })
		// expect(wrapper.text()).to.include(sweep)

	})
})
