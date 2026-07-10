'use client';
import { useEffect, useState } from 'react';
import Icon from '@/components/Icon';

export default function VisitorCount() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    let alive = true;
    fetch('/api/visitors')
      .then((r) => r.json())
      .then((d) => { if (alive) setCount(d.count); })
      .catch(() => {});
    return () => { alive = false; };
  }, []);

  return (
    <span className="p-foot-visits" title="Jumlah pengunjung portal">
      <Icon name="people" size={15} />
      <span>Pengunjung</span>
      <b>{count == null ? '…' : count.toLocaleString('id-ID')}</b>
    </span>
  );
}
