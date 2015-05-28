'use strict';

var $ = require('jquery');
require('./core');
require('./ui.pureview');
var UI = $.AMUI;

function galleryInit() {
  var $gallery = $('[data-am-widget="gallery"]');

  $gallery.each(function() {
    var options = UI.utils.parseOptions($(this).attr('data-am-gallery'));

    if (options.pureview) {
      (typeof options.pureview === 'object') ?
        $(this).pureview(options.pureview) : $(this).pureview();
    }
  });
}

$(function() {
  galleryInit();
});

module.exports = $.AMUI.gallery = {
  VERSION: '3.0.0',
  init: galleryInit
};
