<?php
/*
Plugin Name: API Integration
Plugin Version: 1.0.0
Description: Integrates with the Fake Store API to fetch and display product data.
*/
// Enqueue the CSS file
function enqueue_fake_store_styles() {
    wp_enqueue_style('fake-store-styles', plugins_url('css/fake-store-styles.css', __FILE__), array(), '1.0.0', 'all');
  }
  add_action('wp_enqueue_scripts', 'enqueue_fake_store_styles');
  
// Enqueue the JavaScript files
function fake_store_api_enqueue_scripts() {
  // Enqueue the fake-store-api.js file
  wp_enqueue_script('fake-store-api', plugin_dir_url(__FILE__) . 'js/fake-store-api.js', array('jquery'), '1.0.0', true);

  // Enqueue the data-display.js file
  wp_enqueue_script('data-display', plugin_dir_url(__FILE__) . 'js/data-display.js', array('jquery', 'fake-store-api'), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'fake_store_api_enqueue_scripts');

// Create a shortcode for displaying the data
function fake_store_api_display_data_shortcode() {
  ob_start();
  ?>
  <div id="fake-store-container"></div>
  <?php
  return ob_get_clean();
}
add_shortcode('fake_store_api_display_data', 'fake_store_api_display_data_shortcode');
