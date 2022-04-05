import React from "react";
import './style.less'
import { NavLink } from "react-router-dom";
const BottomNav = () => {
    return (
        <div className='nav-footer'>
            <ul className='.clear-fix:after'>
                <li>
                    <NavLink exact='true' to='/'>
                        <i className='iconfont icon-zhuye'></i>
                        首页
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/history'>
                        <i className='iconfont icon-category'></i>
                        历史回顾
                    </NavLink>
                </li>

            </ul>
        </div>
    )
}
export default BottomNav