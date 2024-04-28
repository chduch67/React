import React from "react";
import Book from "./Book";

function BookLibrary(props) {
    return (
        <div>
            <Book name = "처음만난 React" numberOfPage={300} />
            <Book name = "처음만난 JSX" numberOfPage={400} />
            <Book name = "처음만난 Component" numberOfPage={500} />
        </div>
    );
}
export default BookLibrary;