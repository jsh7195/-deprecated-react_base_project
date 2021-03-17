import React, { useMemo, useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import * as api from '@lib/api';
import * as common from '@lib/common';
import './QuillEditor.css';

// Reference https://quilljs.com/docs/quickstart/
const QuillEditorBlock = (props) => {
  const [tmpEditImg, setTmpEditImg] = useState([]);
  const {
    value,
    setValue,
    fileSrno,
    setFileSrno,
    editorImgList,
    setEditorImgList,
  } = props;
  useEffect(() => {
    setEditorImgList([...editorImgList, ...tmpEditImg]);
  }, [tmpEditImg]);
  if (fileSrno && document.getElementById('fileSrno')) {
    document.getElementById('fileSrno').value = fileSrno;
  }
  // html_textArea
  const htmlTextArea = document.createElement('textarea');
  const attrHtmlTextArea = document.createAttribute('quill__html');
  htmlTextArea.setAttributeNode(attrHtmlTextArea);

  /**
   * html 제어
   */
  function htmlHandler() {
    const activeTextArea =
      htmlTextArea.getAttribute('quill__html').indexOf('-active-') > -1;

    if (activeTextArea) {
      // html editor to quill
      this.quill.pasteHTML(htmlTextArea.value);
    } else {
      if (!this.quill.container.querySelector('.ql-custom')) {
        // textArea 삽입
        const quillCustomDiv = this.quill.addContainer('ql-custom');
        quillCustomDiv.appendChild(htmlTextArea);
      }

      // quill to html editor
      const html = this.quill.container.querySelector('.ql-editor').innerHTML;
      htmlTextArea.value = html;
    }

    htmlTextArea.setAttribute('quill__html', activeTextArea ? '' : '-active-');
  }

  /**
   * imageUrl 제어
   */
  function imageUrlHandler() {
    const range = this.quill.getSelection();
    const url = prompt('please copy paste the image url here.');

    if (url) {
      // 커서위치에 imageUrl 삽입
      this.quill.insertEmbed(range.index, 'image', url);
    }
  }

  /**
   * image 제어
   */
  function imageHandler() {
    // input file tag 생성
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', '.png,.jpg,.jpeg');
    input.click();

    // input change
    input.onchange = (e) => {
      const { files } = e.target;

      const getFileSrno = document.getElementById('fileSrno').value;

      const formData = new FormData();
      formData.append('fileList', files[0]);

      if (!common.isEmpty(getFileSrno)) {
        formData.append('fileSrno', getFileSrno);
      }

      // file 등록
      // const tempFile = api.file.postTempFileUpload(formData);
      const tempFile = async () => {
        try {
          return await Promise.all([api.file.postTempFileUpload(formData)]);
        } catch {
          console.error('searchCtg Error');
        }
      };
      tempFile().then((response) => {
        const { resultData } = response[0].data;
        // setEditorImgList([...editorImgList, ...resultData]);
        setTmpEditImg([...tmpEditImg, ...resultData]);
        if (common.isEmpty(getFileSrno)) {
          document.getElementById('fileSrno').value = resultData[0].fileSrno;
          setFileSrno(resultData[0].fileSrno);
        }

        // 커서위치에 image 삽입
        const range = this.quill.getSelection();

        this.quill.insertEmbed(
          range.index,
          'image',
          `/CM/upload/img/${resultData[0].fileDtlSrno}`
        );
      });
    };
  }

  /**
   * QuillEditor 모듈 구성
   */
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ font: [] }],
          // [{ header: [1, 2, 3, false] }],                   // custom button values
          [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
          ['bold', 'italic', 'underline', 'strike'], // toggled buttons
          [{ color: [] }, { background: [] }], // dropdown with defaults from theme
          [{ list: 'ordered' }, { list: 'bullet' }, { align: [] }],
          ['link', 'image', 'code-block'],
          ['clean'], // remove formatting button
        ],
        handlers: {
          link: imageUrlHandler,
          image: imageHandler,
          'code-block': htmlHandler,
        },
      },
    }),
    []
  );

  return (
    <>
      <input type="hidden" id="fileSrno" />
      <ReactQuill
        theme="snow"
        value={value}
        modules={modules}
        placeholder="Write something or insert a HTML"
        onChange={setValue}
      />
    </>
  );
};

export default QuillEditorBlock;
