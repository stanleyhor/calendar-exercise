import React, {PureComponent} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Page from './Page';

export default class App extends PureComponent {
    render() {
        return (
            <MuiThemeProvider>
                <Page {...this.props} />
            </MuiThemeProvider>
        );
    }
};
