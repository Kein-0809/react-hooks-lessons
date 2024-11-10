//? 11. オブジェクトや配列のstate更新

import { useState } from "react";

const Lesson1_2 = () => {

  const [form, setForm] = useState({
    firstName: "Kane",
    lastName: "Ishii",
    email: "ishii@example.com",
  });

  // スプレッド構文を使用した挙動の確認
  console.log("formの中身");
  console.log(form);
  console.log("スプレッド構文を使用した場合");
  console.log({ ...form });
  console.log("firstNameのみを更新した場合");
  console.log({ ...form, firstName: "Kane" });

  return (
    <div>
      <div className="flex mb-5">
        <label>
          First Name:
          <input
            type="text"
            className="border border-slate-500"
            // スプレッド構文を使用することで、オブジェクトのコピーを作成して、firstNameのみを更新する
            onChange={(e) => {
              setForm({...form, firstName: e.target.value})
            }}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            className="border border-slate-500"
            // スプレッド構文を使用することで、オブジェクトのコピーを作成して、lastNameのみを更新する
            onChange={(e) => {
              setForm({...form, lastName: e.target.value})
            }}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            className="border border-slate-500"
            // スプレッド構文を使用することで、オブジェクトのコピーを作成して、emailのみを更新する
            onChange={(e) => {
              setForm({...form, email: e.target.value})
            }}
          />
        </label>
      </div>
      <p>
        {form.firstName}
        <br />
        {form.lastName}
        <br />
        {form.email}
        <br />
      </p>
    </div>
  );
};

export default Lesson1_2;
