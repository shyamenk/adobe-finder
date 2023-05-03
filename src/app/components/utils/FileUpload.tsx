'use client';

import { supabase } from '@/utils/supaBase';
import { useState } from 'react';

export default function UploadForm() {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    for (const file of files) {
      const { data, error } = await supabase.storage
        .from('photos')
        .upload('public/', file);

      if (error) {
        console.error(error);
      } else {
        console.log(data);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} multiple />
      <button type="submit">Upload</button>
    </form>
  );
}
