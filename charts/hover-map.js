'use strict';

jQuery(document).ready(function () {
  jQuery('#metrics-sidemenu').foundation(
    'down',
    jQuery(`#${window.wp_js_object.base_slug}-menu`),
  );

  let chartDiv = jQuery('#chart');
  chartDiv.empty().html(`
    <span class="section-header" title="Showing all contacts from all time with any status">${window.wp_js_object.translations.title}</span>
    <div id="mapping_chart"></div>
  `);

  window.page_mapping_view(window.wp_js_object.rest_endpoints_base);
});

// Override default setCommonMapSettings to invert polygon colors,
// making 0 show as red and any other value show as default gray
window.setCommonMapSettings = (function (originalFn) {
  return function (chart) {
    // call the original setCommonMapSettings function
    originalFn(chart);

    // get the chart/series
    const polygonSeries = chart.series.getIndex(0);
    let template = polygonSeries.mapPolygons.template;
    if (template) {
      delete template.propertyFields.fill;
    }

    // update the heatRule
    const heatRule = polygonSeries.heatRules.getIndex(0);
    if (heatRule) {
      heatRule.minValue = 0;
      heatRule.maxValue = 1;
      heatRule.min = am4core.color("#cc4b37");
      heatRule.max = am4core.color("#d9d9d9");
    }
  }
})(window.setCommonMapSettings)
