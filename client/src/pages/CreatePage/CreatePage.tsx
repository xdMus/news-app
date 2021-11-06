import React, { useState } from 'react';
import TextEditor from '../../components/ui-kit/TextEditor/TextEditor';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Button, Input } from 'antd';
import { createNewsPost } from '../../api/newsPost';
import styles from './CreatePage.module.scss';

const CreatePage = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<EditorState>(
    EditorState.createEmpty()
  );

  const submitNewsPost = async () => {
    const postDto = {
      title,
      htmlContent: convertContentToHtml(),
    };

    await createNewsPost(postDto);
  };

  const convertContentToHtml = () => {
    let html = draftToHtml(convertToRaw(content.getCurrentContent()));

    if (!content.getCurrentContent().getPlainText()) {
      return null;
    }

    return html;
  };

  const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <div className={styles.container}>
      <h1>Create page</h1>

      <label className={styles.input}>
        Post title
        <Input
          placeholder="Post title"
          value={title}
          onChange={onTitleChange}
        />
      </label>

      <label className={styles.editorContainer}>
        Post content
        <TextEditor value={content} onValueChange={setContent} />
      </label>
      <Button
        type="primary"
        onClick={submitNewsPost}
        className={styles.submitButton}
      >
        Create
      </Button>
    </div>
  );
};

export default CreatePage;
