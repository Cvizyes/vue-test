import List from '@/components/List';
import Vue from 'vue';

describe('List.vue', () => {
  it('displays items from the list', () => {
      // our test goes here
      const Constructor = Vue.extend(List);
      const ListComponent = new Constructor().$mount();
      expect(ListComponent.$el.textContent).to.contain('play games');
  })
  it('adds a new item to list on click', () => {
      const Constructor = Vue.extend(List);
      const ListComponent = new Constructor().$mount();
})

it('adds a new item to list on click', () => {
    const Constructor = Vue.extend(List);
    const ListComponent = new Constructor().$mount();

    ListComponent.newItem = 'brush my teeth';

    const button = ListComponent.$el.querySelector('button');
    const clickEvent = new window.Event('click');
    button.dispatchEvent(clickEvent);
    ListComponent._watcher.run();

    expect(ListComponent.$el.textContent).to.contain('brush my teeth');
    expect(ListComponent.listItems).to.contain('brush my teeth');

  })
})