import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { api } from "../lib/api";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const ProductForm = ({ mode }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const isEdit = mode === "edit";

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [discount, setDiscount] = useState("");
  const [isNewArrival, setIsNewArrival] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (!isEdit) return;
    (async () => {
      try {
        const { data } = await api.get(`/api/products/getbyId/${id}`);
        const p = data.product;
        setName(p.name || "");
        setDescription(p.description || "");
        setPrice(p.price ?? "");
        setStock(p.stock ?? "");
        setCategory(p.category || "");
        setDiscount(p.discount ?? "");
        setIsNewArrival(!!p.isNewArrival);
      } catch (err) {
        toast.error(err?.response?.data?.message || "Failed to load product");
      }
    })();
  }, [id, isEdit]);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!name || !description || !price || !stock || !category) {
        toast.info("Please fill required fields");
        return;
      }

      if (!isEdit && !image) {
        toast.info("Image is required for new product");
        return;
      }

      const form = new FormData();
      form.append("name", name);
      form.append("description", description);
      form.append("price", price);
      form.append("stock", stock);
      form.append("category", category);
      form.append("discount", discount || 0);
      form.append("isNewArrival", isNewArrival);
      if (image) form.append("image", image);

      if (isEdit) {
        await api.put(`/api/products/updateProduct/${id}`, form, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Product updated");
      } else {
        await api.post(`/api/products/addProduct`, form, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Product added");
      }

      navigate("/products");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Save failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div>
          <div className="text-2xl font-extrabold text-gray-900">
            {isEdit ? "Edit Product" : "Add Product"}
          </div>
          <div className="text-gray-500 text-sm">
            Manage your catalog
          </div>
        </div>
        <button
          onClick={() => navigate("/products")}
          className="border border-gray-900 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition"
        >
          Back
        </button>
      </div>

      {/* Form Card */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 max-w-3xl">
        <form onSubmit={submit} className="grid gap-4">
          {/* Name + Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-500">
                Name *
              </label>
              <input
                className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="text-xs text-gray-500">
                Category *
              </label>
              <input
                className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="men / women / kids ..."
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-xs text-gray-500">
              Description *
            </label>
            <textarea
              rows={4}
              className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Price / Stock / Discount */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-xs text-gray-500">
                Price *
              </label>
              <input
                type="number"
                className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div>
              <label className="text-xs text-gray-500">
                Stock *
              </label>
              <input
                type="number"
                className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>

            <div>
              <label className="text-xs text-gray-500">
                Discount (%)
              </label>
              <input
                type="number"
                className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
            </div>
          </div>

          {/* New Arrival */}
          <label className="flex items-center gap-3 text-sm text-gray-700">
            <input
              type="checkbox"
              checked={isNewArrival}
              onChange={(e) => setIsNewArrival(e.target.checked)}
              className="h-4 w-4 accent-gray-900"
            />
            Mark as New Arrival
          </label>

          {/* Image */}
          <div>
            <label className="text-xs text-gray-500">
              Image {isEdit ? "(optional)" : "*"}
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              className="w-full mt-1 px-2 py-2 border border-gray-200 rounded-lg text-sm"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 bg-gray-900 text-white py-2 rounded-lg font-semibold hover:bg-black transition disabled:opacity-60"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ProductForm;
