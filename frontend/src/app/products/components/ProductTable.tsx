"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
  created_at: string;
}

export default function ProductTable() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("製品データの取得に失敗しました");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "不明なエラーが発生しました"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <div className="text-center py-4">読み込み中...</div>;
  if (error) return <div className="text-red-500 py-4">{error}</div>;
  if (products.length === 0)
    return <div className="text-center py-4">製品がありません</div>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 text-left">ID</th>
            <th className="py-3 px-4 text-left">製品名</th>
            <th className="py-3 px-4 text-left">価格</th>
            <th className="py-3 px-4 text-left">在庫</th>
            <th className="py-3 px-4 text-left">アクション</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="border-b border-gray-200 hover:bg-gray-50"
            >
              <td className="py-3 px-4">{product.id}</td>
              <td className="py-3 px-4">{product.name}</td>
              <td className="py-3 px-4">¥{product.price.toLocaleString()}</td>
              <td className="py-3 px-4">{product.stock}</td>
              <td className="py-3 px-4 space-x-2">
                <Link
                  href={`/products/${product.id}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  詳細
                </Link>
                <Link
                  href={`/products/${product.id}/edit`}
                  className="text-green-600 hover:text-green-800"
                >
                  編集
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
