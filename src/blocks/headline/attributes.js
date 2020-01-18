export default {
	uniqueId: {
		type: 'string',
		default: '',
	},
	elementId: {
		type: 'string',
		default: '',
	},
	cssClasses: {
		type: 'string',
		default: '',
	},
	content: {
		type: 'array',
		source: 'children',
		selector: 'p,h1,h2,h3,h4,h5,h6',
	},
	element: {
		type: 'string',
		default: generateBlocksDefaults.headline.element,
	},
	alignment: {
		type: 'string',
		default: generateBlocksDefaults.headline.alignment,
	},
	alignmentTablet: {
		type: 'string',
		default: generateBlocksDefaults.headline.alignmentTablet,
	},
	alignmentMobile: {
		type: 'string',
		default: generateBlocksDefaults.headline.alignmentMobile,
	},
	backgroundColor: {
		type: 'string',
		default: generateBlocksDefaults.headline.backgroundColor,
	},
	backgroundColorOpacity: {
		type: 'number',
		default: generateBlocksDefaults.headline.backgroundColorOpacity,
	},
	textColor: {
		type: 'string',
		default: generateBlocksDefaults.headline.textColor,
	},
	linkColor: {
		type: 'string',
		default: generateBlocksDefaults.headline.linkColor,
	},
	linkColorHover: {
		type: 'string',
		default: generateBlocksDefaults.headline.linkColorHover,
	},
	fontFamily: {
		type: 'string',
		default: generateBlocksDefaults.headline.fontFamily,
	},
	fontFamilyFallback: {
		type: 'string',
		default: generateBlocksDefaults.headline.fontFamilyFallback,
	},
	googleFont: {
		type: 'boolean',
		default: generateBlocksDefaults.headline.googleFont,
	},
	fontWeight: {
		type: 'string',
		default: generateBlocksDefaults.headline.fontWeight,
	},
	fontSize: {
		type: 'number',
		default: generateBlocksDefaults.headline.fontSize,
	},
	fontSizeTablet: {
		type: 'number',
		default: generateBlocksDefaults.headline.fontSizeTablet,
	},
	fontSizeMobile: {
		type: 'number',
		default: generateBlocksDefaults.headline.fontSizeMobile,
	},
	fontSizeUnit: {
		type: 'string',
		default: generateBlocksDefaults.headline.fontSizeUnit,
	},
	textTransform: {
		type: 'string',
		default: '',
	},
	lineHeight: {
		type: 'number',
		default: generateBlocksDefaults.headline.lineHeight,
	},
	lineHeightTablet: {
		type: 'number',
		default: generateBlocksDefaults.headline.lineHeightTablet,
	},
	lineHeightMobile: {
		type: 'number',
		default: generateBlocksDefaults.headline.lineHeightMobile,
	},
	lineHeightUnit: {
		type: 'string',
		default: generateBlocksDefaults.headline.lineHeightUnit,
	},
	letterSpacing: {
		type: 'number',
		default: generateBlocksDefaults.headline.letterSpacing,
	},
	letterSpacingTablet: {
		type: 'number',
		default: generateBlocksDefaults.headline.letterSpacingTablet,
	},
	letterSpacingMobile: {
		type: 'number',
		default: generateBlocksDefaults.headline.letterSpacingMobile,
	},
	marginTop: {
		type: 'string',
		default: generateBlocksDefaults.headline.marginTop,
	},
	marginRight: {
		type: 'string',
		default: generateBlocksDefaults.headline.marginRight,
	},
	marginBottom: {
		type: 'string',
		default: generateBlocksDefaults.headline.marginBottom,
	},
	marginLeft: {
		type: 'string',
		default: generateBlocksDefaults.headline.marginLeft,
	},
	marginUnit: {
		type: 'string',
		default: generateBlocksDefaults.headline.marginUnit,
	},
	marginSyncUnits: {
		type: 'boolean',
		default: false,
	},
	marginTopTablet: {
		type: 'string',
		default: generateBlocksDefaults.headline.marginTopTablet,
	},
	marginRightTablet: {
		type: 'string',
		default: generateBlocksDefaults.headline.marginRightTablet,
	},
	marginBottomTablet: {
		type: 'string',
		default: generateBlocksDefaults.headline.marginBottomTablet,
	},
	marginLeftTablet: {
		type: 'string',
		default: generateBlocksDefaults.headline.marginLeftTablet,
	},
	marginTopMobile: {
		type: 'string',
		default: generateBlocksDefaults.headline.marginTopMobile,
	},
	marginRightMobile: {
		type: 'string',
		default: generateBlocksDefaults.headline.marginRightMobile,
	},
	marginBottomMobile: {
		type: 'string',
		default: generateBlocksDefaults.headline.marginBottomMobile,
	},
	marginLeftMobile: {
		type: 'string',
		default: generateBlocksDefaults.headline.marginLeftMobile,
	},
	paddingTop: {
		type: 'string',
		default: generateBlocksDefaults.headline.paddingTop,
	},
	paddingRight: {
		type: 'string',
		default: generateBlocksDefaults.headline.paddingRight,
	},
	paddingBottom: {
		type: 'string',
		default: generateBlocksDefaults.headline.paddingBottom,
	},
	paddingLeft: {
		type: 'string',
		default: generateBlocksDefaults.headline.paddingLeft,
	},
	paddingTopTablet: {
		type: 'string',
		default: generateBlocksDefaults.headline.paddingTopTablet,
	},
	paddingRightTablet: {
		type: 'string',
		default: generateBlocksDefaults.headline.paddingRightTablet,
	},
	paddingBottomTablet: {
		type: 'string',
		default: generateBlocksDefaults.headline.paddingBottomTablet,
	},
	paddingLeftTablet: {
		type: 'string',
		default: generateBlocksDefaults.headline.paddingLeftTablet,
	},
	paddingTopMobile: {
		type: 'string',
		default: generateBlocksDefaults.headline.paddingTopMobile,
	},
	paddingRightMobile: {
		type: 'string',
		default: generateBlocksDefaults.headline.paddingRightMobile,
	},
	paddingBottomMobile: {
		type: 'string',
		default: generateBlocksDefaults.headline.paddingBottomMobile,
	},
	paddingLeftMobile: {
		type: 'string',
		default: generateBlocksDefaults.headline.paddingLeftMobile,
	},
	paddingUnit: {
		type: 'string',
		default: generateBlocksDefaults.headline.paddingUnit,
	},
	paddingSyncUnits: {
		type: 'boolean',
		default: false,
	},
	icon: {
        type: 'string',
        default: generateBlocksDefaults.headline.icon,
    },
	iconColor: {
		type: 'string',
		default: generateBlocksDefaults.headline.iconColor,
	},
	iconColorOpacity: {
		type: 'number',
		default: generateBlocksDefaults.headline.iconColorOpacity,
	},
	customIcon: {
		type: 'boolean',
		default: false,
	},
	iconLocation: {
		type: 'string',
		default: generateBlocksDefaults.headline.iconLocation,
	},
	iconLocationTablet: {
		type: 'string',
		default: generateBlocksDefaults.headline.iconLocationTablet,
	},
	iconLocationMobile: {
		type: 'string',
		default: generateBlocksDefaults.headline.iconLocationMobile,
	},
	iconVerticalAlignment: {
		type: 'string',
		default: generateBlocksDefaults.headline.iconVerticalAlignment,
	},
	iconVerticalAlignmentTablet: {
		type: 'string',
		default: generateBlocksDefaults.headline.iconVerticalAlignmentTablet,
	},
	iconVerticalAlignmentMobile: {
		type: 'string',
		default: generateBlocksDefaults.headline.iconVerticalAlignmentMobile,
	},
	iconPaddingTop: {
		type: 'string',
		default: generateBlocksDefaults.headline.iconPaddingTop,
	},
	iconPaddingRight: {
		type: 'string',
		default: generateBlocksDefaults.headline.iconPaddingRight,
	},
	iconPaddingBottom: {
		type: 'string',
		default: generateBlocksDefaults.headline.iconPaddingBottom,
	},
	iconPaddingLeft: {
		type: 'string',
		default: generateBlocksDefaults.headline.iconPaddingLeft,
	},
	iconPaddingTopTablet: {
		type: 'string',
		default: generateBlocksDefaults.headline.iconPaddingTopTablet,
	},
	iconPaddingRightTablet: {
		type: 'string',
		default: generateBlocksDefaults.headline.iconPaddingRightTablet,
	},
	iconPaddingBottomTablet: {
		type: 'string',
		default: generateBlocksDefaults.headline.iconPaddingBottomTablet,
	},
	iconPaddingLeftTablet: {
		type: 'string',
		default: generateBlocksDefaults.headline.iconPaddingLeftTablet,
	},
	iconPaddingTopMobile: {
		type: 'string',
		default: generateBlocksDefaults.headline.iconPaddingTopMobile,
	},
	iconPaddingRightMobile: {
		type: 'string',
		default: generateBlocksDefaults.headline.iconPaddingRightMobile,
	},
	iconPaddingBottomMobile: {
		type: 'string',
		default: generateBlocksDefaults.headline.iconPaddingBottomMobile,
	},
	iconPaddingLeftMobile: {
		type: 'string',
		default: generateBlocksDefaults.headline.iconPaddingLeftMobile,
	},
	iconPaddingUnit: {
		type: 'string',
		default: generateBlocksDefaults.headline.iconPaddingUnit,
	},
	iconPaddingSyncUnits: {
		type: 'boolean',
		default: false,
	},
	iconSize: {
		type: 'number',
		default: generateBlocksDefaults.headline.iconSize,
	},
	iconSizeTablet: {
		type: 'number',
		default: generateBlocksDefaults.headline.iconSizeTablet,
	},
	iconSizeMobile: {
		type: 'number',
		default: generateBlocksDefaults.headline.iconSizeMobile,
	},
}
