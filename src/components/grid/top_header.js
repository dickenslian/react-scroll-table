import React, {Component} from 'react';
import cn from 'classnames';

let TopHeader = (props) => {
    let {value, align = 'center', xMove = 0} = props;

    if (Object.prototype.toString.call(value) !== '[object Array]')
        throw new Error('grid top header value must be an array');

    if (value.length < 2)
        throw new Error('grid top header value must have more than 2 elements');


    let firstCellCls = cn({
        'header-cell align-left top-layer': align === 'left' && xMove > 0,
        'header-cell align-left bottom-layer': align === 'left' && xMove === 0,
        'header-cell align-center top-layer': (align === 'center' || align === 'right') && xMove > 0,
        'header-cell align-center bottom-layer': (align === 'center' || align === 'right') && xMove === 0
    });

    let headerCellCls = cn({
        'header-cell align-left': align === 'left',
        'header-cell align-center': align === 'center',
        'header-cell align-right': align === 'right',
    });

    let innerCellCls = cn({
        'justify-left': align === 'left',
        'justify-right': align === 'right'
    });

    let firstHeader = value[0];
    value = value.slice(1);   // 从第二个元素往后的元素

    return (
        <div className="top-header">
            <div className={firstCellCls}><span className="header-title">{firstHeader}</span></div>
            <div className="dynamic-block">
                <div style={{position:'absolute', display:'flex', left:`-${xMove}px`}}>
                    {value.map( (item, index) => {
                        if (align === 'left' && index === value.length - 1) {
                            return (
                                <div className='header-cell align-left trans' key={index}>
                                    <span className={innerCellCls}>{item}</span>
                                </div>
                            )
                        }
                        return (
                                <div className={headerCellCls} key={index}>
                                    <span className={innerCellCls}>{item}</span>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        </div>
    );
}

export default TopHeader;