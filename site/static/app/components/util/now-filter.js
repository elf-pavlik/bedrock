/*!
 * Now date filter.
 *
 * Copyright (c) 2012-2014 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
define([], function() {

'use strict';

/* @ngInject */
function factory($filter) {
  return function(value, format) {
    return $filter('date')(new Date(), format);
  };
}

return {now: factory};

});
