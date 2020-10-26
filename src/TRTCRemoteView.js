import React, {memo} from "react";
import TRTCVideoView from './TRTCView';
import PropTypes from 'prop-types';
const TRTCView = (props)=>{
    return(
        <TRTCVideoView {...props}/>
    )
};
TRTCView.propTypes = {
    uid: PropTypes.string.isRequired,
    renderMode: PropTypes.number,
    style: PropTypes.any,
}

export default TRTCView;
