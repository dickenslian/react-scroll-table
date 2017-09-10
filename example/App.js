import React from "react";
import Grid from '../src/grid'

class App extends React.Component {
    render() {
        return <Grid
            topHeaderValue={['aa9', 'bb', 'cc']}
            leftHeaderValue={['11', '22', '33 ']}
            contentValue={[
                            ['Dickens', 'Marco'],
                            ['Dickens', 'Mark'],
                            ['Dickens', 'Mark']
                        ]}/>
    }
}

export default App;
