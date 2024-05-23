import { FingerImage } from './FingerImage'
import { FrameImage } from './FrameImage'
import { ShadowImage } from './ShadowImage'

import { Hand } from '../model/Types'
import { siteConfig } from '../siteConfig'

export type Props = {
    hand: Hand

    setHand: (hand: Hand) => void
    setHandIndex: (handIndex: number) => void
}

export const HandInFrame = ({ hand, setHand, setHandIndex }: Props) => {
    return <div style={{
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
            <ShadowImage idSuffix="frame_01" />
            <FrameImage src='frame_01.png' width="91px"
                height="91px" />
        </div>

        <div style={{
            gridColumn: "2 / span 6",
            gridRow: "1 / span 1",
            position: 'relative'
        }} className="shadowed-frame_02">
            <ShadowImage idSuffix="frame_02" />
            <FrameImage src='frame_02.png' width="364px"
                height="91px" />
        </div>

        <div style={{
            gridColumn: "8 / span 1",
            gridRow: "1 / span 1",
            position: 'relative'
        }} className="shadowed-frame_03">
            <ShadowImage idSuffix="frame_03" />
            <FrameImage src='frame_03.png' width="95px"
                height="91px" />
        </div>


        <div style={{
            gridColumn: "1 / span 1",
            gridRow: "2 / span 4",
            position: 'relative'
        }} className="shadowed-frame_04">
            <ShadowImage idSuffix="frame_04" />
            <FrameImage src='frame_04.png' width="91px"
                height="441px" />
        </div>


        <div style={{
            gridColumn: "8 / span 1",
            gridRow: "2 / span 4",
            position: 'relative'
        }} className="shadowed-frame_05">
            <ShadowImage idSuffix="frame_05" />
            <FrameImage src='frame_05.png' width="95px"
                height="441px" />
        </div>


        <div style={{
            gridColumn: "1 / span 1",
            gridRow: "6 / span 1",
            position: 'relative'
        }} className="shadowed-frame_06">
            <ShadowImage idSuffix="frame_06" />
            <FrameImage src='frame_06.png' width="91px"
                height="91px" />
        </div>

        <div style={{
            gridColumn: "2 / span 6",
            gridRow: "6 / span 1",
            position: 'relative'
        }} className="shadowed-frame_07">
            <ShadowImage idSuffix="frame_07" />
            <FrameImage src='frame_07.png' width="364px"
                height="91px" />
        </div>

        <div style={{
            gridColumn: "8 / span 1",
            gridRow: "6 / span 1",
            position: 'relative'
        }} className="shadowed-frame_08">
            <ShadowImage idSuffix="frame_08" />
            <FrameImage src='frame_08.png' width="95px"
                height="91px" />
        </div>


        <div style={{
            gridColumn: "2 / span 3",
            gridRow: "2 / span 1"
        }}>
            <img src={`${siteConfig.publicFileRoot}/images/hand/s1.jpg`} style={{
                width: 167,
                height: 30
            }} alt="Spacer" />
        </div>
        <div style={{
            gridColumn: "5 / span 1",
            gridRow: "2 / span 2"
        }}>
            <FingerImage width={59} height={219} hand={hand} fingerIndex="2" setHand={setHand} setHandIndex={setHandIndex} />
        </div>
        <div style={{
            gridColumn: "6 / span 1",
            gridRow: "2 / span 2"
        }}>
            <FingerImage width={57} height={219} hand={hand} fingerIndex="3" setHand={setHand} setHandIndex={setHandIndex} />
        </div>
        <div style={{
            gridColumn: "7 / span 1",
            gridRow: "2 / span 2"
        }}>
            <FingerImage width={81} height={219} hand={hand} fingerIndex="4" setHand={setHand} setHandIndex={setHandIndex} />
        </div>
        <div style={{
            gridColumn: "2 / span 1",
            gridRow: "3 / span 1"
        }}>
            <img src={`${siteConfig.publicFileRoot}/images/hand/s2.jpg`} width="98" height="189" alt="Spacer" />
        </div>
        <div style={{
            gridColumn: "3 / span 2",
            gridRow: "3 / span 1"
        }}>
            <FingerImage width={69} height={189} hand={hand} fingerIndex="1" setHand={setHand} setHandIndex={setHandIndex} />
        </div>
        <div style={{
            gridColumn: "2 / span 2",
            gridRow: "4 / span 1"
        }}>
            <FingerImage width={121} height={166} hand={hand} fingerIndex="0" setHand={setHand} setHandIndex={setHandIndex} />
        </div>
        <div style={{
            gridColumn: "4 / span 4",
            gridRow: "4 / span 2"
        }}>
            <img src={`${siteConfig.publicFileRoot}/images/hand/palm2.jpg`} width="243" height="222" alt="Palm 2" />
        </div>
        <div style={{
            gridColumn: "2 / span 2",
            gridRow: "5 / span 1"
        }}>
            <img src={`${siteConfig.publicFileRoot}/images/hand/palm1.jpg`} width="121" height="56" alt="Palm 1" />
        </div>
    </div>
}