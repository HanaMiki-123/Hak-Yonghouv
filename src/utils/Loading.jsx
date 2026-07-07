import React from 'react';

const Loading = () => {

    const style = `
        .spinner {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .spinner > div {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 3px solid red;
            border-top-color: blue;
            animation: spin 1s infinite linear;
        }

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }

    `;


    return (
        <>
            <div style={{ width: '100%', height: '100dvh', position: 'absolute', top: '0', left: '0', background: "linear-gradient(to bottom, rgba(0, 4, 255, 0.4), rgba(0, 255, 255, 0.4))" }} data_center="true">
                <div className="spinner">
                    <div className="">
                        <div></div>
                    </div>
                    <div className="">
                        <div></div>
                    </div>
                    <div className="">
                        <div></div>
                    </div>
                    <div className="">
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Loading;