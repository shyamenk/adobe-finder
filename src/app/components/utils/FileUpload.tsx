'use client';

type Props = {
  fileChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function FileUpload({ fileChange }: Props) {
  return (
    <div>
      <label htmlFor="featured" className="text-sm">
        Upload Image
      </label>
      <input
        className="mt-1 block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file"
        type="file"
        multiple
        onChange={fileChange}
      />
      <button type="submit">Upload</button>
    </div>
  );
}
