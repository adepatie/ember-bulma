import Ember from 'ember';
import layout from '../templates/components/bulma-button';
import { _responsiveHelpers } from '../constants';

export default Ember.Component.extend({
  layout,
  tagName: 'table',
  classNames: ['table'],
  classNameBindings: [
    'isBordered:is-bordered',
    'bordered:is-bordered',
    'isStriped:is-striped',
    'striped:is-striped',
    'isNarrow:is-narrow',
    'narrow:is-narrow'
  ].concat(_responsiveHelpers)
});
