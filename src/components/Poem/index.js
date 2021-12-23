import React from "react";
import "./styles.css";

export default function Poem({ poem }) {
    if (!poem) {
        return <></>;
    }

    return (
        <div className="poem">
            <h3>{poem.title}</h3>

            {poem.verses.map((verse, index) => (
                <span className="verse" key={index}>
                    {verse}
                </span>
            ))}

            <h4>{poem.author}</h4>
        </div>
    );
}
