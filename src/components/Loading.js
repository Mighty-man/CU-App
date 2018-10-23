import React from 'react';

const Loading = () => {
    return (
        <div style={styles.container} >
            <h1 style={styles.header} >Loading . . .</h1>
            <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}></div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        backgroundColor: 'rgba(40,24,140,0.9)',
        padding: 150,
        height: '100vh',                

    },
    header: {
        color: 'gold'
    }
}

export default Loading;