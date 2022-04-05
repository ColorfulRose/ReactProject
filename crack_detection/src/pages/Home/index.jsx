import React, { useState, useRef } from "react";
import './style.less'
import { useDispatch } from "react-redux";

import { loadPicA, res_pathA } from "../../redux/actions";
import { Button } from 'antd'

const Home = (props) => {
    const [showPic, setShowPic] = useState(false)
    const [picPath, setPicPath] = useState("")
    const [res_path, setResPath] = useState('')
    const [result_detection, setResultDetec] = useState(false)
    const dispath = useDispatch()
    const loadPic = useRef(null)
    const loadPic2 = useRef(null)
    const loadPic3 = useRef(null)

    function selectPic(e) {
        setShowPic(true)
        let imgP = e.target.value
        console.log(e.target.value)
        imgP = imgP.substr(imgP.lastIndexOf("\\") + 1)
        dispath(loadPicA(imgP))
        setPicPath(imgP)

    }
    function showResult() {
        setResultDetec(true)
        let imgP = picPath.split('.')[0] + '.png'
        setResPath(imgP)
        dispath(res_pathA(imgP))
        // console.log(imgP)
    }

    return (
        <div className="home">
            {
                showPic ? <img src={require(`../../assets/img/${picPath}`)}></img> :
                    <div className="waitPic">等待加载图像</div>
            }
            <div className="btns">
                <input type='file' className="inputfile" ref={loadPic} onChange={selectPic} />
                <Button type="primary" onClick={() => { loadPic.current.click() }}>加载本地图像</Button>
                <input type='file' className="inputfile" ref={loadPic2} onChange={selectPic} />
                <Button type="primary" className="btn2" onClick={() => { loadPic2.current.click() }}>加载细裂缝图像</Button>
                <input type='file' className="inputfile" ref={loadPic3} onChange={selectPic} />
                <Button type="primary" className="btn2" onClick={() => { loadPic3.current.click() }}>加载粗裂缝图像</Button>
                <Button type="primary" className="detection" onClick={showResult}>检测</Button>
            </div>
            {
                result_detection ? <img src={require(`../../assets/lab/${res_path}`)}></img> :
                    <div className="waitPic">尚未检测</div>
            }
        </div >
    )
}
export default Home