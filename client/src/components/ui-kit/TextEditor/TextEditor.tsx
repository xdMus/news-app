import React, { Dispatch, SetStateAction, useState } from 'react';
import { Editor, EditorState } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styles from './TextEditor.module.scss';
import classNames from 'classnames';

interface TextEditorProps {
  value: EditorState;
  onValueChange: Dispatch<SetStateAction<EditorState>>;
}

const ToolbarConfig = {
  options: ['inline', 'fontSize', 'fontFamily', 'colorPicker', 'link', 'emoji'],
  inline: {
    options: ['bold', 'italic', 'underline'],
  },
};

const TextEditor: React.FC<TextEditorProps> = ({ value, onValueChange }) => {
  const [isOnFocus, setIsOnFocus] = useState<boolean>(false);

  return (
    <Editor
      wrapperClassName={classNames([
        styles.wrapperClassname,
        { [styles.onFocus]: isOnFocus },
      ])}
      toolbarClassName={styles.toolbarClassname}
      editorClassName={styles.editorClassname}
      editorState={value}
      onEditorStateChange={onValueChange}
      toolbar={ToolbarConfig}
      onFocus={() => setIsOnFocus(true)}
      onBlur={() => setIsOnFocus(false)}
    />
  );
};

export default TextEditor;

//TO BACK

// import { EditorState, convertToRaw, ContentState } from 'draft-js';
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';

//in useEffect
//setValue(makeDescriptionState(res.data))

// makeDescriptionState(descriptionDto) {
//   let description = EditorState.createEmpty();
//
//   const contentBlock = descriptionDto ? htmlToDraft(descriptionDto) : null;
//
//   if (contentBlock) {
//     const contentState = ContentState.createFromBlockArray(
//       contentBlock.contentBlocks
//     );
//
//     description = EditorState.createWithContent(contentState);
//   }
//
//   return description;
// }
