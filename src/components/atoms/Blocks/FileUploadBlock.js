import React, { useEffect, useState, useRef } from 'react';

import * as api from '@lib/api';

const FileUploadBlock = (props) => {
  const {
    className,
    ButtonBlind,
    imgInfo,
    setImgInfo,
    array,
    index,
    fileSrno,
    setFileSrno,
  } = props;
  const [file, setFile] = useState([]);
  const fileInput = useRef();

  const showFileDialog = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  /**
   * 파일 전송
   */
  const fileTransferHandler = () => {
    const formData = new FormData();

    formData.append('fileList', file);
    if (fileSrno) {
      formData.append('fileSrno', fileSrno);
    }

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
      if (!fileSrno) {
        setFileSrno(resultData[0].fileSrno);
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        if (array) {
          const updateImgInfo = _.cloneDeep(imgInfo);
          if (index >= 0) {
            updateImgInfo[index] = { ...resultData[0], imgUrl: reader.result };
          } else {
            updateImgInfo.push({ ...resultData[0], imgUrl: reader.result });
          }
          setImgInfo(updateImgInfo);
        } else {
          setImgInfo({
            ...resultData[0],
            imgUrl: reader.result,
          });
        }
      };
      reader.readAsDataURL(file);
    });
  };

  /**
   * 파일 선택
   * @param {*} e files
   */
  const selectFileHandler = (e) => {
    const { files } = e.target;
    setFile(files[0]);
    e.target.value = null;
  };

  useEffect(() => {
    if (file && file.size > 0) {
      fileTransferHandler();
    }
  }, [file]);

  return (
    <>
      <input
        type="file"
        onChange={selectFileHandler.bind(this)}
        accept=".png,.jpg,.jpeg"
        className="dsp_none"
        ref={fileInput}
        onClick={(event) => {
          event.target.value = null;
        }}
      />
      <button
        type="button"
        className={className}
        onClick={() => {
          showFileDialog();
        }}
      >
        {ButtonBlind ? <span className="blind">이미지등록</span> : '전송'}
      </button>
    </>
  );
};

export default FileUploadBlock;
