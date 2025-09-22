"use client";
import { useState } from "react";
import { useAuthors } from "@/context/AuthorContext";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    birthDate: "",
    image: "",
    description: "",
  });

  const { addAuthor } = useAuthors();
  const [touched, setTouched] = useState({
    name: false,
    birthDate: false,
    image: false,
    description: false,
  });

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  }


  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    addAuthor({
      id: Date.now(),
      name: form.name,
      birthDate: form.birthDate,
      image: form.image,
      description: form.description,
    });
    setForm({ name: "", birthDate: "", image: "", description: "" });
    alert(`Guardando autor: ${form.name} con id: ${Date.now()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-gray-900"
    >
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Formulario para crear un autor
        </h2>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Completa los campos para crear un nuevo autor.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Name */}
        <div className="sm:col-span-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-gray-100">
            Name <span className="text-red-500">*</span>
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Smith"
              aria-label="Campo para nombre del autor"
              onBlur={handleBlur}
              aria-invalid={touched.name && !form.name}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 shadow-sm outline-none ring-0 transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
        </div>

        {/* BirthDate */}
        <div className="sm:col-span-2">
          <label htmlFor="birthDate" className="block text-sm font-medium text-gray-900 dark:text-gray-100">
            Birth date <span className="text-red-500">*</span>
          </label>
          <div className="mt-2">
            <input
              id="birthDate"
              name="birthDate"
              type="birthDate"
              required
              autoComplete="birthDate"
              value={form.birthDate}
              onChange={handleChange}
              placeholder="yyyy-mm-dd"
              aria-label="Campo para día de nacimiento del autor"
              onBlur={handleBlur}
              aria-invalid={touched.name && !form.name}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
        </div>

       {/* imageUrl */}
        <div className="sm:col-span-2">
          <label htmlFor="image" className="block text-sm font-medium text-gray-900 dark:text-gray-100">
            Image Url <span className="text-red-500">*</span>
          </label>
          <div className="mt-2">
            <textarea
              id="image"
              name="image"
              required
              rows={2}
              value={form.image}
              onChange={handleChange}
              placeholder="Insert image url"
              aria-label="Campo para insertar url de imagen del autor"
              onBlur={handleBlur}
              aria-invalid={touched.name && !form.name}
              className="w-full resize-y rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
        </div>

        {/* Description */}
        <div className="sm:col-span-2">
          <label htmlFor="description" className="block text-sm font-medium text-gray-900 dark:text-gray-100">
            Description <span className="text-red-500">*</span>
          </label>
          <div className="mt-2">
            <textarea
              id="description"
              name="description"
              rows={4}
              value={form.description}
              onChange={handleChange}
              placeholder="Description of the author"
              aria-label="Campo para descripción del autor"
              onBlur={handleBlur}
              aria-invalid={touched.name && !form.name}
              className="w-full resize-y rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 flex items-center justify-end gap-3">
        <button
          type="button"
          aria-label="Botón para cancelar la operación"
          className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 ring-1 ring-gray-300 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 dark:text-gray-200 dark:ring-gray-700 dark:hover:bg-gray-800"
          onClick={() =>
            setForm({ name: "", birthDate: "", image: "", description: ""})
          }
        >
          Cancel
        </button>
        <button
          type="submit"
          aria-label="Botón para confirmar la operación"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
        >
          Save
        </button>
      </div>
    </form>
  );
}