import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">販売管理システム</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="製品管理"
          description="製品の追加、編集、在庫管理"
          link="/products"
          linkText="製品一覧へ"
        />
        <DashboardCard
          title="顧客管理"
          description="顧客情報の登録と管理"
          link="/customers"
          linkText="顧客一覧へ"
        />
        <DashboardCard
          title="注文管理"
          description="注文の作成、編集、履歴"
          link="/orders"
          linkText="注文一覧へ"
        />
        <DashboardCard
          title="レポート"
          description="売上分析と在庫レポート"
          link="/reports"
          linkText="レポート一覧へ"
        />
      </div>
    </main>
  );
}

function DashboardCard({
  title,
  description,
  link,
  linkText,
}: {
  title: string;
  description: string;
  link: string;
  linkText: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        href={link}
        className="text-blue-600 hover:text-blue-800 font-medium"
      >
        {linkText} →
      </Link>
    </div>
  );
}
