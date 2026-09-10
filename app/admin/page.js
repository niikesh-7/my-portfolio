'use client';
import { useEffect, useState } from 'react';

const projectOptions = [
  { slug: 'etabs-structural-analysis', label: 'Structural Analysis & Design (ETABS)' },
  { slug: 'koshi-flood-risk', label: 'Koshi River Basin Flood Risk (QGIS)' },
];

export default function AdminDashboard() {
  const [files, setFiles] = useState([]);
  const [selectedProject, setSelectedProject] = useState(projectOptions[0].slug);
  const [description, setDescription] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  async function loadFiles() {
    const res = await fetch('/api/admin/files');
    if (res.ok) {
      const data = await res.json();
      setFiles(data.files);
    }
  }

  useEffect(() => {
    loadFiles();
  }, []);

  async function handleUpload(e) {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    setMessage('');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('project_slug', selectedProject);
    formData.append('description', description);
    formData.append('is_public', isPublic ? 'true' : 'false');

    const res = await fetch('/api/admin/upload', {
      method: 'POST',
      body: formData,
    });

    setUploading(false);

    if (res.ok) {
      setMessage('File uploaded successfully.');
      setDescription('');
      setIsPublic(false);
      setFile(null);
      e.target.reset();
      loadFiles();
    } else {
      const data = await res.json();
      setMessage('Error: ' + data.error);
    }
  }

  async function toggleVisibility(id, currentValue) {
    await fetch('/api/admin/files/' + id, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ is_public: !currentValue }),
    });
    loadFiles();
  }

  async function deleteFile(id) {
    if (!confirm('Delete this file permanently?')) return;
    await fetch('/api/admin/files/' + id, { method: 'DELETE' });
    loadFiles();
  }

  return (
    <main className="max-w-3xl mx-auto px-6 pt-24 pb-24">
      <h1 className="text-3xl font-bold mb-10">Project Files Admin</h1>

      <form onSubmit={handleUpload} className="border border-gray-200 rounded-2xl p-6 mb-12 flex flex-col gap-4">
        <h2 className="font-semibold text-lg mb-2">Upload New File</h2>

        <select
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2"
        >
          {projectOptions.map((p) => (
            <option key={p.slug} value={p.slug}>{p.label}</option>
          ))}
        </select>

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="border border-gray-300 rounded-lg px-4 py-2"
          required
        />

        <input
          type="text"
          placeholder="Short description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2"
        />

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={isPublic}
            onChange={(e) => setIsPublic(e.target.checked)}
          />
          Make this file public
        </label>

        <button
          type="submit"
          disabled={uploading}
          className="bg-black text-white rounded-full px-6 py-2 font-medium hover:bg-gray-800 transition"
        >
          {uploading ? 'Uploading...' : 'Upload File'}
        </button>

        {message && <p className="text-sm">{message}</p>}
      </form>

      <h2 className="font-semibold text-lg mb-4">Existing Files</h2>
      <div className="flex flex-col gap-3">
        {files.map((f) => (
          <div key={f.id} className="border border-gray-200 rounded-xl p-4 flex items-center justify-between">
            <div>
              <p className="font-medium">{f.file_name}</p>
              <p className="text-xs text-gray-500">
                {f.project_slug} · {f.file_type} · {(f.file_size / 1024 / 1024).toFixed(2)} MB
              </p>
              {f.description && <p className="text-sm text-gray-600 mt-1">{f.description}</p>}
            </div>
            <div className="flex items-center gap-3">
              
              <a  href={'/api/admin/files/' + f.id + '/view'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs border border-gray-300 rounded-full px-3 py-1 hover:border-black transition"
              >
                View
              </a>
              <button
                onClick={() => toggleVisibility(f.id, f.is_public)}
                className="text-xs border border-gray-300 rounded-full px-3 py-1 hover:border-black transition"
              >
                {f.is_public ? 'Make Private' : 'Make Public'}
              </button>
              <button
                onClick={() => deleteFile(f.id)}
                className="text-xs text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}