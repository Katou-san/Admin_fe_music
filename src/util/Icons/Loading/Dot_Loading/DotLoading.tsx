import React from 'react';
import "./_dotLoading.scss"
import { Spinner } from '@nextui-org/react';

const Loading_Table = () => {
    return (

        <div className="table_data frame_Loading">
            <Spinner />
        </div>

    );
}



export default Loading_Table;
