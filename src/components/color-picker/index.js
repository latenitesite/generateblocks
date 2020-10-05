import classnames from 'classnames';
import hexToRGBA from '../../utils/hex-to-rgba';
import getIcon from '../../utils/get-icon';

// Import CSS
import './editor.scss';

const { Component } = wp.element;

const { __, sprintf } = wp.i18n;

const {
	Tooltip,
	BaseControl,
	Button,
	ColorPicker,
	RangeControl,
} = wp.components;

const {
	ColorPalette,
} = wp.blockEditor;

export default class GenerateBlocksColorPicker extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			showPicker: false,
			showPalette: 'palette' === generateBlocksInfo.colorComponentDiplay,
			colorKey: false,
		};
	}

	render() {
		const {
			value,
			onChange,
			onOpacityChange,
			label,
			alpha = false,
			valueOpacity,
		} = this.props;

		const {
			showPicker,
			showPalette,
			colorKey,
		} = this.state;

		const isGlobalColor = value && value.startsWith( '--global' ) ? true : false;

		return (
			<BaseControl className={
				classnames( {
					'gblocks-color-picker-container': true,
					'gblocks-color-picker-is-open': showPicker,
				} )
			}>
				<BaseControl
					className="gblocks-component-color-picker-wrapper"
				>
					<span
						className="components-base-control__label"
						role="button"
						tabIndex="0"
						onClick={ () => {
							this.setState( {
								showPicker: ! showPicker,
							} );
						} }
						onKeyDown={ () => {
							this.setState( {
								showPicker: ! showPicker,
							} );
						} }
					>{ label }</span>
					<div className={ classnames( 'components-color-palette__item-wrapper components-circular-option-picker__option-wrapper', value ? '' : 'components-color-palette__custom-color' ) }>
						<Tooltip text={ __( 'Choose Color', 'generateblocks' ) }>
							<button
								type="button"
								aria-expanded={ showPicker }
								className="components-color-palette__item components-circular-option-picker__option"
								onClick={ () => {
									this.setState( {
										showPicker: ! showPicker,
									} );
								} }
								aria-label={ __( 'Custom color picker', 'generateblocks' ) }
								style={ { color: value ? hexToRGBA( value, valueOpacity ) : 'transparent' } }
							>
								<span className="components-color-palette__custom-color-gradient" />
							</button>
						</Tooltip>
					</div>
				</BaseControl>

				{ showPicker &&
					<div
						className={ classnames( {
							'gblocks-component-color-picker': true,
						} ) }
					>
						{ ! showPalette &&
							<BaseControl key={ colorKey }>
								<ColorPicker
									key={ colorKey }
									color={ value ? value : '' }
									onChangeComplete={ ( color ) => {
										onChange( color.hex );
									} }
									disableAlpha
								/>

								<div className="gblocks-color-controls">
									<Button
										isSmall
										isSecondary
										className="components-color-clear-color"
										onClick={ () => {
											onChange( '' );
										} }
									>
										{ __( 'Clear Color', 'generateblocks' ) }
									</Button>

									<Button
										isSmall
										isSecondary
										aria-expanded={ showPalette }
										className="components-color-show-palette"
										onClick={ () => {
											this.setState( {
												showPalette: ! showPalette,
											} );
										} }
									>
										{ __( 'Show Color Palette', 'generateblocks' ) }
									</Button>
								</div>
							</BaseControl>
						}

						{ ! showPalette && alpha && ! isGlobalColor &&
							<div className="gblocks-component-color-opacity">
								<Tooltip text={ __( 'Opacity', 'generateblocks' ) }>
									{ getIcon( 'gradient' ) }
								</Tooltip>

								<RangeControl
									value={ valueOpacity ? valueOpacity : 0 }
									onChange={ ( opacityValue ) => onOpacityChange( opacityValue ) }
									min={ 0 }
									max={ 1 }
									step={ 0.01 }
									initialPosition={ 1 }
								/>
							</div>
						}

						{ showPalette &&
							<div>
								<Button
									isSmall
									isSecondary
									aria-expanded={ showPalette }
									className="components-color-show-palette"
									onClick={ () => {
										this.setState( {
											showPalette: ! showPalette,
										} );
									} }
								>
									{ __( 'Choose Custom Color', 'generateblocks' ) }
								</Button>

								<BaseControl
									label={ __( 'Global color palette', 'generateblocks' ) }
									className="gblocks-component-color-picker-palette"
								>
									<div className="components-circular-option-picker">
										{ Object.keys( generateBlocksInfo.globalColorPalette ).map( ( key ) =>
											<div className="components-circular-option-picker__option-wrapper" key={ key }>
												{ /* translators: %s: values associated with CSS syntax, 'Pixel', 'Em', 'Percentage' */ }
												<Tooltip text={ sprintf( __( '%s', 'generateblocks' ), key ) } key={ key }>
													<Button
														key={ key }
														className="components-circular-option-picker__option"
														isPrimary={ value === key }
														aria-pressed={ value === key }
														/* translators: %s: values associated with CSS syntax, 'Pixel', 'Em', 'Percentage' */
														aria-label={ sprintf( __( '%s Units', 'generateblocks' ), key ) }
														onClick={ () => {
															if ( key === value ) {
																onChange( '' );
															} else {
																onChange( key );
															}
														} }
														style={ { backgroundColor: 'var(' + key + ')', color: 'var(' + key + ')' } }
													/>
												</Tooltip>
											</div>
										) }
									</div>

								</BaseControl>

								<BaseControl
									label={ __( 'Theme color palette', 'generateblocks' ) }
									className="gblocks-component-color-picker-palette"
								>
									<ColorPalette
										value={ value }
										onChange={ ( color ) => {
											onChange( color );

											this.setState( {
												colorKey: color,
											} );
										} }
										disableCustomColors={ true }
									/>
								</BaseControl>

								{ alpha && ! isGlobalColor &&
									<div className="gblocks-component-color-opacity">
										<Tooltip text={ __( 'Opacity', 'generateblocks' ) }>
											{ getIcon( 'gradient' ) }
										</Tooltip>

										<RangeControl
											value={ valueOpacity ? valueOpacity : 0 }
											onChange={ ( opacityValue ) => onOpacityChange( opacityValue ) }
											min={ 0 }
											max={ 1 }
											step={ 0.01 }
											initialPosition={ 1 }
										/>
									</div>
								}
							</div>
						}
					</div>
				}
			</BaseControl>
		);
	}
}
