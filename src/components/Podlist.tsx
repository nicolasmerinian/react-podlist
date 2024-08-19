import React, { useState } from 'react';
import './Podlist.css';

const Podlist = () => {
    const [text, setText] = useState<string>("");
    const [pods, setPods] = useState<string[]>([]);

    function handleTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setText(e.target.value);
        setPods(formatPods(e.target.value));
    }

    function formatPods(textareaValue: string): string[] {
        const chunks = textareaValue.split(/[\s,]+/);
        const newPods = [];

        for (let i = 0; i < chunks.length; i += 1) {
            const chunk = chunks[i];

            if (chunk?.trim()) {
                newPods.push(chunk.trim());
            }
        }

        return newPods;
    }

    const nbPods = <p className={ pods.length > 10 ? 'pods-10' : '' }>
        { pods.length <= 10 ? 'There are '+ pods.length + ' pods:' : 'No more than 10 pods!' }
    </p>;

    const podList = pods.map((pod, idx) => (<li key= { idx }>{ pod }</li>));

    return (
        <div className='Podlist'>
            <div>
                <textarea 
                    value={ text } 
                    onChange={ handleTextChange }
                    placeholder='Type pods here'
                    >
                </textarea>
                <button>Send</button>
            </div>
            <ul>
                { podList }
            </ul>
            { nbPods }
        </div>
    )
}

export default Podlist;