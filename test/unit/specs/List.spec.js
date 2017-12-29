import List from '@/components/List';
import Vue from 'vue';

describe('List.vue', () => {
  it('should add test', () => {
    const Constructor = Vue.extend(List);
    const ListComponent = new Constructor().$mount();
    expect(ListComponent.$el.textContent).to.contain('');
  })
})
