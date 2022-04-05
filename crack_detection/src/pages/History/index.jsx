import React from "react";
import './style.less'
import { useSelector } from "react-redux";

const HistoryPage = () => {
    const pic_path = useSelector(state => state.selectPic)
    const res_path = useSelector(state => state.showRes)
    return (
        <div className="showPic">

            {pic_path.map(item => {
                return (
                    <img src={require(`../../assets/img/${item}`)} />
                )
            })}
            <br />
            {res_path.map(item => {
                return (
                    <img className="res" src={require(`../../assets/lab/${item}`)} />
                )
            })}
        </div>
    )
}
export default HistoryPage