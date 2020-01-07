<?php
/**
 * Set our block attribute defaults.
 *
 * @package FlexBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Set our block defaults.
 *
 * @since 0.1
 * @param string $block The name of our block.
 *
 * @return array
 */
function flexblocks_get_block_defaults() {
	$defaults = array();

	$container_width = 1100;

	if ( function_exists( 'generate_get_option' ) ) {
		$container_width = generate_get_option( 'container_width' );
	}

	$defaults['container'] = array(
		'isGrid' => false,
		'containerWidth' => $container_width,
		'outerContainer' => 'full',
		'innerContainer' => 'contained',
		'minHeight' => false,
		'minHeightUnit' => 'px',
		'minHeightTablet' => false,
		'minHeightUnitTablet' => 'px',
		'minHeightMobile' => false,
		'minHeightUnitMobile' => 'px',
		'paddingTop' => 40,
		'paddingRight' => 40,
		'paddingBottom' => 40,
		'paddingLeft' => 40,
		'paddingUnit' => 'px',
		'paddingTopTablet' => '',
		'paddingRightTablet' => '',
		'paddingBottomTablet' => '',
		'paddingLeftTablet' => '',
		'paddingTopMobile' => '',
		'paddingRightMobile' => '',
		'paddingBottomMobile' => '',
		'paddingLeftMobile' => '',
		'marginTop' => '',
		'marginRight' => '',
		'marginBottom' => '',
		'marginLeft' => '',
		'marginUnit' => 'px',
		'marginTopTablet' => '',
		'marginRightTablet' => '',
		'marginBottomTablet' => '',
		'marginLeftTablet' => '',
		'marginTopMobile' => '',
		'marginRightMobile' => '',
		'marginBottomMobile' => '',
		'marginLeftMobile' => '',
		'borderSizeTop' => '',
		'borderSizeRight' => '',
		'borderSizeBottom' => '',
		'borderSizeLeft' => '',
		'borderSizeTopTablet' => '',
		'borderSizeRightTablet' => '',
		'borderSizeBottomTablet' => '',
		'borderSizeLeftTablet' => '',
		'borderSizeTopMobile' => '',
		'borderSizeRightMobile' => '',
		'borderSizeBottomMobile' => '',
		'borderSizeLeftMobile' => '',
		'borderRadiusTopRight' => '',
		'borderRadiusBottomRight' => '',
		'borderRadiusBottomLeft' => '',
		'borderRadiusTopLeft' => '',
		'borderRadiusUnit' => 'px',
		'borderRadiusTopRightTablet' => '',
		'borderRadiusBottomRightTablet' => '',
		'borderRadiusBottomLeftTablet' => '',
		'borderRadiusTopLeftTablet' => '',
		'borderRadiusTopRightMobile' => '',
		'borderRadiusBottomRightMobile' => '',
		'borderRadiusBottomLeftMobile' => '',
		'borderRadiusTopLeftMobile' => '',
		'borderColor' => '',
		'backgroundColor' => '',
		'gradient' => false,
		'gradientDirection' => '90deg',
		'gradientColorOne' => 'rgba(255, 255, 255, 0.1)',
		'gradientColorStopOne' => '',
		'gradientColorTwo' => 'rgba(0, 0, 0, 0.3)',
		'gradientColorStopTwo' => '',
		'textColor' => '',
		'linkColor' => '',
		'linkColorHover' => '',
		'bgImage' => '',
		'bgOptions' => array(
			'overlay' => false,
			'position' => 'center center',
			'size' => 'cover',
			'repeat' => 'no-repeat',
			'attachment' => '',
		),
		'width' => 50,
		'widthTablet' => '',
		'widthMobile' => 100,
		'verticalAlignment' => '',
		'verticalAlignmentTablet' => 'inherit',
		'verticalAlignmentMobile' => 'inherit',
		'zindex' => '',
		'removeVerticalGap' => false,
		'removeVerticalGapTablet' => false,
		'removeVerticalGapMobile' => false,
		'orderTablet' => false,
		'orderMobile' => false,
	);

	$defaults['buttonContainer'] = array(
		'alignment'	=> '',
		'alignmentTablet' => '',
		'alignmentMobile' => '',
		'marginTop' => '',
		'marginRight' => '',
		'marginBottom' => '',
		'marginLeft' => '',
		'marginTopTablet' => '',
		'marginRightTablet' => '',
		'marginBottomTablet' => '',
		'marginLeftTablet' => '',
		'marginTopMobile' => '',
		'marginRightMobile' => '',
		'marginBottomMobile' => '',
		'marginLeftMobile' => '',
		'marginUnit' => 'px',
		'stack' => false,
		'stackTablet' => false,
		'stackMobile' => false,
		'fillHorizontalSpace' => false,
		'fillHorizontalSpaceTablet' => false,
		'fillHorizontalSpaceMobile' => false,
	);

	$defaults['button'] = array(
		'backgroundColor' => '#0366d6',
		'textColor' => '#ffffff',
		'backgroundColorHover' => '#222222',
		'textColorHover' => '#ffffff',
		'fontFamily' => '',
		'fontFamilyFallback' => '',
		'googleFont' => false,
		'fontWeight' => '',
		'fontSize' => false,
		'fontSizeTablet' => false,
		'fontSizeMobile' => false,
		'fontSizeUnit' => 'em',
		'textTransform' => '',
		'letterSpacing' => '',
		'letterSpacingTablet' => '',
		'letterSpacingMobile' => '',
		'marginTop' => '',
		'marginRight' => '20',
		'marginBottom' => '',
		'marginLeft' => '',
		'marginTopTablet' => '',
		'marginRightTablet' => '',
		'marginBottomTablet' => '',
		'marginLeftTablet' => '',
		'marginTopMobile' => '',
		'marginRightMobile' => '',
		'marginBottomMobile' => '',
		'marginLeftMobile' => '',
		'marginUnit' => 'px',
		'paddingTop' => '10',
		'paddingRight' => '15',
		'paddingBottom' => '10',
		'paddingLeft' => '15',
		'paddingTopTablet' => '',
		'paddingRightTablet' => '',
		'paddingBottomTablet' => '',
		'paddingLeftTablet' => '',
		'paddingTopMobile' => '',
		'paddingRightMobile' => '',
		'paddingBottomMobile' => '',
		'paddingLeftMobile' => '',
		'paddingUnit' => 'px',
		'borderSizeTop' => '',
		'borderSizeRight' => '',
		'borderSizeBottom' => '',
		'borderSizeLeft' => '',
		'borderSizeTopTablet' => '',
		'borderSizeRightTablet' => '',
		'borderSizeBottomTablet' => '',
		'borderSizeLeftTablet' => '',
		'borderSizeTopMobile' => '',
		'borderSizeRightMobile' => '',
		'borderSizeBottomMobile' => '',
		'borderSizeLeftMobile' => '',
		'borderRadiusTopRight' => '',
		'borderRadiusBottomRight' => '',
		'borderRadiusBottomLeft' => '',
		'borderRadiusTopLeft' => '',
		'borderRadiusTopRightTablet' => '',
		'borderRadiusBottomRightTablet' => '',
		'borderRadiusBottomLeftTablet' => '',
		'borderRadiusTopLeftTablet' => '',
		'borderRadiusTopRightMobile' => '',
		'borderRadiusBottomRightMobile' => '',
		'borderRadiusBottomLeftMobile' => '',
		'borderRadiusTopLeftMobile' => '',
		'borderRadiusUnit' => 'px',
		'borderColor' => '#0366d6',
		'borderColorHover' => '#222222',
		'icon' => '',
		'iconLocation' => 'left',
		'removeText' => false,
		'ariaLabel' => '',
		'gradient' => false,
		'gradientDirection' => '90deg',
		'gradientColorOne' => '',
		'gradientColorStopOne' => '',
		'gradientColorTwo' => '',
		'gradientColorStopTwo' => '',
	);

	$defaults['gridContainer'] = array(
		'columns' => 0,
		'horizontalGap' => 30,
		'verticalGap' => '',
		'verticalAlignment' => '',
		'horizontalGapTablet' => '',
		'verticalGapTablet' => '',
		'verticalAlignmentTablet' => 'inherit',
		'horizontalGapMobile' => '',
		'verticalGapMobile' => '',
		'verticalAlignmentMobile' => 'inherit',
		'horizontalAlignment' => '',
		'horizontalAlignmentTablet' => '',
		'horizontalAlignmentMobile' => '',
	);

	$defaults['headline'] = array(
		'element' => 'p',
		'dynamicText' => 'post-title',
		'cssClasses' => '',
		'alignment' => false,
		'alignmentTablet' => false,
		'alignmentMobile' => false,
		'backgroundColor' => false,
		'textColor' => false,
		'linkColor' => false,
		'linkColorHover' => false,
		'fontFamily' => '',
		'fontFamilyFallback' => '',
		'googleFont' => false,
		'fontWeight' => '',
		'fontSize' => '',
		'fontSizeTablet' => '',
		'fontSizeMobile' => '',
		'fontSizeUnit' => 'px',
		'textTransform' => '',
		'lineHeight' => '',
		'lineHeightTablet' => '',
		'lineHeightMobile' => '',
		'lineHeightUnit' => 'em',
		'letterSpacing' => '',
		'letterSpacingTablet' => '',
		'letterSpacingMobile' => '',
		'marginTop' => '',
		'marginRight' => '',
		'marginBottom' => '25',
		'marginLeft' => '',
		'marginTopTablet' => '',
		'marginRightTablet' => '',
		'marginBottomTablet' => '',
		'marginLeftTablet' => '',
		'marginTopMobile' => '',
		'marginRightMobile' => '',
		'marginBottomMobile' => '',
		'marginLeftMobile' => '',
		'marginUnit' => 'px',
		'paddingTop' => '',
		'paddingRight' => '',
		'paddingBottom' => '',
		'paddingLeft' => '',
		'paddingTopTablet' => '',
		'paddingRightTablet' => '',
		'paddingBottomTablet' => '',
		'paddingLeftTablet' => '',
		'paddingTopMobile' => '',
		'paddingRightMobile' => '',
		'paddingBottomMobile' => '',
		'paddingLeftMobile' => '',
		'paddingUnit' => 'px',
		'icon' => '',
		'iconColor' => false,
		'iconLocation' => 'inline',
		'iconLocationTablet' => '',
		'iconLocationMobile' => '',
		'iconVerticalAlignment' => 'center',
		'iconVerticalAlignmentTablet' => '',
		'iconVerticalAlignmentMobile' => '',
		'iconPaddingTop' => '',
		'iconPaddingRight' => '0.5',
		'iconPaddingBottom' => '',
		'iconPaddingLeft' => '',
		'iconPaddingTopTablet' => '',
		'iconPaddingRightTablet' => '',
		'iconPaddingBottomTablet' => '',
		'iconPaddingLeftTablet' => '',
		'iconPaddingTopMobile' => '',
		'iconPaddingRightMobile' => '',
		'iconPaddingBottomMobile' => '',
		'iconPaddingLeftMobile' => '',
		'iconPaddingUnit' => 'em',
		'iconSize' => 1,
		'iconSizeTablet' => '',
		'iconSizeMobile' => '',
	);

	return apply_filters( 'flexblocks_defaults', $defaults );
}
