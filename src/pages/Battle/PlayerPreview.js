import { memo } from "react";

const PlayerPreview = memo(({ avatar, userName, children }) => {
    return (
        <div>
            <div className="column">
                <img src={avatar} alt='Avatar' className="avatar" />
                <h3>{userName}</h3>
            </div>
            {children}
        </div>
    )
})

export default PlayerPreview;