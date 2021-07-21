/*
* Copyright 2020, GeoSolutions Sas.
* All rights reserved.
*
* This source code is licensed under the BSD-style license found in the
* LICENSE file in the root directory of this source tree.
*/

import React from 'react';

function MainLoader({
    text
}) {
    return (
        <div className="gn-main-loader-container">
            <div className="gn-main-loader-content">
                <div className="gn-main-loader"></div>
                <div className="gn-main-loader-text">{text}</div>
            </div>
        </div>
    );
}

MainLoader.defaultProps = {
    text: ''
};

export default MainLoader;