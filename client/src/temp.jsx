import React, { useState } from 'react';


const QRCodeGenerator = () => {
    const [qrText, setQrText] = useState('');
    const [qrImage, setQrImage] = useState('');
    const [error, setError] = useState(false);

    const generateQR = () => {
        if (qrText.trim().length > 0) {
            const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrText)}`;
            setQrImage(qrCodeUrl);
            setError(false);
        } else {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 1000);
        }
    };

    return (
        <div className="container">
            <p>Enter your text or URL</p>
            <input 
                type="text" 
                placeholder="Text or URL" 
                value={qrText} 
                onChange={(e) => setQrText(e.target.value)}
                className={error ? 'error' : ''}
            />
            <div id="imgBox" className={qrImage ? 'show-img' : ''}>
                {qrImage && <img src={qrImage} alt="QR Code" id="qrImage" />}
            </div>
            <button onClick={generateQR}>Generate QR Code</button>
        </div>
    );
};

export default QRCodeGenerator;