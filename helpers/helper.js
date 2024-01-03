import {notFound} from 'next/navigation';

export const getPhonesHomePage = async () => {
  const res = await fetch('http://localhost:3000/api/phonesSale', {cache: 'no-store'});

  if (!res.ok) return notFound();

  return res.json();
};

export const getPhones = async (limit = 10, sort = '') => {
  const res = await fetch(`http://localhost:3000/api/phones?limit=${limit}&sort=${sort}`, {cache: 'no-store'});
  if (!res.ok) return notFound();

  return res.json();
};
