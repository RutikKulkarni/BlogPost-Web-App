import React, { useRef, useEffect } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";

interface BlogEditorProps {
  onSave: (data: OutputData) => void;
}

const BlogEditor: React.FC<BlogEditorProps> = ({ onSave }) => {
  const editor = useRef<EditorJS | null>(null);

  useEffect(() => {
    editor.current = new EditorJS();
  }, []);

  const saveBlog = async () => {
    if (editor.current) {
      const output: OutputData = await editor.current.save();
      onSave(output);
    }
  };

  return (
    <div>
      <div id="editorjs"></div>
      <button onClick={saveBlog}>Save Blog</button>
    </div>
  );
};

export default BlogEditor;
