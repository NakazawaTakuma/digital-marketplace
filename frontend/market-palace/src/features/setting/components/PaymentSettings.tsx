import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./PaymentSettings.module.css";

interface PaymentMethod {
  id: number;
  type: string;
  details: string;
}

interface Subscription {
  id: number;
  name: string;
  active: boolean;
}

interface Invoice {
  id: number;
  date: string;
  amount: string;
  status: string;
}

interface PaymentData {
  methods: PaymentMethod[];
  subscriptions: Subscription[];
  invoices: Invoice[];
}

const PaymentSettings: React.FC = () => {
  const [data, setData] = useState<PaymentData>({
    methods: [
      { id: 1, type: "クレジットカード", details: "**** **** **** 1234" },
    ],
    subscriptions: [{ id: 1, name: "月額プレミアム", active: true }],
    invoices: [{ id: 1, date: "2025-04-01", amount: "¥1,000", status: "Paid" }],
  });

  const addMethod = () => {
    const id = Date.now();
    setData((prev) => ({
      ...prev,
      methods: [...prev.methods, { id, type: "", details: "" }],
    }));
  };

  const updateMethod = (
    id: number,
    field: keyof PaymentMethod,
    value: string
  ) => {
    setData((prev) => ({
      ...prev,
      methods: prev.methods.map((m) =>
        m.id === id ? { ...m, [field]: value } : m
      ),
    }));
  };

  const removeMethod = (id: number) => {
    setData((prev) => ({
      ...prev,
      methods: prev.methods.filter((m) => m.id !== id),
    }));
  };

  const toggleSubscription = (id: number) => {
    setData((prev) => ({
      ...prev,
      subscriptions: prev.subscriptions.map((s) =>
        s.id === id ? { ...s, active: !s.active } : s
      ),
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("支払い設定送信:", data);
    // TODO: API連携
  };

  return (
    <form className={styles.card} onSubmit={handleSubmit}>
      <h2 className={styles.title}>支払いと決済設定</h2>
      <div className={styles.container}>
        {/* 決済方法 */}
        <div className={styles.section}>
          <h3 className={styles.subTitle}>決済方法</h3>
          {data.methods.map((method) => (
            <div key={method.id} className={styles.fieldGroup}>
              <select
                value={method.type}
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  updateMethod(method.id, "type", e.target.value)
                }
                className={styles.input}
              >
                <option value="">選択してください</option>
                <option value="クレジットカード">クレジットカード</option>
                <option value="PayPal">PayPal</option>
                <option value="銀行振込">銀行振込</option>
              </select>
              <input
                type="text"
                value={method.details}
                placeholder="詳細"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  updateMethod(method.id, "details", e.target.value)
                }
                className={styles.input}
              />
              <button
                type="button"
                onClick={() => removeMethod(method.id)}
                className={styles.removeButton}
              >
                削除
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addMethod}
            className={styles.addButton}
          >
            + 決済方法を追加
          </button>
        </div>

        {/* 定期課金 */}
        <div className={styles.section}>
          <h3 className={styles.subTitle}>定期課金</h3>
          {data.subscriptions.map((sub) => (
            <div key={sub.id} className={styles.fieldGroup}>
              <span>{sub.name}</span>
              <label className={styles.switch}>
                <input
                  type="checkbox"
                  checked={sub.active}
                  onChange={() => toggleSubscription(sub.id)}
                />
                <span className={styles.slider}></span>
              </label>
            </div>
          ))}
        </div>

        {/* 請求書管理 */}
        <div className={styles.section}>
          <h3 className={styles.subTitle}>請求書管理</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>日付</th>
                <th>金額</th>
                <th>ステータス</th>
              </tr>
            </thead>
            <tbody>
              {data.invoices.map((inv) => (
                <tr key={inv.id}>
                  <td>{inv.id}</td>
                  <td>{inv.date}</td>
                  <td>{inv.amount}</td>
                  <td>{inv.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button type="submit" className={styles.submitButton}>
          保存
        </button>
      </div>
    </form>
  );
};

export default PaymentSettings;
