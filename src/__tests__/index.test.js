import { createLocalVue, mount } from '@vue/test-utils';
import VueMaskRu, { VueMaskRuDirective, VueMaskRuPlugin } from '../index';

describe('plugin/directive registration', () => {
  let Vue;

  beforeEach(() => {
    Vue = createLocalVue();
  });

  it('default export should be a function', () => {
    expect(VueMaskRu).toEqual(expect.any(Function));
  });

  it('named export `VueMaskRuPlugin` should be a function', () => {
    expect(VueMaskRuPlugin).toEqual(expect.any(Function));
  });

  it('named export `VueMaskRuDirective` should be an object', () => {
    expect(VueMaskRuDirective).toEqual(expect.any(Object));
  });

  it('should register `v-mask-ru` directive', () => {
    expect(Vue.options.directives['mask-ru']).toBeUndefined();
    Vue.use(VueMaskRu);
    expect(Vue.options.directives['mask-ru']).toEqual(expect.any(Object));
  });

  it('should allow to use exposed directive with custom name', () => {
    expect(Vue.options.directives.fakeMask).toBeUndefined();
    Vue.directive('fakeMask', VueMaskRuDirective);
    expect(Vue.options.directives.fakeMask).toEqual(expect.any(Object));
  });
});

describe('directive usage', () => {
  let mountWithMask;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueMaskRu);
    mountWithMask = (arg, options) => mount(arg, { ...options, localVue });
  });

  it('should run this canary test', () => {
    const wrapper = mountWithMask({
      template: '<input />',
    });
    expect(wrapper.find('input').exists()).toBe(true);
  });

  it('should update model value after directive bind', () => {
    const wrapper = mountWithMask({
      data: () => ({ mask: '##.##.####', value: '11112011' }),
      template: '<input v-mask-ru="mask" v-model="value"/>',
    });
    expect(wrapper.vm.$el.value).toBe('11.11.2011');
  });

  it('should update model value when input value changes', async () => {
    const wrapper = mountWithMask({
      data: () => ({ mask: '##.##.####', value: undefined }),
      template: '<input v-mask-ru="mask" v-model="value"/>',
    });
    wrapper.vm.$el.value = '11112011';
    wrapper.trigger('input');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$el.value).toBe('11.11.2011');
  });
});
