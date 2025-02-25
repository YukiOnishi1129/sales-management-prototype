-- サンプルデータ挿入

-- 製品サンプルデータ
INSERT INTO products (name, price, stock, description) VALUES
('ノートパソコン', 89000, 15, '高性能ビジネスノートPC'),
('デスクトップPC', 124000, 8, 'ハイエンドデスクトップPC'),
('モニター', 24800, 30, '27インチフルHDモニター'),
('キーボード', 5200, 45, 'メカニカルキーボード'),
('マウス', 3500, 60, 'ワイヤレスマウス'),
('USBメモリ', 1800, 100, '64GB USB3.0フラッシュドライブ'),
('外付けHDD', 9800, 25, '2TB ポータブルハードディスク'),
('ワイヤレスイヤホン', 12800, 35, 'ノイズキャンセリング機能付き'),
('タブレット', 45000, 12, '10インチタブレット'),
('スマートフォン', 78000, 20, 'ハイエンドスマートフォン');

-- 顧客サンプルデータ
INSERT INTO customers (name, email, phone, address) VALUES
('山田太郎', 'yamada@example.com', '03-1234-5678', '東京都新宿区新宿1-1-1'),
('佐藤花子', 'sato@example.com', '03-2345-6789', '東京都渋谷区渋谷2-2-2'),
('鈴木一郎', 'suzuki@example.com', '03-3456-7890', '東京都中央区銀座3-3-3'),
('田中美咲', 'tanaka@example.com', '03-4567-8901', '東京都港区六本木4-4-4'),
('伊藤健太', 'ito@example.com', '03-5678-9012', '東京都千代田区丸の内5-5-5'),
('渡辺裕子', 'watanabe@example.com', '03-6789-0123', '東京都豊島区池袋6-6-6'),
('高橋誠', 'takahashi@example.com', '03-7890-1234', '東京都板橋区板橋7-7-7'),
('中村和也', 'nakamura@example.com', '03-8901-2345', '東京都練馬区練馬8-8-8'),
('小林美優', 'kobayashi@example.com', '03-9012-3456', '東京都足立区千住9-9-9'),
('加藤大輔', 'kato@example.com', '03-0123-4567', '東京都江東区亀戸10-10-10');

-- 注文サンプルデータ
INSERT INTO orders (customer_id, total_price, status) VALUES
(1, 92500, 'completed'),
(2, 124000, 'completed'),
(3, 30000, 'pending'),
(4, 8700, 'processing'),
(5, 57800, 'cancelled');

-- 注文項目サンプルデータ
INSERT INTO order_items (order_id, product_id, quantity, price) VALUES
(1, 1, 1, 89000),
(1, 5, 1, 3500),
(2, 2, 1, 124000),
(3, 3, 1, 24800),
(3, 6, 1, 1800),
(3, 5, 1, 3500),
(4, 4, 1, 5200),
(4, 5, 1, 3500),
(5, 9, 1, 45000),
(5, 6, 2, 3600),
(5, 5, 2, 7000),
(5, 4, 1, 5200);