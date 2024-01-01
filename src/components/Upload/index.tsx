import {
  DeleteOutlined,
  InboxOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";
import React, {
  ReactEventHandler,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
} from "react";
import "./Upload.css";

type UploadProp = {};

const Upload: React.FC<UploadProp> & {
  Dragger: React.FC<DraggerProp>;
} = () => {
  return <div>나는 업로드</div>;
};

type DraggerProp = {
  name?: string;
  multiple?: boolean;
  accept: string;
  fileList: any[];
  setUploadedFiles: Function;
};

const Dragger: React.FC<DraggerProp> = ({
  name,
  multiple,
  accept,
  fileList,
  setUploadedFiles,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);
  const deleteFile = (targetFile: File) => {
    setUploadedFiles(fileList.filter((file) => file.name !== targetFile.name));
  };
  const addFiles = (files: File[]) => {
    setUploadedFiles([
      ...fileList,
      ...Array.from(files).filter(
        (file) => !fileList.map((file) => file.name).includes(file.name)
      ),
    ]);
  };
  const handleDragIn = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOut = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOver = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();
      if (e?.dataTransfer?.files) {
        const files = Array.from(e.dataTransfer.files).filter((file) => {
          return accept
            .split(",")
            .map((e) => e.trim())
            .includes(file.type);
        });
        addFiles(files);
      }
    },
    [addFiles]
  );
  const initDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.addEventListener("dragenter", handleDragIn);
      dragRef.current.addEventListener("dragleave", handleDragOut);
      dragRef.current.addEventListener("dragover", handleDragOver);
      dragRef.current.addEventListener("drop", handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  const resetDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.removeEventListener("dragenter", handleDragIn);
      dragRef.current.removeEventListener("dragleave", handleDragOut);
      dragRef.current.removeEventListener("dragover", handleDragOver);
      dragRef.current.removeEventListener("drop", handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);
  useEffect(() => {
    initDragEvents();

    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);

  return (
    <span className="upload-wrapper">
      <div className="upload upload-drag" ref={dragRef}>
        <span
          className="upload upload-btn"
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            type="file"
            accept={accept}
            multiple={multiple}
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={(e) => {
              if (e.target.files) addFiles(Array.from(e.target.files));
              e.target.value = "";
            }}
          />
          <div className="upload-drag-container">
            <p className="upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="upload-text">
              클릭하거나 파일을 드래그하여 업로드해주세요.
            </p>
            <p className="upload-hint">
              보안문서가 아닌 엑셀 파일만 사용할 수 있습니다.
            </p>
          </div>
        </span>
      </div>
      <div className="upload-list upload-list-text">
        {fileList.map((file, idx) => (
          <div className="upload-list-item-container" key={idx}>
            <div className="upload-list-item upload-list-item-undefined">
              <div className="upload-icon">
                <PaperClipOutlined />
              </div>
              <span className="upload-list-item-name">{file.name}</span>
              <span className="upload-list-item-actions">
                <button
                  className="upload-list-item-action"
                  onClick={() => deleteFile(file)}
                >
                  <DeleteOutlined />
                </button>
              </span>
            </div>
          </div>
        ))}
      </div>
    </span>
  );
};

Upload.Dragger = Dragger;

export default Upload;
