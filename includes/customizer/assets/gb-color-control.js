( function( $ ) {
	/**
	 * File gb-color-control.js
	 *
	 * Alpha color control in the Customizer.
	 *
	 * @package GenerateBlocks
	 */

	$( window ).on( 'load', function() {
		$( 'html' ).addClass( 'colorpicker-ready' );
	} );

	wp.customize.controlConstructor[ 'gb-color' ] = wp.customize.Control.extend( {
		ready: function() {
			'use strict';

			const control = this;

			this.container.find( '.color-picker' ).wpColorPicker( {
				/**
			     * @param {Event} event - standard jQuery event, produced by whichever
			     * control was changed.
			     * @param {Object} ui - standard jQuery UI object, with a color member
			     * containing a Color.js object.
			     */
				change: function( event, ui ) {
					const color = ui.color.toString();

					if ( $( 'html' ).hasClass( 'colorpicker-ready' ) ) {
						control.setting.set( color );
					}
				},

				/**
			     * @param {Event} event - standard jQuery event, produced by "Clear"
			     * button.
			     */
				clear: function( event ) {
					const element = jQuery( event.target ).closest( '.wp-picker-input-wrap' ).find( '.wp-color-picker' )[ 0 ];
					const color = '';

					if ( element ) {
						control.setting.set( color );
					}
				},
			} );
		},
	} );
}( jQuery ) );
