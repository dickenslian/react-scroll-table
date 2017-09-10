import React, {PureComponent} from 'react';
import TopHeader from './top_header';
import LeftHeader from './left_header';
import GridContent from './grid_content';
import './sass/grid.scss';


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
        let {
            width,
            height,
            leftHeaderWidth,
            topHeaderHeight,
            topHeaderValue,
            topHeaderAlign='center',
            leftHeaderValue,
            contentValue,
            contentConfig,
            onCellClick
        } = this.props;

        return (
           <div className="grid-container">
               <TopHeader
                   value={topHeaderValue}
                   align={topHeaderAlign}
                   xMove={this.state.xMove}
                   width={width}
                   height={topHeaderHeight}
               />
               <LeftHeader
                   value={leftHeaderValue}
                   yMove={this.state.yMove}
                   width={leftHeaderWidth}
                   height={height - topHeaderHeight}
               />
               <GridContent
                    value={contentValue}
                    onHorScroll={this.onHorScroll}
                    config={contentConfig}
                    onCellClick={onCellClick}
                    width={width - leftHeaderWidth}
                    height={height - topHeaderHeight}
               />
           </div>
        )
    }
}

export default Grid;
