import {notFound} from 'next/navigation';

export const getPhonesHomePage = async () => {
  const res = await fetch('http://localhost:3000/api/phonesSale', );

  if (!res.ok) return notFound();

  return res.json();
};

export const getPhones = async (limit = 25, sort = '') => {
  const res = await fetch(`http://localhost:3000/api/phones?limit=${limit}&sort=${sort}`);

  if (!res.ok) return notFound();

  return res.json();
};

export const getPhone = async id => {
  const res = await fetch(`http://localhost:3000/api/phone?id=${id}`);

  if (!res.ok) return notFound();

  return res.json();
};