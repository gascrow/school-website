"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    ["blockquote"],
    ["link"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "align",
  "blockquote",
  "link",
];

export default function RichTextEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <div className="rich-editor">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder="Tulis isi lengkap berita di sini..."
      />
      <style jsx global>{`
        .rich-editor .ql-container {
          min-height: 300px;
          font-size: 14px;
          border-bottom-left-radius: 0.5rem;
          border-bottom-right-radius: 0.5rem;
        }
        .rich-editor .ql-toolbar {
          border-top-left-radius: 0.5rem;
          border-top-right-radius: 0.5rem;
          background: #f9fafb;
        }
        .rich-editor .ql-editor {
          min-height: 300px;
        }
        .dark .rich-editor .ql-toolbar {
          background: #1f2937;
          border-color: #374151;
        }
        .dark .rich-editor .ql-container {
          border-color: #374151;
          background: #111827;
          color: #fff;
        }
        .dark .rich-editor .ql-editor.ql-blank::before {
          color: #6b7280;
        }
        .dark .rich-editor .ql-stroke {
          stroke: #9ca3af;
        }
        .dark .rich-editor .ql-fill {
          fill: #9ca3af;
        }
        .dark .rich-editor .ql-picker-label {
          color: #9ca3af;
        }
      `}</style>
    </div>
  );
}
