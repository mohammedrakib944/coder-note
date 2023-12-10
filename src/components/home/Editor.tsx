"use client";
import "./Editor.css";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { FaBackward } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";

// Editor
// import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// Image handler
function imageHandler(this: any) {
  const tooltip = this.quill.theme.tooltip;
  const originalSave = tooltip.save;
  const originalHide = tooltip.hide;

  tooltip.save = function () {
    const range = this.quill.getSelection(true);
    const value = this.textbox.value;
    if (value) {
      this.quill.insertEmbed(range.index, "image", value, "user");
    }
  };
  // Called on hide and save.
  tooltip.hide = function () {
    tooltip.save = originalSave;
    tooltip.hide = originalHide;
    tooltip.hide();
  };
  tooltip.edit("image");
  tooltip.textbox.placeholder = "Embed URL";
}

// Main component
const EditArticle = () => {
  const router = useRouter();

  const [content, setContent] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [title, setTitle] = useState("Javascript");
  const [coverImage, setCoverImage] = useState("");
  const [category, setCategory] = useState("");

  const toolbarOptions = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ background: [] }],
    ["image"],
    ["clean"], // remove formatting button
  ];

  const module = {
    toolbar: {
      container: toolbarOptions,
      handlers: {
        image: imageHandler,
      },
    },
  };

  return (
    <div className="max-w-[800px] mx-auto min-h-screen p-3">
      <div>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full border-r border-accent pr-5">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-base-100 text-4xl text-primary py-2 px-5 font-semibold outline-none mt-2"
            />
            <img src="./bar.svg" alt="" />
            <br />
            <div className="mt-4 pl-3">
              <ReactQuill
                value={content}
                placeholder="Write here ..."
                modules={module}
                onChange={setContent}
                theme="bubble"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditArticle;
