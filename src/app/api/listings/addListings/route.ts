import { supabase } from '@/utils/supaBase';
import { NextResponse } from 'next/server';
type FormFields = {
  [key: string]: string | boolean | File;
};
export async function POST(req: Request) {
  const formData = await req.formData();
  const fields: FormFields = {};
  const files: FormFields = {};
  for (const entry of formData.entries()) {
    const [key, value] = entry;

    const prefix = fields['name'] ?? '';

    if (value instanceof Blob) {
      files[key] = value;
      const { data, error } = await supabase.storage
        .from('photos')
        .upload(`${prefix}/${key}`, value);
      if (error) {
        console.error('Error uploading image:', error);
      } else {
        console.log('Image uploaded:', data);
      }
    } else {
      fields[key] = value;
    }
  }
  return NextResponse.json({ Message: 'file uploaded' });
}
