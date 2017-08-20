import React, {Component} from 'react';

let LeftHeader = (props) => {
    let {value, yMove = 0} = props;

    if (Object.prototype.toString.call(value) !== '[object Array]')
        throw new Error('grid left header value must be an array');

    return (
        <div className="left-header" style={{maxHeight: `${50 * value.length + 10}px`}}>
            <div style={{position:'absolute', display:'flex', flexDirection: 'column', top:`-${yMove}px`}}>
                {value.map( (item, index) => {
                    if (typeof item === 'object') { // 如果value传入的是对象，则遍历对象属性后分行显示
                        return (
                            <div className='left-header-cell' key={index}>
                                {
                                    Object.keys(item).map( (prop, objIndex) => {
                                        if (objIndex === 0) {
                                            return <div className="main-text" key={objIndex}>{item[prop]}</div>
                                        }
                                        return <div className="sub-text" key={objIndex}>{item[prop]}</div>
                                    })
                                }
                            </div>
                        )
                    }
                    return (    // 如果value传入的是字符串，则只有一行数据
                        <div className='left-header-cell' key={index}>
                            <div className="main-text" >{item}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default LeftHeader;