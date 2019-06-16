
import * as React from 'react';
import {App} from './App';
import { render } from 'react-dom';

export interface IMainProps {
    app: App;
}

export class Main extends React.Component<IMainProps, {}> {

    constructor(props: IMainProps) {
        super(props);
        
    }

    public render(): JSX.Element {
        return (
            <>
                <h1>Hello main</h1>
            </>
        );
    }
}