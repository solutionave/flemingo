import React from 'react'

const CheckedLine = (prop: { checked: boolean, label: string }) => {
    return (
        <div>
            <div style={{
                height: '10pt',
                width: '10pt',
                backgroundImage:'url(../../assets/icons/check.png)',
                backgroundSize:'contain',
                backgroundRepeat:'no-repeat'
            }}></div>
        </div>
    )
}

export default CheckedLine