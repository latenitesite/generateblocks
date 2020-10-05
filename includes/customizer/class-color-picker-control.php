<?php // phpcs:ignore WordPress.Files.FileName
/**
 * Customize API: ColorAlpha class
 *
 * @package WordPress
 * @subpackage Customize
 * @since 1.0.0
 */

/**
 * Customize Color Control class.
 *
 * @since 1.0.0
 *
 * @see WP_Customize_Control
 */
class GenerateBlocks_Customize_Color_Control extends WP_Customize_Color_Control {

	/**
	 * Type.
	 *
	 * @access public
	 * @since 1.0.0
	 * @var string
	 */
	public $type = 'gb-color';

	/**
	 * Enqueue scripts/styles for the color picker.
	 *
	 * @access public
	 * @since 1.0.0
	 * @return void
	 */
	public function enqueue() {
		parent::enqueue();
		// Enqueue the script.
		wp_enqueue_style( 'wp-color-picker' );
		wp_enqueue_script( 'gb-color', GENERATEBLOCKS_DIR_URL . 'includes/customizer/assets/alpha-color-picker.js', array( 'wp-color-picker' ), GENERATEBLOCKS_VERSION, false );
		wp_enqueue_script( 'gb-color-control', GENERATEBLOCKS_DIR_URL . 'includes/customizer/assets/gb-color-control.js', array( 'customize-controls' ), GENERATEBLOCKS_VERSION, false );
	}

	/**
	 * Refresh the parameters passed to the JavaScript via JSON.
	 *
	 * @since 3.4.0
	 * @uses WP_Customize_Control::to_json()
	 */
	public function to_json() {
		parent::to_json();
		$this->json['defaultValue'] = $this->setting->default;
		$this->json['link'] = $this->get_link();
	}

	/**
	 * Empty JS template.
	 *
	 * @access public
	 * @since 1.0.0
	 * @return void
	 */
	public function content_template() {
		?>
		<# if ( data.label && '' !== data.label ) { #>
			<span class="customize-control-title">{{ data.label }}</span>
		<# } #>
		<input class="color-picker" data-alpha="true" type="text" {{{ data.link }}} />
		<?php
	}
}
