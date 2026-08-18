"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const PAGES = [
  { value: "anasayfa", label: "Ana Sayfa" },
  { value: "kartal-karot", label: "Kartal Karot" },
  { value: "kadikoy-karot", label: "Kadıköy Karot" },
  { value: "gebze-karot", label: "Gebze Karot" },
  { value: "maltepe-karot", label: "Maltepe Karot" },
];

const BUCKET = "site-images";

type FileItem = {
  name: string;
  id: string | null;
};

export default function AdminPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedPage, setSelectedPage] = useState("kartal-karot");
  const [files, setFiles] = useState<FileItem[]>([]);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    checkUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      loadFiles();
    }
  }, [user, selectedPage]);

  async function checkUser() {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    setUser(session?.user ?? null);
    setLoading(false);
  }

  async function login(email: string, password: string) {
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
    }
  }

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const email = String(form.get("email"));
    const password = String(form.get("password"));

    await login(email, password);
  }

  async function logout() {
    await supabase.auth.signOut();
  }

  async function loadFiles() {
    const { data, error } = await supabase.storage
      .from(BUCKET)
      .list(selectedPage, {
        limit: 100,
        sortBy: {
          column: "created_at",
          order: "desc",
        },
      });

    if (error) {
      setMessage(error.message);
      return;
    }

    setFiles(data ?? []);
  }

  async function uploadFiles(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const selectedFiles = e.target.files;

    if (!selectedFiles || selectedFiles.length === 0) {
      return;
    }

    setUploading(true);
    setMessage("");

    for (const file of Array.from(selectedFiles)) {
      const safeName = file.name
        .toLowerCase()
        .replace(/[^a-z0-9.-]/g, "-");

      const fileName = `${Date.now()}-${safeName}`;
      const filePath = `${selectedPage}/${fileName}`;

      const { error } = await supabase.storage
        .from(BUCKET)
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (error) {
        setMessage(`Yükleme hatası: ${error.message}`);
        setUploading(false);
        return;
      }
    }

    setMessage("Fotoğraflar başarıyla yüklendi. ✅");

    await loadFiles();

    e.target.value = "";
    setUploading(false);
  }

  async function deleteFile(fileName: string) {
    const filePath = `${selectedPage}/${fileName}`;

    const { error } = await supabase.storage
      .from(BUCKET)
      .remove([filePath]);

    if (error) {
      setMessage(`Silme hatası: ${error.message}`);
      return;
    }

    setMessage("Fotoğraf silindi. 🗑️");

    await loadFiles();
  }

  function getImageUrl(fileName: string) {
    const { data } = supabase.storage
      .from(BUCKET)
      .getPublicUrl(`${selectedPage}/${fileName}`);

    return data.publicUrl;
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-100 text-gray-900 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <p className="text-gray-900 font-medium">
            Yükleniyor...
          </p>
        </div>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="min-h-screen bg-gray-100 text-gray-900 flex items-center justify-center p-6">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md bg-white text-gray-900 rounded-2xl shadow-lg p-8"
        >
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Avrasya Karot
          </h1>

          <p className="text-gray-600 mb-6">
            Yönetim Paneli
          </p>

          <label className="block text-sm font-semibold text-gray-900 mb-2">
            E-posta
          </label>

          <input
            name="email"
            type="email"
            placeholder="E-posta"
            required
            className="w-full border border-gray-300 bg-white text-gray-900 placeholder-gray-400 rounded-lg px-4 py-3 mb-4 outline-none focus:border-gray-900"
          />

          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Şifre
          </label>

          <input
            name="password"
            type="password"
            placeholder="Şifre"
            required
            className="w-full border border-gray-300 bg-white text-gray-900 placeholder-gray-400 rounded-lg px-4 py-3 mb-5 outline-none focus:border-gray-900"
          />

          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white rounded-lg py-3 font-semibold transition"
          >
            Giriş Yap
          </button>

          {message && (
            <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-red-700 text-sm">
                {message}
              </p>
            </div>
          )}
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="bg-white text-gray-900 rounded-2xl shadow p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Avrasya Karot Yönetim Paneli
              </h1>

              <p className="text-gray-600 mt-1">
                Fotoğraflarını buradan yönetebilirsin.
              </p>
            </div>

            <button
              onClick={logout}
              className="border border-red-500 text-red-600 hover:bg-red-50 px-5 py-2 rounded-lg font-semibold transition"
            >
              Çıkış Yap
            </button>

          </div>
        </div>

        {/* UPLOAD */}
        <div className="bg-white text-gray-900 rounded-2xl shadow p-6 mb-6">

          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Fotoğraf Yükle
          </h2>

          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Fotoğrafın görüneceği sayfa
          </label>

          <select
            value={selectedPage}
            onChange={(e) => setSelectedPage(e.target.value)}
            className="w-full border border-gray-300 bg-white text-gray-900 rounded-lg px-4 py-3 mb-5 outline-none focus:border-gray-900"
          >
            {PAGES.map((page) => (
              <option
                key={page.value}
                value={page.value}
                className="text-gray-900 bg-white"
              >
                {page.label}
              </option>
            ))}
          </select>

          <label className="block border-2 border-dashed border-gray-300 rounded-xl p-10 text-center cursor-pointer hover:bg-gray-50 hover:border-gray-500 transition text-gray-900">

            <input
              type="file"
              accept="image/*"
              multiple
              onChange={uploadFiles}
              className="hidden"
            />

            <div className="text-lg font-semibold text-gray-900">
              {uploading
                ? "Fotoğraflar yükleniyor..."
                : "📸 Fotoğraf seçmek için tıkla"}
            </div>

            <div className="text-sm text-gray-600 mt-2">
              Birden fazla fotoğraf seçebilirsin.
            </div>

          </label>

          {message && (
            <div className="mt-4 bg-gray-50 border border-gray-200 rounded-lg p-3">
              <p className="text-sm text-gray-800">
                {message}
              </p>
            </div>
          )}

        </div>

        {/* FILES */}
        <div className="bg-white text-gray-900 rounded-2xl shadow p-6">

          <div className="flex items-center justify-between mb-5">

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                {
                  PAGES.find(
                    (p) => p.value === selectedPage
                  )?.label
                }
              </h2>

              <p className="text-gray-600">
                {files.length} fotoğraf
              </p>
            </div>

          </div>

          {files.length === 0 ? (
            <div className="text-center py-16 text-gray-600">
              Bu sayfada henüz fotoğraf yok.
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

              {files.map((file) => (
                <div
                  key={file.name}
                  className="border border-gray-200 rounded-xl overflow-hidden bg-white"
                >

                  <img
                    src={getImageUrl(file.name)}
                    alt={file.name}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-3">

                    <p className="text-xs text-gray-600 truncate mb-3">
                      {file.name}
                    </p>

                    <button
                      onClick={() => deleteFile(file.name)}
                      className="w-full bg-red-600 hover:bg-red-700 text-white rounded-lg py-2 text-sm font-semibold transition"
                    >
                      Fotoğrafı Sil
                    </button>

                  </div>

                </div>
              ))}

            </div>
          )}

        </div>

      </div>
    </main>
  );
}