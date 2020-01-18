import classnames from 'classnames';
import hexToRGBA from './hex-to-rgba';
import getIcon from '../../utils/get-icon';

// Import CSS
import './editor.scss';

const { Component } = wp.element;

const { __ } = wp.i18n;

const {
	Dropdown,
	Tooltip,
	BaseControl,
	Button,
	TextControl,
	ColorPicker,
	RangeControl,
} = wp.components;

const {
    ColorPalette,
} = wp.blockEditor;

export default class GenerateBlocksColorPicker extends Component {
	constructor( props ) {
		super( ...arguments );
	}

	render() {
		const {
			value,
			onChange,
			onOpacityChange,
			setAttributes,
			label,
			alpha = false,
			valueOpacity,
			attrOpacity,
		} = this.props;

		return (
			<BaseControl
				label={ label }
				className="gblocks-component-color-picker-wrapper"
			>
				<Dropdown
					className={ classnames( 'components-color-palette__item-wrapper components-circular-option-picker__option-wrapper', value ? '' : 'components-color-palette__custom-color' ) }
					contentClassName="components-color-palette__picker"
					renderToggle={ ( { isOpen, onToggle } ) => (
						<Tooltip text={ __( 'Choose Color', 'generateblocks' ) }>
							<button
								type="button"
								aria-expanded={ isOpen }
								className="components-color-palette__item components-circular-option-picker__option"
								onClick={ onToggle }
								aria-label={ __( 'Custom color picker', 'generateblocks' ) }
								style={ { color: value ? hexToRGBA( value, valueOpacity ) : 'transparent' } }
							>
								<span className="components-color-palette__custom-color-gradient" />
							</button>
						</Tooltip>
					) }
					renderContent={ () => (
						<div
							className={ classnames( {
								'gblocks-component-color-picker': true
							} ) }
						>
							<ColorPicker
								color={ value ? value : '' }
								onChangeComplete={ ( color ) => {
									onChange( color.hex );
								} }
								disableAlpha
							/>

							{ alpha &&
								<div className="gblocks-component-color-opacity">
									<Tooltip text={ __( 'Opacity', 'generateblocks' ) }>
										{ getIcon( 'gradient' ) }
									</Tooltip>

									<RangeControl
										value={ valueOpacity ? valueOpacity : 0 }
										onChange={ ( value ) => onOpacityChange( value ) }
										min={ 0 }
										max={ 1 }
										step={ 0.01 }
										initialPosition={ 1 }
									/>
								</div>
							}

							<BaseControl
                                label={ __( 'Color Palette', 'generateblocks' ) }
                                className="gblocks-component-color-picker-palette"
                            >
                                <ColorPalette
                                    value={ value }
                                    onChange={ ( color ) => onChange( color ) }
                                    disableCustomColors={ true }
                                />
                            </BaseControl>
						</div>
					) }
				/>
			</BaseControl>
		);
	}
}
