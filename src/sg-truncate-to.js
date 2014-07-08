'use strict';

angular.module('stanleygu.truncateTo', [])

  .filter('truncateTo', function () {
    return function (input, limit) {
      if (!_.isNumber(limit)) {
        return input;
      } else {
        if (_.size(input) > limit) {
          return  _.first(input, limit).join('') + '...';
        } else {
          return input;
        }
      }
    };
  });
