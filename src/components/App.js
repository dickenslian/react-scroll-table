import React from "react";
import Grid from './grid/grid'

class App extends React.Component {
    render() {
        return <Grid
            topHeaderValue={['aa9', 'bb', 'cc']}
            leftHeaderValue={['11', '22', '33 ']}
            contentValue={[
                            ['Dickens', 'Mark'],
                            ['Dickens', 'Mark'],
                            ['Dickens', 'Mark']
                        ]}/>
    }
}

export default App;
