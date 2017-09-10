import React from "react";
import Grid from '../src/grid'

class App extends React.Component {
    render() {
        return (
            <div>
                <Grid
                    width={500}
                    height={300}
                    leftHeaderWidth={100}
                    topHeaderHeight={50}
                    topHeaderValue={['Schedule', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']}
                    leftHeaderValue={['8:00~9:00', '9:00~10:00', '10:00~11:00', '11:00~12:00', '14:00~15:00', '15:00~16:00']}
                    contentValue={[
                                    ['Chinese', 'Science', 'Maths', 'English', 'Geography', 'Art', 'History'],
                                    ['Chinese', 'Science', 'Maths', 'English', 'Geography', 'Art', 'History'],
                                    ['Chinese', 'Science', 'Maths', 'English', 'Geography', 'Art', 'History'],
                                    ['Chinese', 'Science', 'Maths', 'English', 'Geography', 'Art', 'History'],
                                    ['Chinese', 'Science', 'Maths', 'English', 'Geography', 'Art', 'History'],
                                    ['Chinese', 'Science', 'Maths', 'English', 'Geography', 'Art', 'History']
                                ]}/>
            </div>
        )
    }
}

export default App;
