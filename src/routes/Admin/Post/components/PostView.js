import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import category from 'config/common';
import { category } from 'components/common'
import {
  doPost,
  getBlogByID
} from '../modules/actions'
const PostView = ({ post, doPost, getBlogByID, editPost }) => {
  const [postTitle, setpostTitle] = useState('')
  const [postData, setPostData] = useState('')
  const [postCategory, setpostCategory] = useState('')
  const [isEdit, setEdit] = useState(false)
  const setFormValue = (data) => {
    setpostTitle(data.title);
    setPostData(data.content);
    setpostCategory(data.category);
  };
  useEffect(() => {
    if (new URLSearchParams(location.search).get("id")) {
      setEdit(true)
      getBlogByID(new URLSearchParams(location.search).get("id"), setFormValue)
    }
  }, [new URLSearchParams(location.search).get("id")]);
  const onCreatePost = () => {
    doPost(postTitle, postData, postCategory, '')
  }
  const onEditPost = () => {
    editPost(new URLSearchParams(location.search).get("id"), postTitle, postData, postCategory, '')
  }

  const editorConfiguration = {
    toolbar: ['bold', 'italic']
  };
  ClassicEditor
    .create(document.querySelector('#editor'), {
      toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],
      heading: {
        options: [
          { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
          { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
          { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
        ]
      },
    })
    .catch(error => {
    });
  return (
    <>
      <div className="tvf-container">
        <h4 className="adm-title">Tạo bài viết mới</h4>
        <div className="signin__form--control">
          <label htmlFor="loginEmail">Title</label>
          <input type="email" className="sign__control" placeholder="pigeon@nestcoop.com" required id="loginEmail" value={postTitle}
            onChange={e => setpostTitle(e.target.value)} id="regsiterEmail" />
          <select className="form-select" aria-label="Default select example" onChange={e => setpostCategory(e.target.value)} value={postCategory}>
            <option selected>Chose title category</option>
            {
              category.length > 0 &&
              category.map((cat, idx) => (
                <option key={idx} value={cat.id}>{cat.name}</option>
              ))
            }
          </select>
        </div>
        <br />
        <br />
        <br />
        <div>
          <CKEditor
            editor={ClassicEditor}
            data={postData}
            onReady={editor => {
              console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              setPostData(data);
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log('Blur.', editor);
            }}
            onFocus={(event, editor) => {
              console.log('Focus.', editor);
            }}
          />
        </div>
        <div className="text-right">
          {
            isEdit ? (
              <button type="submit" className="btn btn--round btn--orange" onClick={() => onEditPost()}>Save</button>
            ) : (
              <button type="submit" className="btn btn--round btn--orange" onClick={() => onCreatePost()}>Create</button>
            )
          }
        </div>
      </div>
    </>
  );
};

export default PostView;
