<?php
/**
 * This files adds options to the Customizer.
 *
 * @package GenerateBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

add_action( 'customize_register', 'generateblocks_do_customizer_options' );
/**
 * Add options to the Customizer.
 *
 * @param object $wp_customize The Customizer object.
 */
function generateblocks_do_customizer_options( $wp_customize ) {
	require_once 'class-color-picker-control.php';
	$defaults = generateblocks_get_option_defaults();

	$wp_customize->register_control_type( 'GenerateBlocks_Customize_Color_Control' );
	$wp_customize->register_control_type( 'Theme_Customize_Repeater_Control' );

	$wp_customize->add_section(
		'generateblocks',
		array(
			'title' => __( 'GenerateBlocks', 'generateblocks' ),
			'capability' => 'edit_theme_options',
		)
	);

	$wp_customize->add_setting(
		'generateblocks[global_palette][--global-accent]',
		array(
			'default' => $defaults['global_palette']['--global-accent'],
			'type' => 'option',
			'sanitize_callback' => '',
		)
	);

	$wp_customize->add_control(
		new GenerateBlocks_Customize_Color_Control(
			$wp_customize,
			'generateblocks[global_palette][--global-accent]',
			array(
				'label'      => __( 'Accent', 'mytheme' ),
				'section'    => 'generateblocks',
				'settings'   => 'generateblocks[global_palette][--global-accent]',
			)
		)
	);

	$wp_customize->add_setting(
		'generateblocks[global_palette][--global-accent2]',
		array(
			'default' => $defaults['global_palette']['--global-accent2'],
			'type' => 'option',
			'sanitize_callback' => '',
		)
	);

	$wp_customize->add_control(
		new GenerateBlocks_Customize_Color_Control(
			$wp_customize,
			'generateblocks[global_palette][--global-accent2]',
			array(
				'label'      => __( 'Accent 2', 'mytheme' ),
				'section'    => 'generateblocks',
				'settings'   => 'generateblocks[global_palette][--global-accent2]',
			)
		)
	);

	$wp_customize->add_setting(
		'generateblocks[global_palette][--global-contrast]',
		array(
			'default' => $defaults['global_palette']['--global-contrast'],
			'type' => 'option',
			'sanitize_callback' => '',
		)
	);

	$wp_customize->add_control(
		new GenerateBlocks_Customize_Color_Control(
			$wp_customize,
			'generateblocks[global_palette][--global-contrast]',
			array(
				'label'      => __( 'Contrast', 'mytheme' ),
				'section'    => 'generateblocks',
				'settings'   => 'generateblocks[global_palette][--global-contrast]',
			)
		)
	);

	$wp_customize->add_setting(
		'generateblocks[global_palette][--global-contrast2]',
		array(
			'default' => $defaults['global_palette']['--global-contrast2'],
			'type' => 'option',
			'sanitize_callback' => '',
		)
	);

	$wp_customize->add_control(
		new GenerateBlocks_Customize_Color_Control(
			$wp_customize,
			'generateblocks[global_palette][--global-contrast2]',
			array(
				'label'      => __( 'Contrast 2', 'mytheme' ),
				'section'    => 'generateblocks',
				'settings'   => 'generateblocks[global_palette][--global-contrast2]',
			)
		)
	);

	$wp_customize->add_setting(
		'generateblocks[global_palette][--global-contrast3]',
		array(
			'default' => $defaults['global_palette']['--global-contrast3'],
			'type' => 'option',
			'sanitize_callback' => '',
		)
	);

	$wp_customize->add_control(
		new GenerateBlocks_Customize_Color_Control(
			$wp_customize,
			'generateblocks[global_palette][--global-contrast3]',
			array(
				'label'      => __( 'Contrast 3', 'mytheme' ),
				'section'    => 'generateblocks',
				'settings'   => 'generateblocks[global_palette][--global-contrast3]',
			)
		)
	);

	$wp_customize->add_setting(
		'generateblocks[global_palette][--global-contrast4]',
		array(
			'default' => $defaults['global_palette']['--global-contrast4'],
			'type' => 'option',
			'sanitize_callback' => '',
		)
	);

	$wp_customize->add_control(
		new GenerateBlocks_Customize_Color_Control(
			$wp_customize,
			'generateblocks[global_palette][--global-contrast4]',
			array(
				'label'      => __( 'Contrast 4', 'mytheme' ),
				'section'    => 'generateblocks',
				'settings'   => 'generateblocks[global_palette][--global-contrast4]',
			)
		)
	);

	$wp_customize->add_setting(
		'generateblocks[global_palette][--global-base]',
		array(
			'default' => $defaults['global_palette']['--global-base'],
			'type' => 'option',
			'sanitize_callback' => '',
		)
	);

	$wp_customize->add_control(
		new GenerateBlocks_Customize_Color_Control(
			$wp_customize,
			'generateblocks[global_palette][--global-base]',
			array(
				'label'      => __( 'Base', 'mytheme' ),
				'section'    => 'generateblocks',
				'settings'   => 'generateblocks[global_palette][--global-base]',
			)
		)
	);

	$wp_customize->add_setting(
		'generateblocks[global_palette][--global-base2]',
		array(
			'default' => $defaults['global_palette']['--global-base2'],
			'type' => 'option',
			'sanitize_callback' => '',
		)
	);

	$wp_customize->add_control(
		new GenerateBlocks_Customize_Color_Control(
			$wp_customize,
			'generateblocks[global_palette][--global-base2]',
			array(
				'label'      => __( 'Base 2', 'mytheme' ),
				'section'    => 'generateblocks',
				'settings'   => 'generateblocks[global_palette][--global-base2]',
			)
		)
	);

	$wp_customize->add_setting(
		'generateblocks[global_palette][--global-base3]',
		array(
			'default' => $defaults['global_palette']['--global-base3'],
			'type' => 'option',
			'sanitize_callback' => '',
		)
	);

	$wp_customize->add_control(
		new GenerateBlocks_Customize_Color_Control(
			$wp_customize,
			'generateblocks[global_palette][--global-base3]',
			array(
				'label'      => __( 'Base 3', 'mytheme' ),
				'section'    => 'generateblocks',
				'settings'   => 'generateblocks[global_palette][--global-base3]',
			)
		)
	);
}
