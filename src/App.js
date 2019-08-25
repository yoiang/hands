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
    const image = `images/${regular}_${fingerIndex}.jpg`
    const altImage = `images/${alternative}_${fingerIndex}.jpg`

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
        width={width} 
        height={height} 
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        alt="Finger" />
    )
  }

  return (
    <main>
      <table className="hand">
        <tbody>
          <tr style={{ height: 30 }}>
            <td colSpan="3" style={{ height: 30 }}>
              <img src='/images/s1.jpg' style={{
                width: 167,
                height: 30
              }} alt="Spacer" />
            </td>
            <td rowSpan="2" height="219">
              {fingerImage(59, 219, hand, "2")}
            </td>
            <td rowSpan="2" height="219">
              {fingerImage(57, 219, hand, "3")}
            </td>
            <td rowSpan="2" height="219">
              {fingerImage(81, 219, hand, "4")}
            </td>
          </tr>
          <tr height="189">
            <td height="189">
              <img src='/images/s2.jpg' width="98" height="189" alt="Spacer" />
            </td>
            <td colSpan="2" height="189">
              {fingerImage(69, 189, hand, "1")}
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              {fingerImage(121, 166, hand, "0")}
            </td>
            <td colSpan="4" rowSpan="2">
              <img src="images/palm2.jpg" width="243" height="222" alt="Palm 2" />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <img src="images/palm1.jpg" width="121" height="56" alt="Palm 1" />
            </td>
          </tr>
          <tr>
            <td><img src="images/spacer.gif" width="98" height="1" alt="spacer" /></td>
            <td><img src="images/spacer.gif" width="23" height="1" alt="spacer" /></td>
            <td><img src="images/spacer.gif" width="46" height="1" alt="spacer" /></td>
            <td><img src="images/spacer.gif" width="59" height="1" alt="spacer" /></td>
            <td><img src="images/spacer.gif" width="57" height="1" alt="spacer" /></td>
            <td><img src="images/spacer.gif" width="81" height="1" alt="spacer" /></td>
          </tr>
        </tbody>
      </table>
      <div className="name">
        {hand.name}
      </div>
      <div className="description">
        {hand.description}
      </div>
    </main>
  );
}

export default App;
