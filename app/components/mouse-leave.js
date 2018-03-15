import Component from '@ember/component';

let i = 0;

export default Component.extend({
  left: [],
  classNames: ['mouse-leave'],
  mouseLeave() {
    this.get('left').pushObject(i++);
  }
});
