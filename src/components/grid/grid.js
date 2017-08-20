import React, {PureComponent} from 'react';
import TopHeader from './top_header';
import LeftHeader from './left_header';
import GridContent from './grid_content';
import './grid.scss';


class Grid extends PureComponent {

    state = {
        xMove: 0,
        yMove: 0
    }

    onHorScroll = (evt) => {
        this.setState({
            xMove: evt.target.scrollLeft,
            yMove: evt.target.scrollTop
        });
    }

    render() {
        let {topHeaderValue, topHeaderAlign='center', leftHeaderValue, contentValue, contentConfig, onCellClick} = this.props;

        return (
           <div className="grid-container">
               <TopHeader
                   value={topHeaderValue}
                   align={topHeaderAlign}
                   xMove={this.state.xMove}
               />
               <LeftHeader
                   value={leftHeaderValue}
                   yMove={this.state.yMove}
               />
               <GridContent
                    value={contentValue}
                    onHorScroll={this.onHorScroll}
                    config={contentConfig}
                    onCellClick={onCellClick}
               />
           </div>
        )
    }
}

export default Grid;