<?php
if ( !defined( 'ABSPATH' ) ) { exit; } // Exit if accessed directly.

class Dt_Metrics_Gap_List_Charts
{
    private static $_instance = null;
    public static function instance(){
        if ( is_null( self::$_instance ) ) {
            self::$_instance = new self();
        }
        return self::$_instance;
    } // End instance()

    public function __construct(){

        require_once( 'hover-map.php' );
        require_once( 'list.php' );
        new Dt_Metrics_Gap_List_Hover_Map();
        new Dt_Metrics_Gap_List_List();

    } // End __construct
}
Dt_Metrics_Gap_List_Charts::instance();
