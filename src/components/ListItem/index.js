/**
 * @file index.js
 * @author LaughingJacky
 * @create date 2019-06-24 14:47:28
 * @modify date 2019-06-24 14:47:28
 */
import React, {Fragment} from 'react';

export default ({text, isComplete, onToggle, onDelete, onTextChange}) => {
    const [editing, setEdit] = React.useState(false);
    const [inputText, setInput] = React.useState(text);
    const onChange = e => setInput(e.target.value);
    const toggleEdit = v => () => setEdit(v);
    const onSave = () => {
        onTextChange(inputText);
        toggleEdit(false)();
    };
    const handleEnter = e => {
        if (e.keyCode === 13) {
            onSave();
        }
    };
    return (<li
        data-testid="todo-list"
        data-complete={isComplete}
        data-text={text}
        className={`${editing ? 'editing' : ''} ${isComplete ? 'completed' : ''}`}>
        <input
            className="toggle"
            type="checkbox"
            checked={isComplete}
            onChange={onToggle}
        />
        {
            editing ? <input className="edit" value={inputText} autoFocus="autoFocus"
                onChange={onChange} onBlur={onSave} onKeyDown={handleEnter} />
            : <Fragment>
                <label onDoubleClick={toggleEdit(true)}>
                    {text}
                </label>
                <button onClick={onDelete} className="destroy" />
            </Fragment>
        }
    </li>);
};
