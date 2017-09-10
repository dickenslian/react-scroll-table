import React, {Component} from 'react';

let GridContent = (props) => {

    let {value, onHorScroll, config = {showText: true}, onCellClick} = props;
    let {showText} = config;

    if (Object.prototype.toString.call(value) !== '[object Array]')
        throw new Error('grid content value must be an array');

    return (
        <div className="grid-content" onScroll={onHorScroll} style={{maxWidth: `${85 * value[0].length + 10}px`, maxHeight: `${50 * value.length + 10}px`}}>
            <div className="content-container">
                {
                    value.map( (rowItem, index) => {    // value为二维数组，遍历每一行数据
                        if (Object.prototype.toString.call(rowItem) !== '[object Array]')
                            throw new Error('grid content value item must be an array');

                        return (
                            <div className="content-row" key={index}>
                                {
                                    rowItem.map((cellObj, cellIndex) => {   // 单元格的绘制
                                        if (cellObj.customizedComponent) {
                                            return (
                                                <div key={cellIndex} className="content-cell" onClick={evt => {
                                                                onCellClick(evt, cellObj)
                                                }}>
                                                    {cellObj.customizedComponent}
                                                </div>
                                            );
                                        }

                                        let className = 'content-cell ';
                                        // 自定义单元格样式时，传入的对象必须有classRule字段
                                        if (cellObj.classRule) {
                                            className = className + cellObj.classRule;
                                        }

                                        if (showText === false) {   // 单元格内不显示内容
                                            return (<div className={className} key={cellIndex}
                                                         onClick={evt => {
                                                             onCellClick(evt, cellObj)
                                                         }}>
                                                    </div>);
                                        }

                                        if (typeof cellObj === 'object') { // 如果value传入的是对象，则遍历对象属性后分行显示
                                            return (
                                                <div className={className} key={cellIndex}
                                                     onClick={evt => {
                                                         onCellClick(evt, cellObj)
                                                     }}>
                                                    {
                                                        Object.keys(cellObj).map( (prop, objIndex) => {
                                                            if (objIndex === 0) {
                                                                return <div key={objIndex}>{cellObj[prop]}</div>
                                                            }
                                                            return <div className="sub-text" key={objIndex}>{cellObj[prop]}</div>
                                                        })
                                                    }
                                                </div>
                                            )
                                        }
                                            return (    // 如果value传入的是字符串，则只有一行数据
                                                <div className={className} key={cellIndex}
                                                     onClick={evt => {
                                                        onCellClick(evt, cellObj)
                                                }}>
                                                    <div>{cellObj}</div>
                                                </div>
                                            )
                                        })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default GridContent;