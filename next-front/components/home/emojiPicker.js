import React from 'react'
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";
import PropTypes from 'prop-types';

const EmojiPicker = ({onEmojiClick}) => {
    return (
        <div>
            <Picker
                onEmojiClick={onEmojiClick}
                disableAutoFocus={true}
                skinTone={SKIN_TONE_MEDIUM_DARK}
                groupNames={{ smileys_people: "PEOPLE" }}
                native
            /> 
        </div>
    )
}

export default EmojiPicker

EmojiPicker.propTypes = {
  onEmojiClick: PropTypes.func,
};