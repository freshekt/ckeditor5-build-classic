
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export default class ImageButton extends Plugin {
	constructor( editor, callback ) {
		super( editor );
		this.callback = callback;
	}

	init() {
		this.editor.ui.componentFactory.add( 'imageButton', locale => {
			const view = new ButtonView( locale );

			view.set( {
				label: 'Insert image',
				icon: 'icons/image.svg',
				tooltip: true
			} );

			// Callback executed once the image is clicked.
			view.on( 'execute', () => this.callback && this.callback() );

			return view;
		} );
	}
}
