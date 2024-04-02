import React from 'react';
import background from "../../images/background.webp";

const Opening = () => {
    return (
        <div>
            <div>
                <div>
                    <h1>Khristina Ermak</h1>
                    <p>Профессиональный репортажный и портретный фотограф. Индивидуальный подход, раскрытие Вас и вашей истории, чувств и настроения. Передача вашей личности через мой объектив.
                    </p>
                </div>
                <div>
                    <img alt={'Khristina Ermak'} src={background}/>
                </div>
            </div>
        </div>
    );
};

export default Opening;