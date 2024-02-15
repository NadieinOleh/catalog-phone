import { notFound } from "next/navigation";

export const getPhonesHomePage = async () => {
  const res = await fetch(
    "https://catalog-phone-as6p6mljt-nadieinoleh.vercel.app//api/phonesSale",
    { next: { revalidate: 3600 * 60 } },
  );

  if (!res.ok) return notFound();

  return res.json();
};

export const getPhones = async (limit = 25, sort = "") => {
  const res = await fetch(
    `https://catalog-phone-as6p6mljt-nadieinoleh.vercel.app//api/phones?limit=${limit}&sort=${sort}`,
  );

  if (!res.ok) return notFound();

  return res.json();
};

export const getPhone = async (id) => {
  const res = await fetch(
    `https://catalog-phone-as6p6mljt-nadieinoleh.vercel.app//api/phone?id=${id}`,
    {
      cache: "force-cache",
      next: { revalidate: 3600 * 60 },
    },
  );

  if (!res.ok) return notFound();

  return res.json();
};
