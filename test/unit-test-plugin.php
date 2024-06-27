<?php

class PluginTest extends TestCase
{
    public function test_plugin_installed() {
        activate_plugin( 'dt-metrics-gap-list/dt-metrics-gap-list.php' );

        $this->assertContains(
            'dt-metrics-gap-list/dt-metrics-gap-list.php',
            get_option( 'active_plugins' )
        );
    }
}
