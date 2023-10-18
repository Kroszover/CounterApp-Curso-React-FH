import { Fragment } from "react";


export const FirstApp = () => {
    return (
        <Fragment>
            <h1>FirstApp</h1>
            <p>My first React app</p>
        </Fragment>

    );
}

//Ambas formas son equivalentes

export const FirstAppSinFragment = () => {
    return (
        <>
            <h1>FirstAppSinFragment</h1>
            <p>My first React app</p>
        </>

    );
}



