const {
	RichText,
} = wp.editor

const {
	createBlock
} = wp.blocks

const { __ } = wp.i18n

class Heading_2 extends React.Component {

	render() {

		const {
			attributes,
			setAttributes,
			props
		} = this.props

		if( setAttributes !== "not_set" ){
			return (
				<div className ="uagb-ctgl__sec-2">
					<RichText
		                tagName= { attributes.headingTag }
		                value={ attributes.headingTitle_2 }
		                className = 'uagb-ctgl__sec-heaidng-2'
		                onChange = { ( value ) => setAttributes( { headingTitle_2: value } ) }
		                multiline={ false }
		                placeholder={ __( "Heading 2" ) }
		                onMerge = { props.mergeBlocks }
		                unstableOnSplit = {
							props.insertBlocksAfter ?
								( before, after, ...blocks ) => {
									setAttributes( { content: before } )
									props.insertBlocksAfter( [
										...blocks,
										createBlock( "core/paragraph", { content: after } ),
									] )
								} :
								undefined
						}
						onRemove={ () => props.onReplace( [] ) }
		            />
		        </div>
			)
		}else{
			return (
				<div className ="uagb-ctgl__sec-2">
					<RichText.Content
		                tagName= { attributes.headingTag }
		                value={ attributes.headingTitle_2 }
		                className='uagb-ctgl__sec-heaidng-2'
		            />
		        </div>
			)
		}
	}
}

export default Heading_2