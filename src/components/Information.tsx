import { Hand } from '../model/Types'

export type Props = {
    hand: Hand
}

export const Information = ({ hand }: Props) => (<>
    {
        !hand.description
            ? (
                <div className="no-description-spacer">&nbsp;</div>
            )
            : null
    }
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
</>)