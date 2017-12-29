import users from '@/components/users';
import Vue from 'vue';

describe('users.vue', () => {
  it('should add users', () => {
    const Constructor = Vue.extend(users);
    const UsersComponent = new Constructor().$mount();
    expect(UsersComponent.$el.textContent).contain('carlos')
  })
})
