import React from "react";

const MessageParser = ({ children, actions }) => {
    const parse = (message) => {

        if (message.includes('hello')) {
            // console.log('hi');
            actions.handleHello();
        }

        if(message.includes('Did you know me?')) {
            actions.handleDev();
        }

        if(message.includes('weather update')) {
            actions.handleWeather();
        }

        if(message.includes('dog')) {
            actions.handleDog();
        }

        //console.log(message);
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions,
                });
            })}
        </div>
    );
};

export default MessageParser;