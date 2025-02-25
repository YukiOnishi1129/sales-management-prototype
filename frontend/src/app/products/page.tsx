import Link from "next/link";
import ProductTable from "./components/ProductTable";

export default function ProductsPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">製品一覧</h1>
        <Link
          href="/products/new"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          新規製品登録
        </Link>
      </div>
      <ProductTable />
    </div>
  );
}
