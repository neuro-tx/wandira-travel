import React from 'react'

const Loading = () => {
    return (
        <div className="absolute top-0 left-0 w-screen h-dvh bg-ligh-50 z-[9999] ">
            <div className="absolute-center">
                <div class="three-body">
                    <div class="three-body__dot"></div>
                    <div class="three-body__dot"></div>
                    <div class="three-body__dot"></div>
                </div>
            </div>
        </div>
    )
}

export default Loading
