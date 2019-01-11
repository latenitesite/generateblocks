/**
 * Block: Section
 */

import Section from './section-tag';
import classnames from 'classnames';

const { __ } = wp.i18n; // Import __() from wp.i18n
const {
	PanelBody,
	RangeControl,
	Button,
	ResponsiveWrapper,
	ToggleControl,
	SelectControl,
	ColorPicker,
	ColorPalette,
	BaseControl,
	TextControl,
	Notice
} = wp.components;

const {
	Fragment,
	Component
} = wp.element;

const {
	InspectorControls,
	InspectorAdvancedControls,
	InnerBlocks,
	MediaUpload,
} = wp.editor;

const ELEMENT_ID_REGEX = /[\s#]/g;

class GenerateSection extends Component {
	componentDidMount() {
		var instanceId = this.props.instanceId + 1;

		if ( ! this.props.attributes.uniqueId ) {
			this.props.setAttributes( {
				uniqueId: instanceId,
			} );
		} else if ( this.props.attributes.uniqueId && this.props.attributes.uniqueId !== instanceId ) {
			this.props.setAttributes( {
				uniqueId: instanceId,
			} );
		}
	}

	render() {
		const {
			attributes,
			setAttributes,
			toggleSelection,
			instanceId
		} = this.props;

		const onSelectBgImage = ( media ) => {
			setAttributes( {
				bgImage: {
					id: media.id,
					image: media.sizes.large || media.sizes.full,
				}
			} )
		}

		const onRemoveBgImage = () => {
			setAttributes( {
				bgImage: null
			} )
		}

		const {
			uniqueId,
			tagName,
			elementId,
			cssClasses,
			outerContainer,
			innerContainer,
			paddingTop,
			paddingRight,
			paddingBottom,
			paddingLeft,
			backgroundColor,
			textColor,
			linkColor,
			linkColorHover,
			bgImage,
			bgOptions
		} = attributes;

		var backgroundImageValue;

		if ( bgImage ) {
			backgroundImageValue = 'url(' + bgImage.image.url + ')';

			if ( bgOptions.overlay ) {
				backgroundImageValue = 'linear-gradient(0deg, ' + customBackgroundColor + ', ' + customBackgroundColor + '), url(' + bgImage.image.url + ')';
			}
		}

		const css = `
			.section-` + uniqueId + ` {
				background-color: ` + backgroundColor + `;
				color: ` + textColor + `;
		  		background-image: ` + backgroundImageValue + `;
		  		background-size: cover;
		  		background-position: center center;
			}

			.section-` + uniqueId + ` a, .section-` + uniqueId + ` a:visited {
			  color: ` + linkColor + `;
			}

			.section-` + uniqueId + ` a:hover {
			  color: ` + linkColorHover + `;
			}

			.section-` + uniqueId + ` .inside-section {
			  padding-top: ` + paddingTop + `px;
			  padding-right: ` + paddingRight + `px;
			  padding-bottom: ` + paddingBottom + `px;
			  padding-left: ` + paddingLeft + `px;
			}
		`

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody
						title={ __( 'Layout', 'gp-premium' ) }
						initialOpen={ false }
					>
						<SelectControl
							label={ __( 'Container', 'gp-premium' ) }
							value={ outerContainer }
							options={ [
								{ label: __( 'Full width', 'gp-premium' ), value: 'full' },
								{ label: __( 'Contained', 'gp-premium' ), value: 'contained' },
							] }
							onChange={ ( outerContainer ) => { setAttributes( { outerContainer } ) } }
						/>

						<SelectControl
							label={ __( 'Inner Container', 'gp-premium' ) }
							value={ innerContainer }
							options={ [
								{ label: __( 'Full width', 'gp-premium' ), value: 'full' },
								{ label: __( 'Contained', 'gp-premium' ), value: 'contained' },
							] }
							onChange={ ( innerContainer ) => { setAttributes( { innerContainer } ) } }
						/>

						<RangeControl
							label={ __( 'Top Padding', 'gp-premium' ) }
							value={ paddingTop }
							onChange={ ( nextSpacing ) => {
								setAttributes( {
									paddingTop: nextSpacing
								} );
							} }
							min={ 0 }
							max={ 200 }
							step={ 10 }
						/>

						<RangeControl
							label={ __( 'Right Padding', 'gp-premium' ) }
							value={ paddingRight }
							onChange={ ( nextSpacing ) => {
								setAttributes( {
									paddingRight: nextSpacing,
								} );
							} }
							min={ 0 }
							max={ 200 }
							step={ 10 }
						/>

						<RangeControl
							label={ __( 'Bottom Padding', 'gp-premium' ) }
							value={ paddingBottom }
							onChange={ ( nextSpacing ) => {
								setAttributes( {
									paddingBottom: nextSpacing,
								} );
							} }
							min={ 0 }
							max={ 200 }
							step={ 10 }
						/>

						<RangeControl
							label={ __( 'Left Padding', 'gp-premium' ) }
							value={ paddingLeft }
							onChange={ ( nextSpacing ) => {
								setAttributes( {
									paddingLeft: nextSpacing,
								} );
							} }
							min={ 0 }
							max={ 200 }
							step={ 10 }
						/>

					</PanelBody>

					<PanelBody
						title={ __( 'Colors', 'gp-premium' ) }
						initialOpen={ false }
					>

						<BaseControl
							label={ __( 'Background Color', 'gp-premium' ) }
						>
							<ColorPicker
						   		color={ backgroundColor }
								onChangeComplete={ ( nextBgColor ) => {
									let colorString;

	                                if ( typeof nextBgColor.rgb === 'undefined' || nextBgColor.rgb.a === 1 ) {
	                                    colorString = nextBgColor.hex;
	                                } else {
	                                    const {
	                                        r, g, b, a,
	                                    } = nextBgColor.rgb;
	                                    colorString = `rgba(${r}, ${g}, ${b}, ${a})`;
	                                }

									setAttributes( {
										backgroundColor: colorString
									} )
								} }
							/>
						</BaseControl>

						<BaseControl
							label={ __( 'Text Color', 'gp-premium' ) }
						>
							<ColorPalette
								value={ textColor }
								onChange={ ( nextTextColor ) =>
									setAttributes( {
										textColor: nextTextColor
									} )
								}
							/>
						</BaseControl>

						<BaseControl
							label={ __( 'Link Color', 'gp-premium' ) }
						>
							<ColorPalette
								value={ linkColor }
								onChange={ ( nextLinkColor ) =>
									setAttributes( {
										linkColor: nextLinkColor
									} )
								}
							/>
						</BaseControl>

						<BaseControl
							label={ __( 'Link Color Hover', 'gp-premium' ) }
						>
							<ColorPalette
								value={ linkColorHover }
								onChange={ ( nextLinkColorHover ) =>
									setAttributes( {
										linkColorHover: nextLinkColorHover
									} )
								}
							/>
						</BaseControl>
					</PanelBody>
					<PanelBody
						title={ __( 'Background image' ) }
						initialOpen={ false }
					>
						{ ! bgImage &&
							<div>
								<MediaUpload
									title={ __('Set background image') }
									onSelect={ onSelectBgImage }
									allowedTypes={["image"]}
									modalClass="editor-post-featured-image__media-modal"
									render={ ( { open } ) => (
										<Button className="editor-post-featured-image__toggle" onClick={ open }>
											{ __( 'Set background image' ) }
										</Button>
									) }
								/>
							</div>
						}
						{ !! bgImage && <MediaUpload
							title={ __( 'Set background image' ) }
							onSelect={ onSelectBgImage }
							allowedTypes={["image"]}
							value={ bgImage.id }
							modalClass="editor-post-featured-image__media-modal"
							render={ ( { open } ) => (
								<div className="editor-bg-image">
									<Button className="editor-post-featured-image__preview" onClick={ open }>
										<ResponsiveWrapper
											naturalWidth={ bgImage.image.width }
											naturalHeight={ bgImage.image.height }
										>
											<img src={ bgImage.image.url } alt={ __( 'BG Image' ) } />
										</ResponsiveWrapper>
									</Button>
									<div className={ 'edit-bg-buttons' }>
										<Button onClick={ open } isDefault isLarge>
											{ __( 'Replace image' ) }
										</Button>
										<Button onClick={ onRemoveBgImage } isLink isDestructive>
											{ __('Remove background image') }
										</Button>
									</div>
								</div>
							) }
						/>
						}
						{ !! bgImage && <div className="section-bg-settings">
							<ToggleControl
								label={ __( 'Background Color Overlay', 'gp-premium' ) }
								checked={ !! bgOptions.overlay }
								onChange={ ( nextOverlay ) => {
									setAttributes( {
										bgOptions: {
											...bgOptions,
											overlay: nextOverlay,
										},
									} );
								} }
							/>

							<div className={ 'additional-class-notice' }>
								<Notice
									status={ 'warning' }
									isDismissible={ false }
								>
									{ __( 'Parallax can not be previewed in the editor.', 'gp-premium' ) }
								</Notice>
							</div>

							<ToggleControl
								label={ __( 'Parallax', 'gp-premium' ) }
								checked={ !! bgOptions.parallax }
								onChange={ ( nextFixed ) => {
									setAttributes( {
										bgOptions: {
											...bgOptions,
											parallax: nextFixed,
										},
									} );
								} }
							/>
						</div>}
					</PanelBody>
				</InspectorControls>
				<InspectorAdvancedControls>
					<SelectControl
						label={ __( 'Element Tag', 'gp-premium' ) }
						value={ tagName }
						options={ [
							{ label: 'section', value: 'section' },
							{ label: 'header', value: 'header' },
							{ label: 'footer', value: 'footer' },
							{ label: 'div', value: 'div' },
						] }
						onChange={ ( tagName ) => { setAttributes( { tagName } ) } }
					/>

					<TextControl
						label={ __( 'Element ID', 'gp-premium' ) }
						value={ elementId }
						onChange={ ( elementId ) => {
							elementId = elementId.replace( ELEMENT_ID_REGEX, '-' );
							setAttributes( { elementId } );
						} }
					/>

					<TextControl
						label={ __( 'CSS Classes', 'gp-premium' ) }
						value={ cssClasses }
						onChange={ ( cssClasses ) => { setAttributes( { cssClasses } ) } }
					/>
				</InspectorAdvancedControls>

				<style>{ css }</style>

				<Section
					tagName={ tagName }
					id={ elementId }
					className={ classnames( {
						'generate-section': true,
						[`section-${ uniqueId }`]: true,
						'grid-container grid-parent': 'contained' === outerContainer,
						'parallax': bgOptions.parallax,
						[`${ cssClasses }`]: '' !== cssClasses
					} ) }
				>
					<div
						className={ classnames( {
						'inside-section': true,
						'grid-container grid-parent': 'contained' === innerContainer
						} ) }
					>
						<InnerBlocks />
					</div>
				</Section>
			</Fragment>
		);
	}
}

export default ( GenerateSection );
