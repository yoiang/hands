import React from 'react';
import { useState } from 'react';
import './App.css';
import handsData from './hands.json'
const cloneDeep = require('lodash/cloneDeep')

const swap = (switchimage, imagename) => {
  document.images[switchimage].src = imagename
  return true
}

const compareFingers = (left, right) => {
  return Object.keys(left).reduce((accumulated, currentFingerKey) => {
    if (accumulated === false) {
      return false
    }          

    const testFinger = left[currentFingerKey]
    const newFinger = right[currentFingerKey]

    return testFinger.position === newFinger.position &&
    testFinger.alternative === newFinger.alternative
  }, true)  
}

function App() {
  const [handIndex, setHandIndex] = useState(Math.floor(Math.random()*handsData.length))
  const [hand, setHand] = useState(handsData[handIndex])

  const fingerImage = (width, height, hand, fingerIndex) => {
    const finger = hand.fingers[fingerIndex]
    const { regular, alternative } = finger

    const imageName = `Img${regular}${fingerIndex}`
    const image = `images/hand/${regular}_${fingerIndex}.jpg`
    const altImage = `images/hand/${alternative}_${fingerIndex}.jpg`

    const onMouseEnter = () => {
      swap(imageName, altImage)
    }
    const onMouseLeave = () => {
      swap(imageName, image)
    }
    const onClick = () => {
      const newHand = cloneDeep(hand)
      newHand.name = "-"
      newHand.description = ""
      newHand.fingers[fingerIndex].regular = alternative
      newHand.fingers[fingerIndex].alternative = regular

      const matchIndex = handsData.findIndex((test) => {
        return compareFingers(test.fingers, newHand.fingers)       
      })
      if (matchIndex !== -1) {
        setHandIndex(matchIndex)
        // TODO: chain automatically
        setHand(handsData[matchIndex])
      } else {
        setHand(newHand)
      }
    }

    return (
      <img 
        name={imageName} 
        src={image} 
        style={{
          width, 
          height
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        alt="Finger" />
    )
  }

  const shadowSVG = (idSuffix) => {
    return (
        <svg height="0" xmlns="http://www.w3.org/2000/svg" className="frame-shadow" style={{
            position: 'absolute',
            zIndex: -1
          }}>
          <filter id={`drop-shadow-${idSuffix}`}>
              <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
              <feOffset dx="3" dy="3" result="offsetblur"/>
              <feFlood flood-color="rgba(0,0,0,0.5)"/>
              <feComposite in2="offsetblur" operator="in"/>
              <feMerge>
                  <feMergeNode/>
                  <feMergeNode in="SourceGraphic"/>
              </feMerge>
          </filter>
      </svg>
    )
  }

  return (
    <main>
      <div style={{
        display: 'grid',
        gridTemplateColumns: "91px 98px 23px 46px 59px 57px 81px 95px",
        gridTemplateRows: "91px 30px 189px 166px 56px 91px",
        gridGap: "0 0",
        justifyContent: "center",
        // justifyItems: "stretch",
        // alignItems: "stretch"
      }}>
        <div style={{
          gridColumn: "1 / span 1",
          gridRow: "1 / span 1",
          position: 'relative'
        }} className="shadowed-frame_01">
          { shadowSVG("frame_01") }
          <img src='/images/frame/frame_01.png' className="frame" style={{
            width: "91px",
            height: "91px",
            position: 'absolute'
          }} />
        </div>

        <div style={{
          gridColumn: "2 / span 6",
          gridRow: "1 / span 1",
          position: 'relative'
        }} className="shadowed-frame_02">
          { shadowSVG("frame_02") }
          <img src='/images/frame/frame_02.png' className="frame" style={{
            width: "364px",
            height: "91px"
          }} />
        </div>

        <div style={{
          gridColumn: "8 / span 1",
          gridRow: "1 / span 1",
          position: 'relative'
        }} className="shadowed-frame_03">
          { shadowSVG("frame_03") }
          <img src='/images/frame/frame_03.png' className="frame" style={{
            width: "95px",
            height: "91px"
          }} />
        </div>


        <div style={{
          gridColumn: "1 / span 1",
          gridRow: "2 / span 4",
          position: 'relative'
        }} className="shadowed-frame_04">
          { shadowSVG("frame_04") }
          <img src='/images/frame/frame_04.png' className="frame" style={{
            width: "91px",
            height: "441px"
          }} />
        </div>


        <div style={{
          gridColumn: "8 / span 1",
          gridRow: "2 / span 4",
          position: 'relative'
        }} className="shadowed-frame_05">
          { shadowSVG("frame_05") }
          <img src='/images/frame/frame_05.png' className="frame" style={{
            width: "95px",
            height: "441px"
          }} />
        </div>


        <div style={{
          gridColumn: "1 / span 1",
          gridRow: "6 / span 1",
          position: 'relative'
        }} className="shadowed-frame_06">
          { shadowSVG("frame_06") }
          <img src='/images/frame/frame_06.png' className="frame" style={{
            width: "91px",
            height: "91px"
          }} />
        </div>

        <div style={{
          gridColumn: "2 / span 6",
          gridRow: "6 / span 1",
          position: 'relative'
        }} className="shadowed-frame_07">
          { shadowSVG("frame_07") }
          <img src='/images/frame/frame_07.png' className="frame" style={{
            width: "364px",
            height: "91px"
          }} />
        </div>

        <div style={{
          gridColumn: "8 / span 1",
          gridRow: "6 / span 1",
          position: 'relative'
        }} className="shadowed-frame_08">
          { shadowSVG("frame_08") }
          <img src='/images/frame/frame_08.png' className="frame" style={{
            width: "95px",
            height: "91px"
          }} />
        </div>


        <div style={{
          gridColumn: "2 / span 3",
          gridRow: "2 / span 1"
        }}>
          <img src='/images/hand/s1.jpg' style={{
                width: 167,
                height: 30
              }} alt="Spacer" />
        </div>
        <div style={{
          gridColumn: "5 / span 1",
          gridRow: "2 / span 2"
        }}>
          {fingerImage(59, 219, hand, "2")}
        </div>
        <div style={{
          gridColumn: "6 / span 1",
          gridRow: "2 / span 2"
        }}>
          {fingerImage(57, 219, hand, "3")}
        </div>
        <div style={{
          gridColumn: "7 / span 1",
          gridRow: "2 / span 2"
        }}>
          {fingerImage(81, 219, hand, "4")}
        </div>
        <div style={{
          gridColumn: "2 / span 1",
          gridRow: "3 / span 1"
        }}>
          <img src='/images/hand/s2.jpg' width="98" height="189" alt="Spacer" />
        </div>
        <div style={{
          gridColumn: "3 / span 2",
          gridRow: "3 / span 1"
        }}>
          {fingerImage(69, 189, hand, "1")}
        </div>
        <div style={{
          gridColumn: "2 / span 2",
          gridRow: "4 / span 1"
        }}>
          {fingerImage(121, 166, hand, "0")}
        </div>
        <div style={{
          gridColumn: "4 / span 4",
          gridRow: "4 / span 2"
        }}>
          <img src="images/hand/palm2.jpg" width="243" height="222" alt="Palm 2" />
        </div>
        <div style={{
          gridColumn: "2 / span 2",
          gridRow: "5 / span 1"
        }}>
          <img src="images/hand/palm1.jpg" width="121" height="56" alt="Palm 1" />
        </div>
      </div>
      <div className="information">
        {
          hand.description
          ? (
            <div className="description">
              {hand.description}
            </div>
          )
          : null
        }
        <div className="name">
          {hand.name}
        </div>
      </div>
    </main>
  );
}

export default App;
