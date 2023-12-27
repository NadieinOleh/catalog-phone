import {notFound} from 'next/navigation';

export const getPhones = async () => {
  const res = await fetch('http://localhost:3000/api/phonesSale', {cache: 'no-store'});

  if (!res.ok) return notFound();

  return res.json();
};
